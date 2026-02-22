"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ── Pastel nucleotide colors (design system palette) ──────────────────────
const NT_COLORS = [
  "#9B8EF0", // violet
  "#81BEFF", // sky blue
  "#6FCF97", // mint green
  "#FFAB91", // peach
  "#C3B8F8", // lilac
  "#A8D8FF", // soft sky
];

// ── Base pair rung (cylinder connecting two nucleotides) ──────────────────
function BasePairRung({
  mid,
  quat,
  length,
}: {
  mid: [number, number, number];
  quat: [number, number, number, number];
  length: number;
}) {
  const innerLen = Math.max(length - 0.22, 0.1);
  return (
    <mesh position={mid} quaternion={quat}>
      <cylinderGeometry args={[0.018, 0.018, innerLen, 6, 1]} />
      <meshStandardMaterial
        color="#D4CCFF"
        emissive="#7C6EE6"
        emissiveIntensity={0.18}
        roughness={0.55}
        transparent
        opacity={0.72}
      />
    </mesh>
  );
}

// ── Nucleotide sphere ─────────────────────────────────────────────────────
function Nucleotide({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.115, 14, 14]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.38}
        roughness={0.28}
        metalness={0.05}
      />
    </mesh>
  );
}

// ── Main RNA helix ────────────────────────────────────────────────────────
function RNAHelix() {
  const helixRef = useRef<THREE.Group>(null);

  // A-form RNA helix parameters
  const TURNS = 2.5;
  const N_PER_TURN = 11;
  const TOTAL = Math.ceil(TURNS * N_PER_TURN); // 28 nucleotide pairs
  const RADIUS = 1.1;
  const HEIGHT = 6.6;

  // Pre-compute all helix geometry once
  const geom = useMemo(() => {
    const s1: THREE.Vector3[] = [];
    const s2: THREE.Vector3[] = [];

    for (let i = 0; i <= TOTAL; i++) {
      const t = (i / TOTAL) * TURNS * Math.PI * 2;
      const y = (i / TOTAL) * HEIGHT - HEIGHT / 2;

      s1.push(new THREE.Vector3(RADIUS * Math.cos(t), y, RADIUS * Math.sin(t)));
      s2.push(
        new THREE.Vector3(
          RADIUS * Math.cos(t + Math.PI),
          y,
          RADIUS * Math.sin(t + Math.PI)
        )
      );
    }

    const curve1 = new THREE.CatmullRomCurve3(s1, false, "catmullrom", 0.5);
    const curve2 = new THREE.CatmullRomCurve3(s2, false, "catmullrom", 0.5);

    // Pre-compute rung geometry data (mid, quaternion, length)
    const rungs = s1.map((p1, i) => {
      const p2 = s2[i];
      const dir = new THREE.Vector3().subVectors(p2, p1);
      const len = dir.length();
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      const quat = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        dir.clone().normalize()
      );
      return {
        mid: mid.toArray() as [number, number, number],
        quat: [quat.x, quat.y, quat.z, quat.w] as [number, number, number, number],
        len,
        p1: p1.toArray() as [number, number, number],
        p2: p2.toArray() as [number, number, number],
        color: NT_COLORS[i % NT_COLORS.length],
      };
    });

    return { curve1, curve2, rungs };
  }, []);

  // Smooth Y-axis rotation + gentle breathing float
  useFrame(({ clock }) => {
    if (!helixRef.current) return;
    helixRef.current.rotation.y = clock.elapsedTime * 0.34;
    helixRef.current.position.y = Math.sin(clock.elapsedTime * 0.45) * 0.09;
  });

  return (
    <group ref={helixRef}>
      {/* ── Strand 1 — violet phosphate backbone ── */}
      <mesh>
        <tubeGeometry args={[geom.curve1, 300, 0.052, 12, false]} />
        <meshStandardMaterial
          color="#7C6EE6"
          emissive="#3D2B9A"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.18}
        />
      </mesh>

      {/* ── Strand 2 — soft blue phosphate backbone ── */}
      <mesh>
        <tubeGeometry args={[geom.curve2, 300, 0.052, 12, false]} />
        <meshStandardMaterial
          color="#5A9DF5"
          emissive="#1A4888"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.18}
        />
      </mesh>

      {/* ── Nucleotide pairs + base rungs ── */}
      {geom.rungs.map((r, i) => (
        <group key={i}>
          <Nucleotide position={r.p1} color={r.color} />
          <Nucleotide position={r.p2} color={r.color} />
          <BasePairRung mid={r.mid} quat={r.quat} length={r.len} />
        </group>
      ))}
    </group>
  );
}

// ── Floating ambient particles (subtle depth field) ───────────────────────
function Particles() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions } = useMemo(() => {
    const count = 80;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
    }
    return { positions: pos };
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.elapsedTime * 0.04;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.03) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#9B8EF0"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

// ── Full scene with lighting ──────────────────────────────────────────────
function Scene() {
  return (
    <>
      {/* Soft ambient fill */}
      <ambientLight intensity={0.22} color="#E6E6FA" />

      {/* Primary violet key light */}
      <pointLight position={[5, 8, 5]} intensity={3.2} color="#9B8EF0" />

      {/* Blue fill from opposite side */}
      <pointLight position={[-5, -6, -4]} intensity={2.8} color="#6BA8FF" />

      {/* Front white rim */}
      <pointLight position={[0, 0, 8]} intensity={1.6} color="#FFFFFF" />

      {/* Subtle warm back light */}
      <pointLight position={[0, -8, -2]} intensity={0.8} color="#F3E8FF" />

      <Suspense fallback={null}>
        <RNAHelix />
        <Particles />
      </Suspense>
    </>
  );
}

// ── Exported canvas wrapper ───────────────────────────────────────────────
export default function RNAModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.8], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  );
}

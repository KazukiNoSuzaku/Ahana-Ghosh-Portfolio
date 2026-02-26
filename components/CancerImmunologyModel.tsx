"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ── Tumor cell — central pulsing sphere with surface antigens ──────────────
function TumorCell() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Fibonacci sphere distribution for antigens
  const antigens = useMemo(() => {
    const pts: [number, number, number][] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 0.78;
      pts.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ]);
    }
    return pts;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const pulse = 1 + Math.sin(clock.elapsedTime * 0.9) * 0.025;
    meshRef.current.scale.setScalar(pulse);
  });

  return (
    <group>
      {/* Main tumor cell body */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshStandardMaterial
          color="#F87171"
          emissive="#DC2626"
          emissiveIntensity={0.32}
          roughness={0.5}
          metalness={0.08}
        />
      </mesh>

      {/* MHC / surface antigens */}
      {antigens.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.042, 8, 8]} />
          <meshStandardMaterial
            color="#FCA5A5"
            emissive="#EF4444"
            emissiveIntensity={0.45}
            roughness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

// ── T-cell (CTL) orbit configs — 5 cytotoxic T-lymphocytes ────────────────
const T_CELL_ORBITS = [
  { radius: 1.9,  speed: 0.38, angleOffset: 0,              inclineY: 0.4  },
  { radius: 2.1,  speed: 0.28, angleOffset: Math.PI * 0.65, inclineY: -0.5 },
  { radius: 1.75, speed: 0.46, angleOffset: Math.PI * 1.3,  inclineY: 0.6  },
  { radius: 2.2,  speed: 0.22, angleOffset: Math.PI * 0.4,  inclineY: -0.3 },
  { radius: 1.65, speed: 0.54, angleOffset: Math.PI * 1.8,  inclineY: 0.2  },
];

function TCell({
  radius,
  speed,
  angleOffset,
  inclineY,
}: (typeof T_CELL_ORBITS)[0]) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const angle = clock.elapsedTime * speed + angleOffset;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    const y =
      Math.sin(clock.elapsedTime * speed * 0.7 + angleOffset) *
      (radius * 0.32) +
      inclineY * 0.5;
    groupRef.current.position.set(x, y, z);

    // Slow tumble
    if (bodyRef.current) {
      bodyRef.current.rotation.x = clock.elapsedTime * 0.55;
      bodyRef.current.rotation.z = clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* T-cell body */}
      <mesh ref={bodyRef}>
        <sphereGeometry args={[0.175, 16, 16]} />
        <meshStandardMaterial
          color="#9B8EF0"
          emissive="#7C6EE6"
          emissiveIntensity={0.52}
          roughness={0.22}
          metalness={0.14}
        />
      </mesh>
      {/* T-cell receptor nub */}
      <mesh position={[0.17, 0, 0]}>
        <sphereGeometry args={[0.052, 8, 8]} />
        <meshStandardMaterial
          color="#C4B8FF"
          emissive="#9B8EF0"
          emissiveIntensity={0.65}
          roughness={0.18}
        />
      </mesh>
    </group>
  );
}

// ── NK-cell orbit configs — 3 natural killer cells ───────────────────────
const NK_CELL_ORBITS = [
  { radius: 2.55, speed: 0.17, angleOffset: Math.PI * 0.25 },
  { radius: 2.75, speed: 0.13, angleOffset: Math.PI * 1.1  },
  { radius: 2.4,  speed: 0.21, angleOffset: Math.PI * 1.75 },
];

function NKCell({ radius, speed, angleOffset }: (typeof NK_CELL_ORBITS)[0]) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const angle = clock.elapsedTime * speed + angleOffset;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    const y =
      Math.cos(clock.elapsedTime * speed * 0.6 + angleOffset) *
      (radius * 0.28);
    groupRef.current.position.set(x, y, z);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.125, 14, 14]} />
        <meshStandardMaterial
          color="#6BA8FF"
          emissive="#3B82F6"
          emissiveIntensity={0.45}
          roughness={0.28}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

// ── Cytokine / perforin release particles ─────────────────────────────────
function CytokineCloud() {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 130;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.1 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.elapsedTime * 0.055;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.035) * 0.07;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.032}
        color="#6EE7B7"
        transparent
        opacity={0.58}
        sizeAttenuation
      />
    </points>
  );
}

// ── Full scene ────────────────────────────────────────────────────────────
function Scene() {
  const sceneRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!sceneRef.current) return;
    sceneRef.current.rotation.y = clock.elapsedTime * 0.07;
  });

  return (
    <>
      {/* Soft ambient fill */}
      <ambientLight intensity={0.2} color="#E6E6FA" />

      {/* Primary violet key light (T-cells) */}
      <pointLight position={[6, 8, 6]} intensity={3.4} color="#9B8EF0" />

      {/* Blue fill (NK cells) */}
      <pointLight position={[-6, -5, -4]} intensity={2.6} color="#6BA8FF" />

      {/* Front white rim */}
      <pointLight position={[0, 0, 8]} intensity={1.7} color="#FFFFFF" />

      {/* Warm red backlight (tumor) */}
      <pointLight position={[0, -6, 0]} intensity={1.4} color="#FCA5A5" />

      <Suspense fallback={null}>
        <group ref={sceneRef}>
          <TumorCell />
          {T_CELL_ORBITS.map((orbit, i) => (
            <TCell key={i} {...orbit} />
          ))}
          {NK_CELL_ORBITS.map((orbit, i) => (
            <NKCell key={i} {...orbit} />
          ))}
          <CytokineCloud />
        </group>
      </Suspense>
    </>
  );
}

// ── Exported canvas wrapper ───────────────────────────────────────────────
export default function CancerImmunologyModel() {
  return (
    <Canvas
      camera={{ position: [0, 2, 8.0], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  );
}

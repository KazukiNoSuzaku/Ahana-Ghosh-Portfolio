"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ── Animation cycle (seconds) ─────────────────────────────────────────────
// SCOUT → APPROACH → CONTACT → DAMAGE → DEATH → RESET → loop
const PHASES: Record<string, number> = {
  SCOUT:    4.5,  // T-cells patrol, tumour pulses normally
  APPROACH: 3.0,  // T-cells tighten orbit toward tumour
  CONTACT:  2.0,  // T-cells dock, immunological synapse
  DAMAGE:   3.0,  // Tumour shrinks + darkens, T-cells begin to pull back
  DEATH:    2.5,  // Tumour collapses and fragments scatter
  RESET:    2.0,  // Fragments fade, tumour reforms
};
const CYCLE = Object.values(PHASES).reduce((a, b) => a + b, 0);
const PHASE_KEYS = Object.keys(PHASES);

function getPhase(t: number): { phase: string; progress: number } {
  const ct = t % CYCLE;
  let acc = 0;
  for (const key of PHASE_KEYS) {
    const dur = PHASES[key];
    if (ct < acc + dur) return { phase: key, progress: (ct - acc) / dur };
    acc += dur;
  }
  return { phase: "SCOUT", progress: 0 };
}

// Smooth ease-in-out
function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ── Tumour cell ───────────────────────────────────────────────────────────
function TumourCell() {
  const groupRef = useRef<THREE.Group>(null);
  const matRef   = useRef<THREE.MeshStandardMaterial>(null);

  const antigens = useMemo(() => {
    const pts: [number, number, number][] = [];
    const n = 14;
    for (let i = 0; i < n; i++) {
      const phi   = Math.acos(-1 + (2 * i) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      const r = 0.79;
      pts.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ]);
    }
    return pts;
  }, []);

  const colA = new THREE.Color("#F87171"); // healthy red
  const colB = new THREE.Color("#FB923C"); // damage orange
  const colC = new THREE.Color("#7F1D1D"); // dying dark red
  const tmp  = new THREE.Color();

  useFrame(({ clock }) => {
    if (!groupRef.current || !matRef.current) return;
    const t = clock.elapsedTime;
    const { phase, progress } = getPhase(t);

    let scale = 0.72;
    let emissiveInt = 0.32;

    if (phase === "SCOUT" || phase === "APPROACH") {
      scale = 0.72 * (1 + Math.sin(t * 0.9) * 0.028);
      tmp.copy(colA);
    } else if (phase === "CONTACT") {
      scale = 0.72 * (1 + Math.sin(t * 1.6) * 0.022);
      tmp.lerpColors(colA, colB, easeInOut(progress));
    } else if (phase === "DAMAGE") {
      const ep = easeInOut(progress);
      scale = THREE.MathUtils.lerp(0.72, 0.36, ep) + Math.sin(t * 4) * 0.012;
      tmp.lerpColors(colB, colC, ep);
      emissiveInt = THREE.MathUtils.lerp(0.32, 0.06, ep);
    } else if (phase === "DEATH") {
      const ep = easeInOut(progress);
      scale = THREE.MathUtils.lerp(0.36, 0.0, ep);
      tmp.copy(colC);
      emissiveInt = 0.04;
    } else if (phase === "RESET") {
      // Tumour slowly reforms from nothing
      scale = THREE.MathUtils.lerp(0.0, 0.72, easeInOut(progress));
      tmp.lerpColors(colC, colA, easeInOut(progress));
      emissiveInt = THREE.MathUtils.lerp(0.06, 0.32, progress);
    }

    groupRef.current.scale.setScalar(Math.max(scale, 0));
    matRef.current.color.copy(tmp);
    matRef.current.emissive.copy(tmp).multiplyScalar(0.55);
    matRef.current.emissiveIntensity = emissiveInt;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          ref={matRef}
          color="#F87171"
          emissive="#DC2626"
          emissiveIntensity={0.32}
          roughness={0.5}
          metalness={0.08}
        />
      </mesh>
      {/* Surface antigens (MHC-like) */}
      {antigens.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.055, 8, 8]} />
          <meshStandardMaterial
            color="#FCA5A5"
            emissive="#EF4444"
            emissiveIntensity={0.4}
            roughness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

// ── Apoptosis fragments — scatter when tumour dies ────────────────────────
function ApoptosisFragments() {
  const fragData = useMemo(() => {
    const n = 12;
    return Array.from({ length: n }, (_, i) => {
      const phi   = Math.acos(-1 + (2 * i) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      return {
        dir: new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta),
          Math.cos(phi),
          Math.sin(phi) * Math.sin(theta)
        ).normalize(),
        size:  0.055 + (i % 4) * 0.035,
        speed: 0.75 + (i % 5) * 0.22,
      };
    });
  }, []);

  // One ref per fragment mesh
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const { phase, progress } = getPhase(t);

    fragData.forEach((fd, i) => {
      const el = refs.current[i];
      if (!el) return;

      if (phase === "DEATH") {
        el.visible = true;
        const dist = easeInOut(progress) * fd.speed * 2.2;
        el.position.copy(fd.dir).multiplyScalar(dist);
        // fade out in second half
        const opacity = progress < 0.5 ? 1 : 1 - (progress - 0.5) * 2;
        (el.material as THREE.MeshStandardMaterial).opacity = opacity;
      } else {
        el.visible = false;
      }
    });
  });

  return (
    <>
      {fragData.map((fd, i) => (
        <mesh
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          visible={false}
        >
          <sphereGeometry args={[fd.size, 8, 8]} />
          <meshStandardMaterial
            color="#FB923C"
            emissive="#DC2626"
            emissiveIntensity={0.55}
            roughness={0.4}
            transparent
            opacity={1}
          />
        </mesh>
      ))}
    </>
  );
}

// ── T-cells (CTL) — orbit, converge to attack, then pull back ─────────────
const T_CELL_ORBITS = [
  { orbitR: 2.0,  speed: 0.38, ph: 0              },
  { orbitR: 2.1,  speed: 0.28, ph: Math.PI * 0.65 },
  { orbitR: 1.85, speed: 0.46, ph: Math.PI * 1.3  },
  { orbitR: 2.2,  speed: 0.22, ph: Math.PI * 0.4  },
  { orbitR: 1.75, speed: 0.54, ph: Math.PI * 1.8  },
];

function TCell({ orbitR, speed, ph }: (typeof T_CELL_ORBITS)[0]) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef  = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    const { phase, progress } = getPhase(t);
    const angle = t * speed + ph;

    let r = orbitR;
    if (phase === "APPROACH") {
      r = THREE.MathUtils.lerp(orbitR, 1.12, easeInOut(progress));
    } else if (phase === "CONTACT") {
      r = 1.04;
    } else if (phase === "DAMAGE") {
      r = THREE.MathUtils.lerp(1.04, 1.9, easeInOut(progress));
    } else if (phase === "DEATH" || phase === "RESET") {
      r = THREE.MathUtils.lerp(1.9, orbitR, easeInOut(progress));
    }

    const x = r * Math.cos(angle);
    const z = r * Math.sin(angle);
    const y = Math.sin(t * speed * 0.7 + ph) * (r * 0.3);
    groupRef.current.position.set(x, y, z);

    if (bodyRef.current) {
      bodyRef.current.rotation.x = t * 0.55;
      bodyRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
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
      {/* TCR receptor nub */}
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

// ── NK cells — wider patrol orbit ─────────────────────────────────────────
const NK_CELL_ORBITS = [
  { radius: 2.7, speed: 0.17, ph: Math.PI * 0.25 },
  { radius: 2.9, speed: 0.13, ph: Math.PI * 1.1  },
  { radius: 2.6, speed: 0.20, ph: Math.PI * 1.75 },
];

function NKCell({ radius, speed, ph }: (typeof NK_CELL_ORBITS)[0]) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    const angle = t * speed + ph;
    groupRef.current.position.set(
      radius * Math.cos(angle),
      Math.cos(t * speed * 0.6 + ph) * (radius * 0.25),
      radius * Math.sin(angle)
    );
  });
  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.13, 14, 14]} />
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

// ── Cytokine / perforin particle cloud ───────────────────────────────────
function CytokineCloud() {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 130;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r     = 1.1 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.elapsedTime * 0.05;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.03) * 0.06;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.032} color="#6EE7B7" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

// ── Dynamic kill light — brightens red during DEATH phase ─────────────────
function KillLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    if (!lightRef.current) return;
    const { phase, progress } = getPhase(clock.elapsedTime);
    if (phase === "DEATH") {
      lightRef.current.intensity = THREE.MathUtils.lerp(0, 4.0, Math.sin(progress * Math.PI));
    } else {
      lightRef.current.intensity = 0;
    }
  });
  return <pointLight ref={lightRef} position={[0, 0, 0]} color="#FF4444" intensity={0} />;
}

// ── Full scene ────────────────────────────────────────────────────────────
function Scene() {
  const sceneRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!sceneRef.current) return;
    sceneRef.current.rotation.y = clock.elapsedTime * 0.065;
  });

  return (
    <>
      <ambientLight intensity={0.2} color="#E6E6FA" />
      <pointLight position={[6, 8, 6]}   intensity={3.4} color="#9B8EF0" />
      <pointLight position={[-6, -5, -4]} intensity={2.6} color="#6BA8FF" />
      <pointLight position={[0, 0, 8]}   intensity={1.7} color="#FFFFFF" />
      <pointLight position={[0, -6, 0]}  intensity={1.4} color="#FCA5A5" />
      <KillLight />

      <Suspense fallback={null}>
        <group ref={sceneRef}>
          <TumourCell />
          <ApoptosisFragments />
          {T_CELL_ORBITS.map((o, i) => <TCell key={i} {...o} />)}
          {NK_CELL_ORBITS.map((o, i) => <NKCell key={i} {...o} />)}
          <CytokineCloud />
        </group>
      </Suspense>
    </>
  );
}

// ── Canvas export ─────────────────────────────────────────────────────────
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

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh, Group } from "three";

function Dumbbell() {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6;
      ref.current.rotation.x += delta * 0.15;
    }
  });

  const plateColor = "#1a1a1a";
  const metalColor = "#d4d4d4";

  return (
    <group ref={ref}>
      {/* bar */}
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 3.2, 32]} />
        <meshStandardMaterial color={metalColor} metalness={0.9} roughness={0.2} />
      </mesh>
      {/* plates */}
      {[-1.3, -1.05, 1.05, 1.3].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 0.25, 48]} />
          <meshStandardMaterial color={plateColor} metalness={0.6} roughness={0.35} />
        </mesh>
      ))}
      {/* accent rings */}
      {[-1.3, 1.3].map((y, i) => (
        <mesh key={`ring-${i}`} position={[0, y, 0]}>
          <torusGeometry args={[0.7, 0.04, 16, 64]} />
          <meshStandardMaterial color="#ff6a2c" emissive="#ff6a2c" emissiveIntensity={1.2} />
        </mesh>
      ))}
    </group>
  );
}

export default function Dumbbell3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ff7a3d" />
      <directionalLight position={[-5, -3, 2]} intensity={0.8} color="#ffffff" />
      <pointLight position={[0, 0, 4]} intensity={1} color="#ff4d1f" />
      <Suspense fallback={null}>
        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
          <group rotation={[Math.PI / 2.4, 0, Math.PI / 6]}>
            <Dumbbell />
          </group>
        </Float>
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
}

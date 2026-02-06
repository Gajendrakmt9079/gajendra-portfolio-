"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import useMousePosition from "@/hooks/useMousePosition";

// Floating Code Block Component
function CodeBlock({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Camera Controller
function CameraController() {
  const mouse = useMousePosition();

  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      mouse.x * 2,
      0.05,
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      mouse.y * 2,
      0.05,
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

// Main Scene
export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        className="!fixed !inset-0 pointer-events-none"
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#a855f7"
        />

        {/* Floating Code Blocks */}
        <CodeBlock position={[-3, 2, 0]} />
        <CodeBlock position={[3, -1, -2]} />
        <CodeBlock position={[0, -2, -4]} />
        <CodeBlock position={[-2, 0, -3]} />
        <CodeBlock position={[2, 2, -1]} />

        <CameraController />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function PacmanOrb() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[2.5, -0.5, -2]}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial
          color="#FFD84D"
          emissive="#FFD84D"
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

function GhostOrb() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh position={[-2.8, 1, -2]}>
        <sphereGeometry args={[0.45, 64, 64]} />
        <MeshDistortMaterial
          color="#FF4FA3"
          emissive="#FF4FA3"
          emissiveIntensity={0.25}
          transparent
          opacity={0.45}
          distort={0.4}
          speed={2}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

function SmallOrb({ position, color, size = 0.2 }) {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const groupRef = useRef();
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 120; i++) {
      arr.push([
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ]);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03;
      groupRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.02 + Math.random() * 0.02, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#FFD84D' : '#FF4FA3'}
            emissive={i % 3 === 0 ? '#FFD84D' : '#FF4FA3'}
            emissiveIntensity={0.4}
            transparent
            opacity={0.3 + Math.random() * 0.3}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.8,
      0.05
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.5,
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#08080A']} />
      <fog attach="fog" args={['#08080A', 6, 18]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 3, 3]} color="#FF4FA3" intensity={1.5} />
      <pointLight position={[-4, -2, 4]} color="#FFD84D" intensity={1} />
      <pointLight position={[0, 0, 5]} color="#FF82C8" intensity={0.5} />
      <PacmanOrb />
      <GhostOrb />
      <SmallOrb position={[-3.5, -1.5, -3]} color="#FF82C8" size={0.25} />
      <SmallOrb position={[3.2, 1.8, -4]} color="#FFD84D" size={0.15} />
      <SmallOrb position={[0.5, -2.2, -3]} color="#FF4FA3" size={0.18} />
      <Particles />
      <CameraRig />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          intensity={0.6}
        />
      </EffectComposer>
    </Canvas>
  );
}

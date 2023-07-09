import * as THREE from "three";
import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { vertexShader, fragmentShader } from "./shader";

export const Main = () => {
  let frame = 0;

  const Box = ({ position }: { position: number[] }) => {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);

    useFrame(() => {
      ref.current.rotation.x += 0.1;
      ref.current.rotation.y += 0.1;
      ref.current.position.z -= 0.001;
      if (hovered) {
        ref.current.position.x += position[0] < 0 ? -0.0008 : 0.0008;
        ref.current.position.y += position[1] < 0 ? -0.0008 : 0.0008;
        ref.current.position.z += 0.0035;
      }
    });

    return (
      <mesh
        position={
          new THREE.Vector3(
            ref.current?.position.x ?? position[0],
            ref.current?.position.y ?? position[1],
            ref.current?.position.z ?? position[2]
          )
        }
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <boxGeometry args={[0.01, 0.01, 0.01]} />
        <meshStandardMaterial
          color={
            "rgb(" +
            ~~(30 * Math.random()) +
            ", " +
            ~~(30 * Math.random()) +
            ", " +
            ~~(200 * Math.random()) +
            ")"
          }
        />
      </mesh>
    );
  };

  const Plane = () => {
    const planePositions = useMemo(() => {
      const planeGeometry: any = new THREE.PlaneGeometry(6, 6, 128, 128);
      const positions = planeGeometry.attributes.position.array;

      return positions;
    }, []);

    const shaderArgs = useMemo(
      () => ({
        uniforms: {
          uTime: { value: 0 },
        },
        vertexShader,
        fragmentShader,
      }),
      []
    );

    const vec = new THREE.Vector3();

    useFrame((state) => {
      shaderArgs.uniforms.uTime.value++;
      frame < 3 && (frame += 0.0005);
      state.camera.position.lerp(vec.set(0, 0, frame), 0.1);
      state.camera.updateProjectionMatrix();
    });

    const PlaneGeometry = () => (
      <>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={planePositions}
            itemSize={3}
            count={planePositions.length / 3}
          />
        </bufferGeometry>
        <shaderMaterial
          args={[shaderArgs]}
          depthTest={false}
          depthWrite={false}
        />
      </>
    );

    return (
      <>
        <points rotation={[-Math.PI / 3, 1, 3]}>
          <PlaneGeometry />
        </points>
        <points rotation={[-Math.PI / -3, 1, -3]}>
          <PlaneGeometry />
        </points>
      </>
    );
  };

  // 中心に近いところから10->20->40->50->60個のBoxを生成する
  return (
    <div
      className="canvas"
      id="canvas"
      style={{
        zIndex: "-1",
        width: "100%",
        height: "100vh",
        top: "0",
        position: "fixed",
      }}
    >
      <Canvas>
        <pointLight position={[1, 1, 1]} />
        {[...Array(10)].map((_, i) => (
          <Box
            key={`boxes1-${i}`}
            position={[
              Math.random() * 0.8 - 0.4,
              Math.random() * 0.8 - 0.4,
              Math.random() - 0.5,
            ]}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <Box
            key={`boxes2-${i}`}
            position={[
              Math.random() * 1.6 - 0.8,
              Math.random() * 1.6 - 0.8,
              Math.random() - 0.1,
            ]}
          />
        ))}
        {[...Array(40)].map((_, i) => (
          <Box
            key={`boxes3-${i}`}
            position={[
              Math.random() * 2 - 1,
              Math.random() * 2 - 1,
              Math.random() + 1,
            ]}
          />
        ))}
        {[...Array(50)].map((_, i) => (
          <Box
            key={`boxes4-${i}`}
            position={[
              Math.random() * 4 - 2,
              Math.random() * 4 - 2,
              Math.random() + 2,
            ]}
          />
        ))}
        {[...Array(60)].map((_, i) => (
          <Box
            key={`boxes5-${i}`}
            position={[
              Math.random() * 6 - 3,
              Math.random() * 6 - 3,
              Math.random() + 3,
            ]}
          />
        ))}
        <Plane />
      </Canvas>
      
    </div>
  );
};

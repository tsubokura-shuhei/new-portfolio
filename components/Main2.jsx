import { Image, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import styles from "../components/style/main.module.scss";

export const Main2 = () => {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <div className={styles.work}>
        <Canvas
          id="canvas"
          style={{
            zIndex: "-1",
            width: "100%",
            height: "100vh",
            top: "0",
            backgroundColor: "aliceblue",
            position: "fixed",
          }}
        >
          <ScrollControls pages={3} damping={1}>
            <Scroll>
              <group>
                <Image
                  url="/images/img1.jpeg"
                  scale={[4, 3, 1]}
                  position={[-1, 0, 1]}
                  alt=""
                />
                <Image
                  url="/images/img2.jpeg"
                  scale={[3]}
                  position={[2, 0, 1]}
                  alt=""
                />
                <Image
                  url="/images/img3.jpeg"
                  scale={[1, 3.5, 1]}
                  position={[-2.3, 0, 2]}
                  alt=""
                />
                <Image
                  url="/images/img4.jpeg"
                  scale={[1.4, 2, 1]}
                  position={[-1.3, 0, 3.2]}
                  alt=""
                />
              </group>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
};

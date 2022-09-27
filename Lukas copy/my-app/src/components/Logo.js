import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import {a, useSpring} from "@react-spring/three";
import {useHover} from "@use-gesture/react";


const Logo = ({ children, size = 55, ...props }) => {
  const group = useRef()
  const geometry = useRef();
  const material = useRef();
  const logo = useLoader(THREE.TextureLoader, '../logos2.png');
  const scaleX = 0.1 * size;
  const scaleY = 0.04 * size;
  const scaleZ = 0.05;


  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2
    group.current.position.y = t / 10
    group.current.rotation.x = group.current.rotation.y +=0
  });

    const [spring, setSpring] = useSpring(() => ({
        scale: [scaleX, scaleY, scaleZ],
        config: { mass: 3, friction: 40, tension: 800 }
    }));

    const bindHover = useHover(
        ({ hovering }) =>
            setSpring({ scale: hovering ? [1.2 * scaleX, 1.2 * scaleY, 1.2 * scaleZ] : [scaleX, scaleY, scaleZ] }),
        {
            pointerEvents: true
        }
    );

  return (
    <a.group className="link" {...props} scale={[0.1 * size, 0.04 * size, 0.1]} {...spring} {...bindHover()} onClick={() => window.location.href = 'https://thedevelobear.com'}>
      <group ref={group}>
      <mesh
        position={[0, 0, -20]}
 
      >
        <planeGeometry ref={geometry} attach="geometry" />
        <meshPhongMaterial
          transparent
          ref={material}
          attach="material"
          map={logo}
        />
      </mesh>
      </group>
    </a.group>
  );
};


export { Logo };
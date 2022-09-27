import React, { Suspense } from "react";
import './styles.css';
import { Logo } from "./components/Logo";
import { Logo2 } from "./components/Logo2";
import { Canvas, extend } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";
import { Lights } from "./components/Lights";

import { Scroll, ScrollControls } from "@react-three/drei";

extend({
  EffectComposer,
  RenderPass,
  ShaderPass,
  UnrealBloomPass,
  FilmPass,
  SMAAPass
});

export default function App() {
  return (
    <>
    <Canvas camera={{ position: [0, 0, 4.5] }}>
     <ScrollControls
      pages={3} // Each page takes 100% of the height of the canvas
      distance={1} // A factor that increases scroll bar travel (default: 1)
      damping={8} // Friction, higher is faster (default: 4)
      horizontal={false} // Can also scroll horizontally (default: false)
      infinite={false}
    >
      <group rotation-z={0.0} rotation-y={0.0} rotation-x={0.0}>
    <Scroll>
          <Suspense fallback={null}>
            <Logo />
          </Suspense>
          <Suspense fallback={null}>
            <Logo2 />
          </Suspense>
          <Lights />
    </Scroll>
    </group>
    </ScrollControls>
    </Canvas>
    </>
  );
};


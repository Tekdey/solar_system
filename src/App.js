import Home from "./components/home/index";
import { Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stars
            radius={200}
            depth={60}
            count={5000}
            factor={7}
            saturation={0}
            fade={true}
          />
        </Suspense>
      </Canvas>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

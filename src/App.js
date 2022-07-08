import React, { useState, useEffect } from "react";
import Home from "./components/home/index";
import { Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars } from "@react-three/drei";
import Navbar from "./components/home/Navbar";
import { NavbarContext } from "./context/NavbarContext";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState(null);

  const propObj = { setCurrentPlanet, currentPlanet };

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

      <NavbarContext.Provider value={propObj}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NavbarContext.Provider>
    </>
  );
}

export default App;

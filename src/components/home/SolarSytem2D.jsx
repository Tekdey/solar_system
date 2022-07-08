import React from "react";
import "./styles/SolarSystem2D.scss";

export default function SolarSytem2D() {
  return (
    <>
      <div className="solarSytem2D-container">
        <div className="sun star "></div>
        <div className="mercure-outline"></div>
        <div className="mercure planet "></div>
        <div className="venus-outline"></div>
        <div className="venus planet "></div>
        <div className="earth-outline"></div>
        <div className="earth planet "></div>
        <div className="mars-outline"></div>
        <div className="mars planet "></div>
        <div className="jupiter-outline"></div>
        <div className="jupiter planet "></div>
        <div className="saturne-outline"></div>
        <div className="saturne planet "></div>
        <div className="uranus-outline"></div>
        <div className="uranus planet "></div>
        <div className="neptune-outline"></div>
        <div className="neptune planet"></div>
      </div>
    </>
  );
}

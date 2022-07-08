import React from "react";
import { useContext } from "react";
import { NavbarContext } from "../../context/NavbarContext";
import "./styles/SolarSystem2D.scss";

const SolarSytem2D = () => {

  const {currentPlanet} = useContext(NavbarContext)

  const style = {
    border: "2px solid white"
  }

  return (
    <>
      <div className="solarSytem2D-container">
        <div className="sun star"></div>
        <div className="mercure-outline" style={{border: currentPlanet === 'mercury' ? style.border : null}}></div>
        <div className="mercure planet"></div>
        <div className="venus-outline" style={{border: currentPlanet === 'venus' ? style.border : null}}></div>
        <div className="venus planet"></div>
        <div className="earth-outline" style={{border: currentPlanet === 'earth' ? style.border : null}}></div>
        <div className="earth planet"></div>
        <div className="mars-outline" style={{border: currentPlanet === 'mars' ? style.border : null}}></div>
        <div className="mars planet"></div>
        <div className="jupiter-outline" style={{border: currentPlanet === 'jupiter' ? style.border : null}}></div>
        <div className="jupiter planet"></div>
        <div className="saturne-outline" style={{border: currentPlanet === 'saturn' ? style.border : null}}></div>
        <div className="saturne planet"></div>
        <div className="uranus-outline" style={{border: currentPlanet === 'uranus' ? style.border : null}}></div>
        <div className="uranus planet"></div>
        <div className="neptune-outline" style={{border: currentPlanet === 'neptune' ? style.border : null}}></div>
        <div className="neptune planet"></div>
      </div>
    </>
  );
}

export default SolarSytem2D
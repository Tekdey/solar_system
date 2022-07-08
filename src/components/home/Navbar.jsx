import React from "react";
import { useContext } from "react";
import "./styles/Navbar.scss";
import {NavbarContext} from "../../context/NavbarContext"

const Navbar = () => {

    const {setCurrentPlanet} = useContext(NavbarContext)

    const handleClick = (event) => {
      setCurrentPlanet(event.target.id)
    }

  return (
    <div className="menu-planet">
      <ul>
        <li onClick={handleClick} id="sun">Soleil</li>
        <li onClick={handleClick} id="mercury">Mercure</li>
        <li onClick={handleClick} id="venus">Venus</li>
        <li onClick={handleClick} id="earth">Terre</li>
        <li onClick={handleClick} id="moon">Lune</li>
        <li onClick={handleClick} id="mars">Mars</li>
        <li onClick={handleClick} id="jupiter">Jupiter</li>
        <li onClick={handleClick} id="saturn">Saturne</li>
        <li onClick={handleClick} id="uranus">Uranus</li>
        <li onClick={handleClick} id="neptune">Neptune</li>
      </ul>
    </div>
  );
}

export default Navbar
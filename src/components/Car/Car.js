import React, { useContext } from "react";
import CarImage from "../../assets/img/araba.svg";
import CarDetailContext from "../../store/CarDetailContext";
import "./Car.css";

function Car() {
  const { positionX, positionY, rotate, speed } = useContext(CarDetailContext);
  const CarPosition = {
    orientation: rotate,
    x: positionX,
    y: positionY,
  };

  return (
    <div
      className="car-group"
      style={{ left: CarPosition.x, top: CarPosition.y }}
    >
      <img
        style={{ transform: `rotate(${CarPosition.orientation}deg)` }}
        className="car-image"
        src={CarImage}
        alt="car"
      />
      <span className="car-speed">{speed} km/h</span>
    </div>
  );
}

export default Car;

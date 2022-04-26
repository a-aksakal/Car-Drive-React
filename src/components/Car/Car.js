import React from "react";
import CarImage from "../../assets/img/araba.svg";
import "./Car.css";
function Car(props) {
  const { x, y, orientation } = props.Position;

  return (
    <>
      <div className="car-group" style={{ left: x, top: y }}>
        <img
          style={{ transform: `rotate(${orientation}deg)` }}
          className="car-image"
          src={CarImage}
          alt="car"
        ></img>
        <span className="car-speed">{props.Speed} km/h</span>
      </div>
    </>
  );
}

export default Car;

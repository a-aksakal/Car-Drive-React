import React, { useContext } from "react";
import CarDetailContext from "../../store/CarDetailContext";
import "./Console.css";
function Console() {
  const { carPositionAndSpeed } = useContext(CarDetailContext);
  return (
    <>
      {carPositionAndSpeed &&
        carPositionAndSpeed.map((item, index) => (
          <div key={index} className="console-item">
            <span>x: {item.carPosition.x}</span>
            <span>y: {item.carPosition.y}</span>
            <span>orientation: {item.carPosition.orientation}</span>
            <span>speed: {item.speed}</span>
          </div>
        ))}
    </>
  );
}

export default Console;

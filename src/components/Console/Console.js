import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CarDetailContext from "../../store/CarDetailContext";
import "./Console.css";

function Console() {
  const {
    setPositionX,
    setPositionY,
    setRotate,
    setSpeed,
    carPositionAndSpeed,
    setCarPositionAndSpeed,
    setSpeedLevel,
  } = useContext(CarDetailContext);

  useEffect(() => {
    const carDetailHandler = ({ detail }) => {
      setPositionX(detail.carPosition.x);
      setPositionY(detail.carPosition.y);
      setRotate(detail.carPosition.orientation);
      setSpeed(detail.speed);
      setCarPositionAndSpeed([...carPositionAndSpeed, detail]);
    };
    document.addEventListener("carPositionAndSpeedChanged", carDetailHandler);
    const speedHandler = ({ detail }) => {
      setSpeedLevel(detail.speedLevel);
    };
    document.addEventListener("speedLevelChanged", speedHandler);
    const divScroll = document.querySelector("#console-group");
    divScroll.scrollTop = divScroll.scrollHeight - divScroll.clientHeight;
  });

  return (
    <div id="console-group" className="console-group">
      {carPositionAndSpeed &&
        carPositionAndSpeed.map((item) => (
          <div key={uuidv4()} className="console-item">
            <span>x: {item.carPosition.x}</span>
            <span>y: {item.carPosition.y}</span>
            <span>orientation: {item.carPosition.orientation}</span>
            <span>speed: {item.speed}</span>
          </div>
        ))}
    </div>
  );
}

export default Console;

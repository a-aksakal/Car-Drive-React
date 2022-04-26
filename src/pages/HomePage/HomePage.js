import React, { useContext, useEffect } from "react";
import "./HomePage.css";
import Map from "../../assets/img/yollar.png";
import Car from "../../components/Car/Car";
import backend from "../../backend/index";
import CarDetailContext from "../../store/CarDetailContext";
import Console from "../../components/Console/Console";
function HomePage() {
  const {
    positionX,
    positionY,
    rotate,
    speed,
    setPositionX,
    setPositionY,
    setRotate,
    setSpeed,
    speedLevel,
    setSpeedLevel,
    carPositionAndSpeed,
    setCarPositionAndSpeed,
  } = useContext(CarDetailContext);
  const CarPosition = {
    x: positionX,
    y: positionY,
    orientation: rotate,
  };
  useEffect(() => {
    backend.getInitialCarPositionAndSpeed();
  }, []);

  useEffect(() => {
    const carDetailHandler = ({ detail }) => {
      setPositionX(detail.carPosition.x);
      setPositionY(detail.carPosition.y);
      setRotate(detail.carPosition.orientation);
      setSpeed(detail.speed);
      setCarPositionAndSpeed([...carPositionAndSpeed, detail]);
    };

    const speedHandler = ({ detail }) => {
      setSpeedLevel(detail.speedLevel);
    };

    let divScroll = document.querySelector("#console-group");
    divScroll.scrollTop = divScroll.scrollHeight - divScroll.clientHeight;

    document.addEventListener("carPositionAndSpeedChanged", carDetailHandler);
    document.addEventListener("speedLevelChanged", speedHandler);
  });

  return (
    <div className="container">
      <div className="map-group">
        <button
          className="map-item-button"
          onClick={() => backend.changeSpeed()}
        >
          Şu Anki Hız: {speedLevel}
        </button>
        <img className="map-image" src={Map} alt="car" />
        <Car Position={CarPosition} Speed={speed} />
      </div>
      <div id="console-group" className="console-group">
        <Console />
      </div>
    </div>
  );
}

export default HomePage;

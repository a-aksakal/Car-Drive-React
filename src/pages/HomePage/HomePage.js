import React, { useEffect } from "react";
import "./HomePage.css";
import Map from "../../assets/img/yollar.png";
import Car from "../../components/Car/Car";
import backend from "../../backend/index.ts";
import Console from "../../components/Console/Console";
import Button from "../../components/Button/Button";

function HomePage() {
  useEffect(() => {
    backend.getInitialCarPositionAndSpeed();
  }, []);

  return (
    <div className="container">
      <div className="map-group">
        <Button speedChange={backend} />
        <img className="map-image" src={Map} alt="car" />
        <Car />
      </div>
      <Console />
    </div>
  );
}

export default HomePage;

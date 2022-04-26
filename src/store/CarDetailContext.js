import { createContext, useState } from "react";

const CarDetailContext = createContext(null);

export const CarDetailProvider = ({ children }) => {
  const [positionX, setPositionX] = useState(319);
  const [positionY, setPositionY] = useState(560);
  const [rotate, setRotate] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [speedLevel, setSpeedLevel] = useState(1);
  const [carPositionAndSpeed, setCarPositionAndSpeed] = useState([]);
  const values = {
    positionX,
    positionY,
    rotate,
    setPositionX,
    setPositionY,
    setRotate,
    speed,
    setSpeed,
    speedLevel,
    setSpeedLevel,
    carPositionAndSpeed,
    setCarPositionAndSpeed,
  };

  return (
    <CarDetailContext.Provider value={values}>
      {children}
    </CarDetailContext.Provider>
  );
};

export default CarDetailContext;

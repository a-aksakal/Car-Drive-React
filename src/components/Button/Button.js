import React, { useContext } from "react";
import CarDetailContext from "../../store/CarDetailContext";
import "./Button.css";

function Button(props) {
  const { speedChange } = props;
  const { speedLevel } = useContext(CarDetailContext);
  return (
    <button
      type="button"
      className="map-item-button"
      onClick={() => speedChange.changeSpeed()}
    >
      Şu Anki Hız: {speedLevel}
    </button>
  );
}

export default Button;

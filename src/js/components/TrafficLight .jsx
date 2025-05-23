import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [extraColor, setExtraColor] = useState(false);

  const handleLightClick = (selectedColor) => {
    setColor(selectedColor);
  };

  const toggleColor = () => {
    if (color === "red") {
      setColor("yellow"); // Rojo → Amarillo
    } else if (color === "yellow") {
      setColor("green"); // Amarillo → Verde
    } else if (color === "green") {
      if (extraColor) {
        setColor("purple"); // Verde → Púrpura (si está agregada)
      } else {
        setColor("red"); // Verde → Rojo (si no hay púrpura)
      }
    } else if (color === "purple") {
      setColor("red"); // Púrpura → Rojo
    }
  };

  const addPurpleLight = () => {
    setExtraColor(true);
    setColor("red"); // Reinicia el semáforo a rojo al agregar la luz púrpura
  };

  const removePurpleLight = () => {
    setExtraColor(false);
    setColor("red"); // Reinicia el semáforo a rojo al quitar la luz púrpura
  };
  console.log({ color });
  return (
    <div className="container">
      {/* Tubo negro en la parte superior */}
      <div className="traffic-light-tube"></div>
      {/* Semáforo */}
      <div className="traffic-light">
        <div
          className={`light red ${color === "red" ? "active" : ""}`}
          onClick={() => handleLightClick("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "active" : ""}`}
          onClick={() => handleLightClick("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "active" : ""}`}
          onClick={() => handleLightClick("green")}
        ></div>
        {extraColor && (
          <div
            className={`light purple ${color === "purple" ? "active" : ""}`}
            onClick={() => handleLightClick("purple")}
          ></div>
        )}
      </div>
      {/* Botones */}
      <div className="buttons">
        <button onClick={toggleColor}>Toggle Color</button>
        {!extraColor ? (
          <button onClick={addPurpleLight}>Add Purple Light</button>
        ) : (
          <button onClick={removePurpleLight}>Remove Purple Light</button>
        )}
      </div>

      <div className="rojo">rojo</div>
      <div className="amarillo">amarillo</div>
      <div className="verde">verde</div>
    </div>
  );
};

export default TrafficLight;

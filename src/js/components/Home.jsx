import React, { useState } from "react";
import TrafficLight from "./TrafficLight ";
import AxiosExample from "./AxiosExample";

const Home = () => {
  const [info1, setInfo1] = useState(false);

  return (
    <div className="text-center">
      <button
        onClick={() => {
          if (info1 === false) {
            setInfo1(true);
          } else setInfo1(false);
        }}
      >
        Act
      </button>
      {info1 ? (
        ""
      ) : (
        <p>Información activa a traves de todos los datos crorrespondientes</p>
      )}

      <TrafficLight />
      <AxiosExample />
    </div>
  );
};

export default Home;

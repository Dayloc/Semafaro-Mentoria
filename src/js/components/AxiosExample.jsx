import React from "react";
import axios from "axios";

function AxiosExample() {
  const fetchPersonajes = async () => {
    try {
      const response = await axios.get(
        "https://dragonball-api.com/api/characters"
      );
      console.log(response);
      return response.data.characters;
    } catch (error) {
      console.log("error");
    }
  };

  fetchPersonajes();

  return <div>AxiosExample</div>;
}

export default AxiosExample;

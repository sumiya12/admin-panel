import React, { createContext, useState, useContext, useEffect } from "react";
import { otherServices } from "../services/otherServices";

export const FoodContext = createContext({});

export function useFood() {
  return useContext(FoodContext);
}

export const FoodProvider = (props) => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    otherServices
      .getAllFood()
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // console.log(data.data);
          setFoods(data.data);
        }
      })
      .finally(() => {});
  }, []);
  return (
    <FoodContext.Provider value={[foods, setFoods]}>
      {props.children}
    </FoodContext.Provider>
  );
};

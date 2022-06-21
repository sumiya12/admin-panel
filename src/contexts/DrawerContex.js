import React, { createContext, useContext, useEffect, useState } from "react";

const BasketFoodContext = createContext({});

export const useBasket = () => {
  return useContext(BasketFoodContext);
};
export const BasketFoodProvider = ({ children }) => {
  const [basketFood, setBasketFood] = useState([]);
  // debugger;
  // console.log("asd");
  useEffect(() => {
    setBasketFood(JSON.parse(localStorage.getItem("basketFood") || "[]"));
  }, []);

  useEffect(() => {
    if (basketFood.length > 0) {
      localStorage.setItem("basketFood", JSON.stringify(basketFood));
    } else {
      localStorage.removeItem("basketFood");
    }
  }, [basketFood]);

  return (
    <BasketFoodContext.Provider value={{ basketFood, setBasketFood }}>
      {children}
    </BasketFoodContext.Provider>
  );
};

export default BasketFoodProvider;

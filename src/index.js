import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { OrderProvider } from "./contexts/OrderContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { FoodProvider } from "./contexts/FoodContext";
ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
    <UserProvider>
      <OrderProvider>
        <LoadingProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LoadingProvider>
      </OrderProvider>
    </UserProvider>
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

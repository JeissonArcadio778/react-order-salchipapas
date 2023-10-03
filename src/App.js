import React from "react";
import OrderForm from "./components/OrderForm";
import OrderStatus from "./components/OrderStatus";

const App = () => {
  return (
    <div>
      <h1>Salchipapas Order App</h1>
      <OrderForm />
      <OrderStatus />
    </div>
  );
};

export default App;

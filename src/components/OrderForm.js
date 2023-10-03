import React, { useState } from "react";
import axios from "axios";

const OrderForm = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    pizzas: 0
  });
  const [orderResult, setOrderResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const placeOrder = async () => {
    try {
      const apiUrl = "https://your-api-gateway-url/order";
      const result = await axios.post(apiUrl, orderDetails);
      setOrderResult(result.data);
    } catch (error) {
      console.error("Error placing order:", error);
      setOrderResult({ message: "Error placing order. Please try again." });
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      <label>Name: </label>
      <input name="name" onChange={handleInputChange} value={orderDetails.name} />
      <label>Address: </label>
      <input name="address" onChange={handleInputChange} value={orderDetails.address} />
      <label>Pizzas: </label>
      <input type="number" name="pizzas" onChange={handleInputChange} value={orderDetails.pizzas} />
      <button onClick={placeOrder}>Submit Order</button>
      {orderResult && <p>{orderResult.message}</p>}
    </div>
  );
};

export default OrderForm;

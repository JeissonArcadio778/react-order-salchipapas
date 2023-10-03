import React, { useState } from "react";
import axios from "axios";

const OrderStatus = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const checkOrderStatus = async () => {
    try {
      // Replace with your API Gateway URL
      const apiUrl = `https://localhost:8000/api/salchipapas/order/${orderId}`;
      const result = await axios.get(apiUrl);
      setOrderStatus(result.data);
    } catch (error) {
      console.error("Error fetching order status:", error);
      setOrderStatus({ message: "Error fetching order status. Please try again." });
    }
  };

  return (
    <div>
      <h2>Check Order Status</h2>
      <label>Order ID: </label>
      <input name="orderId" onChange={(e) => setOrderId(e.target.value)} value={orderId} />
      <button onClick={checkOrderStatus}>Check Status</button>
      {orderStatus && <p>Status: {orderStatus.delivery_status}</p>}
    </div>
  );
};

export default OrderStatus;

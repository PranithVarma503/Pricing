import React from "react";

const OrderSuccessPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1 style={{ color: 'green', fontSize: '3rem' }}>Order Placed Successfully!</h1>
      <p style={{ fontSize: '1.5rem' }}>Thank you for your purchase. Your order has been placed successfully.</p>
      <a href="/" style={{ color: 'blue', fontSize: '1.5rem', textDecoration: 'underline' }}>
        Back to Home
      </a>
    </div>
  );
};

export default OrderSuccessPage;

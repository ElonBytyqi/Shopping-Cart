import React from "react";
import  CartCard  from "../components/CartCard";
import useTtitle from "../hooks/useTtitle";

const Cart = () => {
  useTtitle("Cart");

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/images/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "images/1002.png"},
  ]
  return (
    <main>
      <section className="cart">
        <h1>Car Items: {products.length}</h1>
        {products.map((product) => (

        <CartCard key={product.id} product={product} />
        ))}

      </section>
    </main>
  );
};

export default Cart;

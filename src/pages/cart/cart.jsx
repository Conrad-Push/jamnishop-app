import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import CartItem from "../../components/cartItem";
import { useBadge } from "../../providers/badgeContext";
import "./cart.css";

export const Cart = () => {
  const { cartItems, setCartItems } = useBadge();

  const handleIncrement = (id) => {
    const newItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(newItems);
  };

  const handleDecrement = (id) => {
    const newItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    );
    setCartItems(newItems);
  };

  const handleDelete = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
  };

  return (
    <div className="cartPage">
      <div className="cartHeader">
        <h1>Zawartość koszyka</h1>
      </div>
      <div className="itemsList">
        {cartItems.length > 0 ? (
          <List sx={{ backgroundColor: "white" }}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
              />
            ))}
          </List>
        ) : (
          <h2 className="emptyListAlert">Twój koszyk jest pusty!</h2> // Display this message when cart is empty
        )}
      </div>
    </div>
  );
};

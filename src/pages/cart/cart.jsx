import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import CartItem from "../../components/cartItem";
import { useBadge } from "../../providers/badgeContext";
import "./cart.css";

export const Cart = () => {
  const { cartItems, setCartItems } = useBadge();
  const navigate = useNavigate();

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

  const handlePurchase = () => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Show the alert/snackbar
    alert(`You have bought ${totalItems} items!`);

    // Clear the cart items
    setCartItems([]);

    // Redirect to the shop page
    navigate("/");
  };

  const handleClearCart = () => {
    setCartItems([]);
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
      {cartItems.length > 0 && (
        <div className="cartButtons">
          <button
            className="cartButton clearCartButton"
            onClick={handleClearCart}
          >
            Wyczyść koszyk
          </button>
          <button className="cartButton buyButton" onClick={handlePurchase}>
            Kup
          </button>
        </div>
      )}
    </div>
  );
};

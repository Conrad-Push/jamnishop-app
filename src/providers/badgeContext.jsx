import React, { createContext, useState, useEffect, useContext } from "react";

const BadgeContext = createContext();

export const useBadge = () => useContext(BadgeContext);

export const BadgeProvider = ({ children }) => {
  const [badgeCount, setBadgeCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === newItem.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
    updateBadgeCount();
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    updateBadgeCount();
  };

  const updateBadgeCount = () => {
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setBadgeCount(totalQuantity);
  };

  useEffect(() => {
    updateBadgeCount();
  }, [cartItems]);

  return (
    <BadgeContext.Provider
      value={{ badgeCount, cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </BadgeContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";

// Créer le contexte
const CartContext = createContext();

// Créer un hook personnalisé pour utiliser le contexte
export const useCart = () => {
  return useContext(CartContext);
};

// Créer le fournisseur de contexte
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.total, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, calculateTotal, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  //cart state
  const [cartItems, setCartItems] = useState([]);

  //add to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // remove from cart

  const removeFromCart = (productId) => {
    setCartItems(cartItems?.filter((item) => item.id !== productId));
  };

  //   total price
  const totalItemPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.new_price, 0);
  };

  const value = { cartItems, addToCart, removeFromCart, totalItemPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

import { createContext, useContext, useState } from "react";

// =========================
// CONTEXT CREATE
// =========================
const OrderContext = createContext();

// =========================
// PROVIDER
// =========================
export function OrderProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [order, setOrder] = useState(null);

  // =========================
  // ADD TO CART
  // =========================
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // =========================
  // REMOVE FROM CART
  // =========================
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // =========================
  // CLEAR CART
  // =========================
  const clearCart = () => {
    setCart([]);
  };

  // =========================
  // SET CURRENT ORDER
  // =========================
  const setCurrentOrder = (data) => {
    setOrder(data);
  };

  return (
    <OrderContext.Provider
      value={{
        cart,
        order,
        addToCart,
        removeFromCart,
        clearCart,
        setCurrentOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// =========================
// CUSTOM HOOK
// =========================
export const useOrder = () => useContext(OrderContext);
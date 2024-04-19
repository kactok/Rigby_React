import { createContext, useState } from "react";

export const CartProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export default function CartProgressContextProvider({ children }) {
  const [progress, setProgress] = useState("");

  function showCart() {
    setProgress("cart");
  }
  function hideCart() {
    setProgress("");
  }
  function showCheckout() {
    setProgress("checkout");
  }
  function hideCheckout() {
    setProgress("");
  }

  return (
    <CartProgressContext.Provider
      value={{ progress, showCart, hideCart, showCheckout, hideCheckout }}
    >
      {children}
    </CartProgressContext.Provider>
  );
}

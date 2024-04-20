import { createContext, useReducer } from "react";

export const CartContext = createContext({
  products: { items: [] },
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  handleClearCart: () => {},
});

function cartReducer(state, action) {
  let updatedItems = [...state.items];
  if (action.type === "ADD") {
    const indexOfItem = state.items.findIndex(
      (item) => item.id === action.payload.item.id
    );
    if (indexOfItem > -1) {
      const updatedItem = {
        ...state.items[indexOfItem],
        quantity: state.items[indexOfItem].quantity + 1,
      };
      updatedItems[indexOfItem] = updatedItem;
    } else {
      updatedItems.push({ ...action.payload.item, quantity: 1 });
    }
  }
  if (action.type === "REMOVE") {
    const indexOfItem = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    if (indexOfItem > -1) {
      const updatedItem = {
        ...state.items[indexOfItem],
        quantity:
          state.items[indexOfItem].quantity === 0
            ? 0
            : state.items[indexOfItem].quantity - 1,
      };
      if (updatedItem.quantity === 0) {
        updatedItems = updatedItems.filter((_, id) => id !== indexOfItem);
      } else {
        updatedItems[indexOfItem] = updatedItem;
      }
    }
  }
  if (action.type === "CLEAR") return { items: [] };
  return { ...state, items: updatedItems };
}

export default function CartContextProvider({ children }) {
  const [cartState, setCartState] = useReducer(cartReducer, { items: [] });

  function handleAddToCart(item) {
    setCartState({
      type: "ADD",
      payload: {
        item,
      },
    });
  }
  function handleRemoveFromCart(id) {
    setCartState({
      type: "REMOVE",
      payload: {
        id,
      },
    });
  }
  function handleClearCart() {
    setCartState({
      type: "CLEAR",
    });
  }

  return (
    <CartContext.Provider
      value={{
        products: cartState,
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
        handleClearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

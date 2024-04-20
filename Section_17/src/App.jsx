import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/cart-context";
import CartProgressContextProvider from "./store/progress-context";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartContextProvider>
      <CartProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartProgressContextProvider>
    </CartContextProvider>
  );
}

export default App;

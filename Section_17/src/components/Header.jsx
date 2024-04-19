import logo from "../assets/logo.jpg";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { CartProgressContext } from "../store/progress-context";

export default function Header() {
  const { products } = useContext(CartContext);
  const { showCart } = useContext(CartProgressContext);
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="App logo" />
        <h1>React food</h1>
      </div>
      <nav>
        <Button className="text-button" onClick={showCart}>
          Cart ({products.items.reduce((acc, item) => item.quantity + acc, 0)})
        </Button>
      </nav>
    </div>
  );
}

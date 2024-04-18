import logo from "../assets/logo.jpg";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Header() {
  const { products } = useContext(CartContext);
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="App logo" />
        <h1>React food</h1>
      </div>
      <nav>
        <Button className="text-button">
          Cart ({products.items.reduce((acc, item) => item.quantity + acc, 0)})
        </Button>
      </nav>
    </div>
  );
}

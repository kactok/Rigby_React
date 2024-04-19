import Modal from "./Modal";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { CartProgressContext } from "../store/progress-context";
import Button from "./Button";

export default function Cart() {
  const { products } = useContext(CartContext);
  const { progress, hideCart } = useContext(CartProgressContext);
  const totalPrice = products.items.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );

  const formattedPrice = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(totalPrice);

  return (
    <Modal className="modal cart" open={progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {products.items.map((item) => {
          return (
            <li key={item.name + item.id}>
              {item.name} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <p className="cart-total">{formattedPrice}</p>
      <p className="modal-actions">
        <Button className="text-button" onClick={hideCart}>
          Close
        </Button>
        <Button className="button">Go to Checkout</Button>
      </p>
    </Modal>
  );
}

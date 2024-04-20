import Modal from "./Modal";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { CartProgressContext } from "../store/progress-context";
import Button from "./Button";
import CartItem from "./CartItem";

export default function Cart() {
  const { products, addToCart, removeFromCart } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(CartProgressContext);
  const totalPrice = products.items.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );

  const formattedPrice = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(totalPrice);

  return (
    <Modal
      className="modal cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? hideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {products.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onDelete={() => removeFromCart(item.id)}
              onAdd={() => addToCart(item)}
            />
          );
        })}
      </ul>
      {products.items.length > 0 ? (
        <p className="cart-total">{formattedPrice}</p>
      ) : (
        <p className="cart-total">No items in the cart</p>
      )}

      <p className="modal-actions">
        <Button className="text-button" onClick={hideCart}>
          Close
        </Button>
        {products.items.length > 0 && (
          <Button className="button" onClick={showCheckout}>
            Go to Checkout
          </Button>
        )}
      </p>
    </Modal>
  );
}

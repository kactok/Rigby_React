import Modal from "./Modal";
import { createPortal } from "react-dom";
import { CartProgressContext } from "../store/progress-context";
import { CartContext } from "../store/cart-context";
import { useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import { postData } from "../httpRequests";
import useFetch from "../hooks/useFetch";

export default function Checkout() {
  const { progress, hideCheckout } = useContext(CartProgressContext);
  const { products, handleClearCart } = useContext(CartContext);
  const {
    fetchedData,
    isError,
    isFetching,
    fetchData,
    setFetchedData,
    setIsError,
  } = useFetch(postData, {
    message: "",
  });

  const totalPrice = products.items.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );

  const formattedPrice = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(totalPrice);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    fetchData(products.items, data);
    event.target.reset();
  }

  if (!isError && fetchedData.message === "Order created!") handleClearCart();
  return createPortal(
    <Modal
      className="modal"
      open={progress === "checkout"}
      onClose={hideCheckout}
    >
      {!isError && fetchedData.message === "Order created!" ? (
        <>
          <p className="meals-text success">{fetchedData.message}</p>
          <p className="modal-actions">
            <Button
              type="button"
              className="text-button"
              onClick={() => {
                hideCheckout();
                setFetchedData({
                  message: "",
                });
                setIsError(false);
              }}
            >
              Close
            </Button>
          </p>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          {isError && (
            <p className="meals-text error">
              Error while sending data. Please try again!
            </p>
          )}

          <p>Total Amount: {formattedPrice}</p>
          <Input type="text" id="name">
            Full Name
          </Input>
          <Input type="email" id="email">
            E-Mail Address
          </Input>
          <Input type="text" id="street">
            Street
          </Input>
          <div className="control-row">
            <Input type="text" id="postal-code">
              Postal Code
            </Input>
            <Input type="text" id="city">
              City
            </Input>
          </div>

          <p className="modal-actions">
            {isFetching ? (
              <>
                <p>Sending data. Please wait!</p>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  className="text-button"
                  onClick={() => {
                    hideCheckout();
                    setFetchedData({
                      message: "",
                    });
                    setIsError(false);
                  }}
                >
                  Close
                </Button>
                <Button className="button">Submit Order</Button>
              </>
            )}
          </p>
        </form>
      )}
    </Modal>,
    document.getElementById("modal")
  );
}

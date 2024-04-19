import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function Meal({ data }) {
  const { addToCart } = useContext(CartContext);
  const formattedPrice = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(data.price);
  return (
    <li className="meal-item">
      <article>
        <img src={"backend/public/" + data.image} alt={data.name + " image"} />
        <h3>{data.name}</h3>
        <div className="meal-item-description">
          <p className="meal-item-price">{formattedPrice}</p>
          <p>{data.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button className="button" onClick={() => addToCart({ ...data })}>
            Add to Cart
          </Button>
        </div>
      </article>
    </li>
  );
}

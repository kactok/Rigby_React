export default function CartItem({ name, quantity, price, onAdd, onDelete }) {
  const formattedPrice = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {formattedPrice}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDelete}>-</button>
        <span>{quantity}</span>
        <button onClick={onAdd}>+</button>
      </p>
    </li>
  );
}

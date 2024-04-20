export default function Input({ type, name, id, children, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id}>{children}</label>
      <input name={id} id={id} {...props} required />
    </p>
  );
}

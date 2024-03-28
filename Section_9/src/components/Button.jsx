export default function Button({ text, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs md:text-base text-stone-100 rounded-md bg-stone-600 hover:bg-stone-400 hover:text-stone-200"
    >
      {text}
    </button>
  );
}

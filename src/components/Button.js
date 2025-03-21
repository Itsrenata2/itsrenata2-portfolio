export function Button({ children, className }) {
  return (
    <button
      className={`bg-third px-6 py-2 rounded-xl text-main font-bold font-museomoderno hover:text-secondary ${className}`}
    >
      {children}
    </button>
  );
}

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-third px-6 py-2 rounded-xl text-main font-bold font-museomoderno hover:text-secondary ${className}`}
    >
      {children}
    </button>
  );
}

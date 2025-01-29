export function Button({ children }) {
  return (
    <button className="bg-third px-6 py-2 rounded-xl text-main font-bold font-museomoderno hover:text-secondary hover:bg-third">
      {children}
    </button>
  );
}

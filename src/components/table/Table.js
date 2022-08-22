export default function Table({ children }) {
  return (
    <table
      className="
    min-w-full 
    border border-spacing-[2px] border-separate
    "
    >
      {children}
    </table>
  );
}

export default function FieldWrapper({ children, horizontal }) {
  return (
    <div
      className={
        "space-y-1 " +
        (horizontal && "flex items-center justify-between space-x-3")
      }
    >
      {children}
    </div>
  );
}

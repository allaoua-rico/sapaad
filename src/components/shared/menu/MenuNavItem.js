export default function MenuNavItem(props) {
  const { children, className, ...otherProps } = props;

  return (
    <button
      className={"hover:bg-blue-500 hover:text-white text-sm  " + className}
      {...otherProps}
    >
      {children}
    </button>
  );
}

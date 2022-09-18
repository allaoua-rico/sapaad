export default function TH(props) {
  const { children, style } = props;
  return (
    <th
      className="
    text-sm font-semibold text-gray-800 first:text-left 
    px-2 py-1 w-full
     "
      style={style}
    >
      {children}
    </th>
  );
}

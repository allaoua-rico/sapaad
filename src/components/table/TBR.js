export default function TBR({ children, className }) {
  return (
    <tr
      className={`text-gray-900 
        [&>td]:px-2 [&>td]:py-1 
        [&>td:not(:first-child)]:text-right whitespace-nowrap
         ${className}
    `}
    >
      {children}
    </tr>
  );
}

export default function GridLinkText({ children }) {
  return (
    <div
      className="pb-3 text-center
        text-gray-600 group-hover:text-white font-medium
          transition-all duration-200
          "
    >
      {children}
    </div>
  );
}

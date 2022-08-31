export default function CategoryButton({ children, color, onClick }) {
  const colors = {
    orange: "from-[#ffecd3] to-[#ffdeb0] border-[#f0d2a7]",
    pink: "from-[#faeef3] to-[#facee0] border-[#facedf]",
    red: "from-[#ffe6e6] to-[#ffb3af] border-[#fababe]",
  };

  return (
    <button
      className={`text-gray-500 text-xs font-medium
          h-28 w-60 border rounded
          bg-gradient-to-b ${colors[color]} 
          my-1 mx-1
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

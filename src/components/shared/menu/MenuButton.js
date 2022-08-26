import MenuNavItem from "./MenuNavItem";

export default function MenuButton({ onClose, onClick, content, width }) {
  return (
    <MenuNavItem onClick={onClose}>
      <button style={{ textDecoration: "none" }} onClick={onClick}>
        <div className={"px-5 py-1 text-left " + (width ? width : "")}>
          {content}
        </div>
      </button>
    </MenuNavItem>
  );
}

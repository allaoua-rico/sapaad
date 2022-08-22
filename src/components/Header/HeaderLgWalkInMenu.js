import { Menu } from "@mui/material";
import MenuLink from "../shared/menu/MenuLink";

export default function HeaderLgWalkInMenu({ anchorEl, open, onClose }) {
  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiMenu-list": {
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <MenuLink
        onClose={onClose}
        to="/walkin/orders"
        content="Walk-In Orders"
        width="w-36"
      />
    </Menu>
  );
}

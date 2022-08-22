import { Menu } from "@mui/material";
import MenuButton from "../shared/menu/MenuButton";
import MenuLink from "../shared/menu/MenuLink";
import { BiSupport } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

export default function HeaderLgUserMenu({ anchorEl, open, onClose }) {
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
      <div className="flex flex-col divide-y">
        <div className="flex flex-col">
          <MenuLink
            onClose={onClose}
            to="/dashboard"
            content="Dashboard"
            width="w-48"
          />
          <MenuLink
            onClose={onClose}
            to="/weborders"
            content="Online"
            width="w-48"
          />
          <MenuLink
            onClose={onClose}
            to="/sso/dmms"
            content="Delivery Manager"
            width="w-48"
          />
          <MenuLink
            onClose={onClose}
            to="/inventory"
            content="Inventory"
            width="w-48"
          />
        </div>
        <div className="flex flex-col">
          <MenuLink
            onClose={onClose}
            to="/setup"
            content="Setup"
            width="w-48"
          />
          <MenuLink
            onClose={onClose}
            to="/profile"
            content="Profile"
            width="w-48"
          />
        </div>
        <MenuLink
          onClose={onClose}
          to="/support"
          content={
            <div className="flex items-center space-x-1">
              <BiSupport />
              <span> Remote Support</span>
            </div>
          }
          width="w-48"
        />
        <MenuButton
          onClose={onClose}
          onClick={() => console.log("logout")}
          content={
            <div className="flex items-center space-x-1">
              <BiLogOut  />
              <span>Log out </span>
            </div>
          }
          width="w-48"
        />
      </div>
    </Menu>
  );
}

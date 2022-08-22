import { HeaderLgHeight } from "../ThemeVars";
import HeaderLgNavLink from "./Header/HeaderLgNavLink";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import HeaderLgWalkInMenu from "./Header/HeaderLgWalkInMenu";
import HeaderLgUserMenu from "./Header/HeaderLgUserMenu";

export default function HeaderLg({ className }) {
  const [WalkInMenuAnchorEl, setWalkInMenuAnchorEl] = useState(null);
  const openWalkInMenu = Boolean(WalkInMenuAnchorEl);
  const [userMenuAnchorEl, seUserMenuAnchorEl] = useState(null);
  const openUserMenu = Boolean(userMenuAnchorEl);

  const handleClickWalkInMenu = (event) =>
    setWalkInMenuAnchorEl(event.currentTarget);

  const handleClickUserMenu = (event) =>
    seUserMenuAnchorEl(event.currentTarget);

  return (
    <header
      className={
        `flex justify-between w-full 
        sticky top-0 z-50 
      bg-[#242424] text-[#e8e8e8]
        px-5  
        ` + className
      }
      style={{
        height: HeaderLgHeight,
      }}
    >
      <div className="flex">
        <HeaderLgNavLink to="/" text="Rickiees" />
        <div className="md:flex hidden">
          <HeaderLgNavLink to="/dashboard" text="Dashboard" />
          <HeaderLgNavLink to="/walkin" text="Walk-In" />
          <WalkInMenuButton
            clicked={openWalkInMenu}
            handleClickWalkInMenu={handleClickWalkInMenu}
          />
          <HeaderLgNavLink to="/dinein" text="Dine-In" />
        </div>
      </div>
      <button className="px-4 h-full" onClick={handleClickUserMenu}>
        <GiHamburgerMenu className="w-6 h-6" />
      </button>

      {/* User Menu */}
      <HeaderLgUserMenu
        anchorEl={userMenuAnchorEl}
        open={openUserMenu}
        onClose={() => seUserMenuAnchorEl(false)}
      />

      {/* WalkIn Menu */}
      <HeaderLgWalkInMenu
        anchorEl={WalkInMenuAnchorEl}
        open={openWalkInMenu}
        onClose={() => setWalkInMenuAnchorEl(false)}
      />
    </header>
  );
}

function WalkInMenuButton({ clicked, handleClickWalkInMenu }) {
  return (
    <button
      onClick={handleClickWalkInMenu}
      className={
        `flex items-center 
        space-x-1 group 
        h-full px-4 
        whitespace-nowrap
        group
        ` + (clicked && " bg-[#767676]")
      }
    >
      <IoMdArrowDropdown className="group-hover:text-blue-500" />
    </button>
  );
}

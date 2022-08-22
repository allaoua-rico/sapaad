import React, { useState } from "react";
import { Menu } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import MenuButton from "../shared/menu/MenuButton";

export default function OrderTypesMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = [
    { text: "Call Center", value: "Call" },
    { text: "Walk-In", value: "WalkIn" },
    { text: "Dine-In", value: "DineIn" },
  ];
  const onClose = () => setAnchorEl(false);
  const handleClickMenu = (event) => setAnchorEl(event.currentTarget);

  return (
    <div>
      <button
        onClick={handleClickMenu}
        className="rounded flex items-center
        text-white bg-[#2f96b4] 
        py-1 px-3
        "
      >
        {
          [...filters, { text: "All Order Types", value: "All" }].find(
            ({ value }) => value == selectedFilter
          )?.text
        }
        <IoMdArrowDropdown />
      </button>
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
        onClose={() => setAnchorEl(false)}
        sx={{
          "& .MuiMenu-list": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <MenuButton
          onClick={() => setSelectedFilter("All")}
          onClose={onClose}
          content="All Order Types"
          width="w-36"
        />
        {React.Children.toArray(
          filters.map((filter) => (
            <MenuButton
              onClose={onClose}
              onClick={() => setSelectedFilter(filter.value)}
              content={filter.text}
              width="w-36"
            />
          ))
        )}
      </Menu>
    </div>
  );
}

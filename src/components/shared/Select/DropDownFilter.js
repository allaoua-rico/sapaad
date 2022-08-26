import { Divider, Menu } from "@mui/material";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import SelectButton from "../buttons/SelectButton";
import MenuButton from "../menu/MenuButton";

export default function DropDownFilter({
  name,
  filters,
  hideAll,
  defaultSelected,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [selectedFilter, setSelectedFilter] = useState(
    defaultSelected ? defaultSelected : "All"
  );
  const onClose = () => setAnchorEl(false);
  const handleClickMenu = (event) => setAnchorEl(event.currentTarget);
  const filtersArray = filters || [];
  return (
    <div>
      <SelectButton onClick={handleClickMenu}>
        {name}:{" "}
        {
          [...filtersArray, !hideAll && { text: "All", value: "All" }].find(
            ({ value }) => value == selectedFilter
          )?.text
        }
        <IoMdArrowDropdown />
      </SelectButton>
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
        {!hideAll && (
          <>
            <MenuButton
              onClick={() => setSelectedFilter("All")}
              onClose={onClose}
              content="All"
              width="w-36"
            />
            <Divider />
          </>
        )}

        {React.Children.toArray(
          filters?.map((filter) => (
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

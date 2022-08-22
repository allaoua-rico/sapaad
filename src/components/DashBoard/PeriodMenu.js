import React, { useState } from "react";
import { Menu } from "@mui/material";
import { ImCalendar } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import PeriodMenuDateSelector from "./PeriodMenuDateSelector";
import moment from "moment";
import OutlinedButton from "../shared/buttons/OutlinedButton";
import FilledButton from "../shared/buttons/FilledButton";

export default function PeriodMenu({
  filterStartDate,
  filterEndDate,
  setFilterStartDate,
  setFilterEndDate,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [selectedFilter, setSelectedFilter] = useState("Today");
  const filters = [
    "Today",
    "Yesterday",
    "This week",
    "This Month",
    "Last Month",
  ];

  const handleClickMenu = (event) => setAnchorEl(event.currentTarget);
  return (
    <div>
      <button
        onClick={handleClickMenu}
        className="rounded flex items-center space-x-2
        text-white bg-[#4f9f4f] 
        py-1 px-3
        "
      >
        <ImCalendar />
        <div>{filters.find((value) => value == selectedFilter)}</div>
        <IoMdArrowDropdown />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(false)}
        {...menuProps}
      >
        <div className="p-[10px]">
          <div
            className="bg-[#403e4e] text-white
            flex items-center
          "
          >
            {React.Children.toArray(
              filters.map((filter) => (
                <button
                  className="py-2 px-4 whitespace-nowrap
                hover:bg-black
                "
                >
                  {filter}
                </button>
              ))
            )}
          </div>
          <div className="flex items-center divide-x space-x-3 py-10">
            <div className="w-full space-y-5">
              <div className="text-3xl font-thin text-gray-500">From:</div>
              <PeriodMenuDateSelector
                date={filterStartDate}
                setDate={setFilterStartDate}
              />
            </div>
            <div className="w-full space-y-5 pl-3">
              <div className="text-3xl font-thin text-gray-500">To:</div>
              <PeriodMenuDateSelector
                date={filterEndDate}
                setDate={setFilterEndDate}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-1">
            <OutlinedButton
              text="Cancel"
              onClick={() => console.log("cancel")}
            />
            <FilledButton text="Apply" onClick={() => console.log("gg")} />
          </div>
        </div>
      </Menu>
    </div>
  );
}

const menuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  sx: {
    "& .MuiMenu-list": {
      display: "flex",
      flexDirection: "column",
    },
  },
};

import { useState } from "react";
import { ImCalendar } from "react-icons/im";
import { Menu } from "@mui/material";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function PeriodMenuDateSelector({ date, setDate }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickMenu = (event) => setAnchorEl(event.currentTarget);
  const onClose = () => setAnchorEl(false);

  return (
    <div
      className="flex items-center justify-between
     border-gray-300 border rounded"
    >
      <div className=" px-4">{date.format("DD/MM/YYYY HH:mm:ss")}</div>

      <button className="border-l p-[10px] bg-gray-200" onClick={handleClickMenu}>
        <ImCalendar className="text-blue-400" />
      </button>

      {/* Calendar */}
      <Menu anchorEl={anchorEl} open={open} onClose={onClose} {...menuProps}>
        <Calendar
          onChange={(date) => setDate(moment(date))}
          value={new Date(date)}
          onClickDay={onClose}
        />
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

import React from "react";
import { MenuItem, Select } from "@mui/material";
import InputLabel from "./InputLabel";
import FieldWrapper from "../wrappers/FieldWrapper";

export default function MuiSelectFieldFormikValueLabel(props) {
  const {
    variant,
    value,
    formik,
    label,
    list,
    defaultValue,
    sx,
    horizontal,
    name,
  } = props;
  const outlinedMuiInputSx = {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e5e7eb",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e5e7eb",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e5e7eb",
    },
    "& .MuiOutlinedInput-input": { paddingY: "12px !important" },
  };
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <FieldWrapper horizontal={horizontal}>
      <div className={horizontal && "w-1/3"}>
        <InputLabel>{label}</InputLabel>
      </div>
      <div className={"bg-white" + (horizontal && " w-2/3")}>
        <Select
          fullWidth
          variant={variant}
          value={value}
          name={name}
          onChange={formik.handleChange}
          // onChange={handleChange}
          sx={{
            ...outlinedMuiInputSx,
            ...sx,
            "& .MuiSelect-root": { bgColor: "white" },
          }}
        >
          <MenuItem value={defaultValue.value}>{defaultValue.text}</MenuItem>
          {React.Children.toArray(
            list?.map((el) => <MenuItem value={el.value}>{el.text}</MenuItem>)
          )}
        </Select>
      </div>
    </FieldWrapper>
  );
}

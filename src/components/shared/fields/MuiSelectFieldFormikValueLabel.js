import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";

export default function MuiSelectFieldFormikValueLabel({
  variant,
  name,
  formik,
  label,
  list,
  defaultValue,
  sx,
}) {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Select
        fullWidth
        variant={variant}
        name={name}
        id={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        // sx={outlinedMuiInputSx}
        sx={sx}
      >
        <MenuItem value={defaultValue.value}>{defaultValue.text}</MenuItem>
        {React.Children.toArray(
          list.map((el) => <MenuItem value={el.value}>{el.text}</MenuItem>)
        )}
      </Select>
    </div>
  );
}

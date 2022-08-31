import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    keys: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
    values: {
      xxs: 0,
      xs: 540,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});

export default theme;

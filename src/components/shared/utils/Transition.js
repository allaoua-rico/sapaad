import { Slide } from "@mui/material";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={500} />;
});

export default Transition;

import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";

export default function DotsMobileStepper({ steps, step }) {
  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={step - 1}
      sx={{ maxWidth: 400, flexGrow: 1 }}
    />
  );
}

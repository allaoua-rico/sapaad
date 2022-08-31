import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../theme";
import SetupWelcome from "../components/Setup/SetupWelcome";
import SwitchComponents from "../components/shared/utils/SwitchComponents";
import SetupDetails from "../components/Setup/SetupDetails";
import { Formik } from "formik";
import * as yup from "yup";
import { detailsValidationSchema } from "../utils/validation/ValidationSchema";
import SetupResponse from "../components/Setup/SetupResponse";
import { mainBg } from "../ThemeVars";

export default function Setup() {
  const [open, setOpen] = useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [tabActiveComponent, setTabActiveComponent] = useState("step1");

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (values) => {};
  const formRef = useRef();
  return (
    <div>
      <Dialog fullScreen={fullScreen} open={open} >
        <DialogContent sx={{ bgcolor: mainBg }}>
          <Formik
            innerRef={formRef}
            initialValues={{ location: "", address: "", city: "", phone: "" }}
            validationSchema={yup.object(detailsValidationSchema)}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <form
                onSubmit={props.handleSubmit}
                className="flex flex-col items-center 
                space-y-8 py-16 px-24
                bg-mainBg
                "
              >
                {/* <FormObserver setValues={setValues} /> */}
                <SwitchComponents active={tabActiveComponent}>
                  <SetupWelcome
                    name="step1"
                    clickNext={() => setTabActiveComponent("details")}
                  />
                  <SetupDetails
                    formik={props}
                    name="details"
                    next={() => setTabActiveComponent("response")}
                  />
                  <SetupResponse
                    formik={props}
                    name="response"
                    close={handleClose}
                  />
                </SwitchComponents>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { Popover } from "@mui/material";
import { Formik } from "formik";
import { useRef } from "react";
import OutlinedButtonSm from "../shared/buttons/OutlinedButtonSm";
import InputFormik from "../shared/fields/InputFormik";

export default function AddNotesMenu({ open, setAnchorEl, anchorEl }) {
  const handleClose = () => setAnchorEl(null);
  const formRef = useRef();

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <div className="bg-[#FA9500] w-64 p-1 space-y-2">
        <Formik
          innerRef={formRef}
          initialValues={{ notes: "" }}
          // onSubmit={handleSubmit}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className="text-sm">
              <InputFormik formik={props} name="notes" textarea rows={3} />
            </form>
          )}
        </Formik>
        <div className="flex justify-end space-x-1">
          <OutlinedButtonSm onClick={handleClose} text="Cancel" />
          <OutlinedButtonSm onClick={handleClose} text="Save" />
        </div>
      </div>
    </Popover>
  );
}

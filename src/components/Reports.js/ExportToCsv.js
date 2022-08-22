import React, { useState } from "react";
import SelectButton from "../shared/buttons/SelectButton";
import { FaFileCsv } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function ExportToCsv() {
  const [openDialog, setOpenDialog] = useState(null);

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <SelectButton onClick={() => setOpenDialog(true)}>
        <FaFileCsv />
      </SelectButton>
      <Dialog
        fullScreen={!md}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogContent>
          <div
            className="px-12
          flex flex-col items-center
          space-y-8
          text-center
          "
          >
            <div
              className="flex justify-between items-center
             text-lg font-light
             "
            >
              Export Already in progress...
            </div>

            <p className="text-sm font-thin">
              Your data is being exported. An email will be sent to you upon
              completion. When completed, a copy of the export will also be
              available under Saved Reports for 7 days.{" "}
            </p>

            <button
              className="border border-black rounded
             px-2 py-1  
             "
            >
              OK
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

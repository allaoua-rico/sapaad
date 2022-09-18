import { Dialog } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import FilledButtonSm from "../../components/shared/buttons/FilledButtonSm";
import GreenButton from "../../components/shared/buttons/GreenButton";
import OutlinedButtonSm from "../../components/shared/buttons/OutlinedButtonSm";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import { AntSwitch } from "../../components/shared/fields/AntSwitch";
import CheckboxWLabel from "../../components/shared/fields/CheckboxWLabel";
import InputFormik from "../../components/shared/fields/InputFormik";
import Transition from "../../components/shared/utils/Transition";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import TBR from "../../components/table/TBR";
import TH from "../../components/table/TH";

export default function SetupLocationsTaxRate() {
  const [{ crumbs }] = useOutletContext();
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => setChecked(event.target.checked);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <SetupTopSection
        leftSection={
          <ReportToolbarLeftWrapper>
            <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
            <MainH1> Tax Rates</MainH1>
          </ReportToolbarLeftWrapper>
        }
      />
      <SetupTopSection
        leftSection={
          <div className="text-gray-500 text-xl flex items-center space-x-3">
            <span>Tax Rate For Item is</span>
            <div className="pt-1">
              <AntSwitch checked={checked} onChange={handleChange} />
            </div>
          </div>
        }
      />
      {checked && (
        <>
          <div className="flex justify-end">
            <GreenButton onClick={() => setOpenDialog(true)}>
              <FaPlus />
              <span>Add Tax Rate</span>
            </GreenButton>
          </div>
          <AddTaxRate open={openDialog} setOpen={setOpenDialog} />

          <table className="table-fixed" style={{ width: "100%" }}>
            <thead>
              <tr>
                <TH>Name</TH>
                <TH>Rate</TH>
              </tr>
            </thead>
            <tbody>
              <TBR>
                <td colspan="2" className="text-center bg-[#f9f9f9]">
                  No Tax Rates Added!
                </td>
              </TBR>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

function AddTaxRate({ open, setOpen }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <div className="bg-gray-100 py-3 px-4 space-y-2 w-[400px]">
        <h2 className="text-2xl font-bold">Add Surcharge</h2>
        <Formik
          innerRef={formRef}
          initialValues={{
            name: "",
            rate: "",
            asDefault: false,
          }}
          // onSubmit={handleSubmit}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              className="text-sm w-full 
              space-y-4"
            >
              <InputFormik
                formik={props}
                name="name"
                placeholder=""
                label="Name (Required)"
              />
              <InputFormik
                formik={props}
                name="rate"
                placeholder=""
                label="Rate (Required)"
              />
              <CheckboxWLabel
                onChange={(e) =>
                  props.setFieldValue("asDefault", e.target.checked)
                }
                value={props.values.taxable}
                label="Set as default"
              />
            </form>
          )}
        </Formik>
        <div className="flex justify-end pt-5 space-x-3">
          <OutlinedButtonSm onClick={handleClose} text="Close" />
          <FilledButtonSm onClick={handleClose} text="Save" />
        </div>
      </div>
    </Dialog>
  );
}

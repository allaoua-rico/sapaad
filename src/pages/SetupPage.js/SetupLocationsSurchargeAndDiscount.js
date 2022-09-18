import { Dialog, Tabs } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import GreenButton from "../../components/shared/buttons/GreenButton";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import TBR from "../../components/table/TBR";
import TH from "../../components/table/TH";
import a11yProps from "../../components/shared/utils/MuiAntTabs/a11yProps";
import AntTab from "../../components/shared/utils/MuiAntTabs/AntTab";
import TabPanel from "../../components/shared/utils/MuiAntTabs/TabPanel";
import { useState } from "react";
import Transition from "../../components/shared/utils/Transition";
import OutlinedButtonSm from "../../components/shared/buttons/OutlinedButtonSm";
import FilledButtonSm from "../../components/shared/buttons/FilledButtonSm";
import { Formik } from "formik";
import InputFormik from "../../components/shared/fields/InputFormik";
import { useRef } from "react";
import MuiSelectFieldFormikValueLabel from "../../components/shared/fields/MuiSelectFieldFormikValueLabel";
import _ from "lodash";
import SelectedTextCardButton from "../../components/shared/buttons/SelectedTextCardButton";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import InputLabel from "../../components/shared/fields/InputLabel";
import moment from "moment";
import CheckboxWLabel from "../../components/shared/fields/CheckboxWLabel";
import SelectDayButton from "../../components/shared/utils/SelectDayButton";

export default function SetupLocationsSurchargeAndDiscount() {
  const [{ crumbs }] = useOutletContext();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <SetupTopSection
        leftSection={
          <ReportToolbarLeftWrapper>
            <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
            <MainH1>Surcharges and Discounts</MainH1>
          </ReportToolbarLeftWrapper>
        }
      />
      <Tabs value={value} onChange={handleChange} centered>
        <AntTab label="Additional Surcharges" {...a11yProps(0)} />
        <AntTab label="Order Discount" {...a11yProps(1)} />
        <AntTab label="Line Discount" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="[&>div>table>thead>tr>th]:whitespace-nowrap">
          <AdditionalSurcharges />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="[&>div>table>thead>tr>th]:whitespace-nowrap">
          <OrderDiscount />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="[&>div>table>thead>tr>th]:whitespace-nowrap">
          <LineDiscount />
        </div>
      </TabPanel>
    </div>
  );
}

function AdditionalSurcharges() {
  const [{ crumbs }] = useOutletContext();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <SetupTopSection
        leftSection={<MainH1>Surcharges and Discounts</MainH1>}
        rightSection={
          <GreenButton onClick={() => setOpenDialog(true)}>
            <FaPlus />
            <span>Add Surcharge</span>
          </GreenButton>
        }
      />
      <AddSurchargeDialog open={openDialog} setOpen={setOpenDialog} />
      <table className="table-fixed" style={{ width: "100%" }}>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH>Type</TH>
            <TH>Rate</TH>
            <TH>Walk-In</TH>
            <TH>Dine-In </TH>
            <TH>Call Center </TH>
            <TH>Take Away </TH>
            <TH>e-Order </TH>
            <TH>On Total </TH>
            <TH>Status</TH>
          </tr>
        </thead>
        <tbody>
          <TBR>
            <td colspan="10" className="text-center bg-[#f9f9f9]">
              No Surcharge Added
            </td>
          </TBR>
        </tbody>
      </table>
    </div>
  );
}

const list = [
  { name: "Walk-In" },
  { name: "Dine-In" },
  { name: "Call Center" },
  { name: "Take Away" },
  { name: "e-Order" },
];

function OrderDiscount() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <SetupTopSection
        leftSection={<MainH1>Order Level Discount</MainH1>}
        rightSection={
          <GreenButton onClick={() => setOpenDialog(true)}>
            <FaPlus />
            <span>Add Surcharge</span>
          </GreenButton>
        }
      />
      <AddOrderDiscountDialog open={openDialog} setOpen={setOpenDialog} />
      <table className="table-fixed" style={{ width: "100%" }}>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH>Rate</TH>
            <TH>Walk-In</TH>
            <TH>Dine-In </TH>
            <TH>Call Center </TH>
            <TH>Take Away </TH>
            <TH>e-Order </TH>
            <TH>On Total </TH>
            <TH>Status</TH>
          </tr>
        </thead>
        <tbody>
          <TBR>
            <td colspan="9" className="text-center bg-[#f9f9f9]">
              No Surcharge Added
            </td>
          </TBR>
        </tbody>
      </table>
    </div>
  );
}

function LineDiscount() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <SetupTopSection
        leftSection={<MainH1>Line Level Discount</MainH1>}
        rightSection={
          <GreenButton onClick={() => setOpenDialog(true)}>
            <FaPlus />
            <span>Add Surcharge</span>
          </GreenButton>
        }
      />
      <AddItemDiscountDialog open={openDialog} setOpen={setOpenDialog} />
      <table className="table-fixed" style={{ width: "100%" }}>
        <thead>
          <tr>
            <TH>Name</TH>
            <TH>Rate</TH>
            <TH>Walk-In</TH>
            <TH>Dine-In </TH>
            <TH>Call Center </TH>
            <TH>Take Away </TH>
            <TH>e-Order </TH>
            <TH>Status</TH>
          </tr>
        </thead>
        <tbody>
          <TBR>
            <td colspan="8" className="text-center bg-[#f9f9f9]">
              No Surcharge Added
            </td>
          </TBR>
        </tbody>
      </table>
    </div>
  );
}

function AddSurchargeDialog({ open, setOpen }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <div className="bg-gray-100 py-3 px-4 space-y-2 w-[400px]">
        <h2 className="text-2xl font-bold">Add Surcharge</h2>
        <Formik
          innerRef={formRef}
          initialValues={{
            name: "A",
            surchargeType: "Percentage %",
            enableForList: [],
            taxable: false,
            taxRate: "Select Tax Rate",
          }}
          // onSubmit={handleSubmit}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              className="text-sm w-full 
              space-y-4
              "
            >
              <SharedFields props={props} />
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

function AddOrderDiscountDialog({ open, setOpen }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();
  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <div className="bg-gray-100 py-3 px-4 space-y-2 w-[400px]">
        <h2 className="text-2xl font-bold">Add Sales Discount</h2>
        <Formik
          innerRef={formRef}
          initialValues={{
            name: "A",
            surchargeType: "Percentage %",
            enableForList: [],
            taxable: false,
            taxRate: "Select Tax Rate",
            discountSchedule: [],
          }}
          // onSubmit={handleSubmit}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              className="text-sm w-full 
              space-y-4
              "
            >
              <SharedFields props={props} />
              <DiscountSchedule props={props} />
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

function AddItemDiscountDialog({ open, setOpen }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <div className="bg-gray-100 py-3 px-4 space-y-2 w-[400px]">
        <h2 className="text-2xl font-bold">Add Sales Discount</h2>
        <Formik
          innerRef={formRef}
          initialValues={{
            name: "A",
            surchargeType: "Percentage %",
            enableForList: [],
            taxable: false,
            taxRate: "Select Tax Rate",
            discountSchedule: [],
          }}
          // onSubmit={handleSubmit}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              className="text-sm w-full 
              space-y-4
              "
            >
              <SharedFields props={props} />
              <DiscountSchedule props={props} />
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

function SharedFields({ props }) {
  const handleItemClick = (clickedItem) => {
    let isInArray = false;
    const selectedEnableFor = props?.values.enableForList;
    [...selectedEnableFor].map((item) => {
      if (_.isEqual(item, clickedItem)) {
        isInArray = true;
      }
    });
    if (isInArray) {
      const newArray = selectedEnableFor.filter(
        (item) => !_.isEqual(item, clickedItem)
      );
      props?.setFieldValue("enableForList", newArray);
    } else {
      props?.setFieldValue("enableForList", [
        ...selectedEnableFor,
        clickedItem,
      ]);
    }
  };
  return (
    <>
      <>
        <InputFormik
          formik={props}
          name="name"
          placeholder=""
          label="Name (Required)"
        />
        <MuiSelectFieldFormikValueLabel
          variant="outlined"
          value={props.values.surchargeType}
          formik={props}
          label="Surcharge Type"
          list={[{ text: "Value", value: "Value" }]}
          defaultValue={{ text: "Percentage %", value: "Percentage %" }}
          sx={{
            fontSize: "14px",
            "& .MuiOutlinedInput-input": {
              p: "8px",
            },
          }}
        />
        <InputFormik
          formik={props}
          name="rate"
          placeholder=""
          label="Rate (Required)"
        />
      </>
      <fieldset className="border border-gray-300 bg-white rounded">
        <legend className="mx-auto">ENABLE FOR</legend>
        <div className="grid grid-cols-3 gap-1 px-3 py-4">
          {React.Children.toArray(
            list.map((item) => (
              <SelectedTextCardButton
                item={item}
                itemClick={() => handleItemClick(item)}
                itemsSelected={props.values.enableForList}
              />
            ))
          )}
        </div>
      </fieldset>
      <CheckboxWLabel
        onChange={(e) => props.setFieldValue("taxable", e.target.checked)}
        value={props.values.taxable}
        label="Taxable"
      />
      {props.values.taxable && (
        <MuiSelectFieldFormikValueLabel
          variant="outlined"
          value={props.values.taxRate}
          formik={props}
          label="Tax Rate"
          defaultValue={{
            text: "Select Tax Rate",
            value: "Select Tax Rate",
          }}
          sx={{
            fontSize: "14px",
            "& .MuiOutlinedInput-input": {
              p: "8px",
            },
          }}
        />
      )}
    </>
  );
}

function DiscountSchedule({ props }) {
  const handleItemClick = (clickedItem) => {
    let isInArray = false;
    const selectedItems = props?.values.discountSchedule;
    [...selectedItems].map((item) => {
      if (_.isEqual(item, clickedItem)) {
        isInArray = true;
      }
    });
    if (isInArray) {
      const newArray = selectedItems.filter(
        (item) => !_.isEqual(item, clickedItem)
      );
      props?.setFieldValue("discountSchedule", newArray);
    } else {
      props?.setFieldValue("discountSchedule", [...selectedItems, clickedItem]);
    }
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <fieldset className="border border-gray-300 bg-white rounded">
      <legend className="mx-auto">Discount Schedule</legend>
      <div className="px-3 py-4">
        <div
          className="flex justify-between items-center space-x-2 border-b w-full
          pb-3
        "
        >
          {React.Children.toArray(
            days.map((day) => (
              <SelectDayButton
                day={day}
                itemClick={() => handleItemClick(day)}
                itemsSelected={props.values.discountSchedule}
              />
            ))
          )}
        </div>
        <div className="py-3 border-b">
          <div>Specific Dates:</div>
          <div className="py-3 flex items-center">
            <div className="w-1/2">
              <InputLabel>From:</InputLabel>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="w-1/2">
              <InputLabel>Until:</InputLabel>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
        <div className="py-3 border-b">
          <div>Specific Time:</div>
          <div className="py-3 flex items-center">
            <div className="w-1/2">
              <InputLabel>From:</InputLabel>
              <input
                type="time"
                value={moment(startDate).format("HH:mm")}
                className="form-control"
                placeholder="Time"
                onChange={(e) => {
                  console.log(e.target.value);
                  // this.setState({time:ev.target.value})
                }}
              />
            </div>
            <div className="w-1/2">
              <InputLabel>Until:</InputLabel>
              <input
                type="time"
                value={moment(startDate).format("HH:mm")}
                className="form-control"
                placeholder="Time"
                onChange={(e) => {
                  console.log(e.target.value);
                  // this.setState({time:ev.target.value})
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}



const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuresday",
  "Friday",
  "Saturday",
];

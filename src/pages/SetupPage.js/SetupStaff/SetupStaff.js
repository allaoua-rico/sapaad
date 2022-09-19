import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoBarChartSharp } from "react-icons/io5";
import {
  MdDelete,
  MdEdit,
  MdModeEditOutline,
  MdPersonAddAlt1,
} from "react-icons/md";
import { Link, useOutletContext } from "react-router-dom";
import SetupTopSection from "../../../components/SetupPage/SetupTopSection";
import BlueButton from "../../../components/shared/buttons/BlueButton";
import GreenButton from "../../../components/shared/buttons/GreenButton";
import ReturnLinkButton from "../../../components/shared/buttons/ReturnLinkButton";
import SearchInput from "../../../components/shared/SearchInput";
import FormObserver from "../../../components/shared/utils/FormObserver";
import Transition from "../../../components/shared/utils/Transition";
import MainH1 from "../../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import * as yup from "yup";
import InputFormik from "../../../components/shared/fields/InputFormik";
import OutlinedButton from "../../../components/shared/buttons/OutlinedButton";
import FilledButton from "../../../components/shared/buttons/FilledButton";
import FieldWrapper from "../../../components/shared/wrappers/FieldWrapper";
import InputLabel from "../../../components/shared/fields/InputLabel";
import MuiSelectFieldFormikValueLabel from "../../../components/shared/fields/MuiSelectFieldFormikValueLabel";
import FormikCheckboxWLabel from "../../../components/shared/fields/FormikCheckboxWLabel";

export default function SetupStaff() {
  const [{ crumbs }] = useOutletContext();
  const [openAddRole, setOpenAddRole] = useState(false);
  const [openAddStaff, setOpenAddStaff] = useState(false);
  const [rows, setRows] = useState(staff);
  const [filterRole, setFilterRole] = useState("");
  const [searchInput, setSearchInput] = useState("");

  //   Role Filter
  useEffect(() => {
    if (filterRole == "") setRows(staff);
    else setRows(staff.filter((emp) => emp.role == filterRole));
  }, [filterRole]);

  // Search Filter
  useEffect(() => {
    if (searchInput) {
      const filteredRows = staff.filter((row) =>
        row.name.includes(searchInput)
      );
      setRows(filteredRows);
    } else setRows(staff);
  }, [searchInput]);

  return (
    <div className="mx-auto">
      <div className="pb-4">
        <SetupTopSection
          leftSection={
            <ReportToolbarLeftWrapper>
              <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
              <MainH1>Staff</MainH1>
            </ReportToolbarLeftWrapper>
          }
          rightSection={
            <SearchInput
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search Staff"
            />
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-3">
          <table
            className="table-auto overflow-x-auto
            block my-0 mx-auto
            border-b pb-8"
            style={{ width: "100%" }}
          >
            <thead>
              <tr
                style={{ width: "100%" }}
                className="[&>th]:px-4 [&>th]:py-1
                text-left text-sm
                border-b-2"
              >
                <th style={{ width: "fit" }}></th>
                <th>Staff Name</th>
                <th>Staff Role</th>
                <th>Current Location</th>
                <th>E-Mail Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {rows.map((emp) => {
                const { name, role, location, email } = emp;
                return (
                  <tr className="text-gray-900 text-sm [&>td]:px-2 [&>td]:py-1">
                    <td>
                      <div className="border p-1 w-fit">
                        <img
                          className="w-fit min-w-[20px]"
                          src="/profile_avatar.jpg"
                          alt="profile_avatar"
                        />
                      </div>
                    </td>
                    <td>{name}</td>
                    <td>{role}</td>
                    <td>{location}</td>
                    <td>{email}</td>
                    <td className="space-y-1">
                      <Link
                        to="/setup/setup_items/1811286/edit"
                        className="w-[80px]"
                      >
                        <GreenButton>
                          <MdModeEditOutline />
                          <span>Edit</span>
                        </GreenButton>
                      </Link>
                      <Link
                        to="/setup/setup_items/1811286/edit"
                        className="w-[80px]"
                      >
                        <BlueButton>
                          <IoBarChartSharp />
                          <span>History</span>
                        </BlueButton>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-span-1 space-y-3">
          <GreenButton onClick={() => setOpenAddStaff(true)}>
            <MdPersonAddAlt1 className="w-5 h-5" />
            <span>Add New Staff</span>
          </GreenButton>
          <MenuRightSection
            filterRole={filterRole}
            setFilterRole={setFilterRole}
          />
          <div className="flex justify-center">
            <button
              onClick={() => setOpenAddRole(true)}
              className="text-xs text-blue-500 hover:underline"
            >
              + Add New Role
            </button>
          </div>
        </div>
      </div>
      <AddStaffDialog open={openAddStaff} setOpen={setOpenAddStaff} />
      <AddRoleDialog open={openAddRole} setOpen={setOpenAddRole} />
    </div>
  );
}

function AddStaffDialog({ open, setOpen }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState(null);
  const handleAdd = (values) => {};
  return (
    <Dialog
      scroll="paper"
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      fullWidth
      sx={{ maxWidth: "500px", maxHeight: "700px", mx: "auto", my: "auto" }}
    >
      <DialogTitle>
        <h2 className="text-2xl font-bold">Add New Category</h2>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            name: "",
            email: "",
            swipeCardNo: "",
            password: "",
            defaultLanguage: "English",
          }}
          innerRef={formRef}
          validationSchema={yup.object({
            name: yup.string("Enter the Name").required("Name is required"),
          })}
          onSubmit={handleAdd}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <FormObserver setValues={setValues} setErrors={setErrors} />
              <div className="py-5 space-y-3">
                <InputFormik
                  formik={props}
                  name="name"
                  label="Name (Required)"
                  placeholder="Name"
                  inputClassName="text-sm"
                />
                <InputFormik
                  formik={props}
                  name="email"
                  label="Email (Required)"
                  placeholder="Email Address"
                  inputClassName="text-sm"
                />
                <InputFormik
                  formik={props}
                  name="password"
                  label="Password (Required)"
                  placeholder="Password"
                  inputClassName="text-sm"
                  type="password"
                />
                <InputFormik
                  formik={props}
                  name="swipeCardNo"
                  label="Swipe Card No"
                  placeholder="Swipe Card No"
                  inputClassName="text-sm"
                />
                {/* Locations */}
                <div className="py-4 space-y-3">
                  <InputLabel>Default Assigned Location:</InputLabel>
                  <InputLabel>Restaurant:</InputLabel>
                  <MuiSelectFieldFormikValueLabel
                    label="Default language"
                    variant="outlined"
                    value={props.values.defaultLanguage}
                    formik={props}
                    name="defaultLanguage"
                    list={[
                      { text: "Arabic", value: "Arabic" },
                      { text: "English", value: "English" },
                    ]}
                    sx={{
                      "& .MuiOutlinedInput-input": {
                        p: 1,
                      },
                    }}
                  />
                  <MuiSelectFieldFormikValueLabel
                    label="Role (Required)"
                    variant="outlined"
                    value={props.values.defaultLanguage}
                    formik={props}
                    name="defaultLanguage"
                    list={[
                      { text: "Arabic", value: "Arabic" },
                      { text: "English", value: "English" },
                    ]}
                    sx={{
                      "& .MuiOutlinedInput-input": {
                        p: 1,
                      },
                    }}
                  />
                  <InputLabel>Image:</InputLabel>
                  <ImageUploader formik={props} />
                </div>
                <FieldWrapper></FieldWrapper>
              </div>
            </form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions>
        <div
          className="w-full flex justify-end p-2
        bg-gray-100 border-t"
        >
          <div className="flex space-x-2">
            <OutlinedButton onClick={handleClose} text="Cancel" />
            <FilledButton
              type="button"
              //   onClick={handleAdd}
              text="Add Staff"
            />
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}

function AddRoleDialog({ open, setOpen }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState(null);
  const handleAdd = (values) => {};
  const adminArray = [
    "Company Details",
    "Locations",
    "Menu",
    "Staff",
    "Global Settings",
    "Sapaad Add-Ons",
    "My Account",
  ];
  const posArray = [
    "View Call Center",
    "View Delivery Manager",
    "View Dine-In",
    "View Delivery Assistant",
    "View PDA",
    "View Walk-In",
    "View Dispatch Screen",
    "View Walkin Orders",
    "View Token Screen",
  ];
  const dashboardArray = [
    "Post Announcement",
    "Sales Reports",
    "Marketing Reports",
    "Business Summary Reports",
    "Saved Reports",
  ];
  const transactionsArray = [
    "Create & Update Order",
    "Modify Completed Orders",
    "Cancel Order",
    "Add Discount",
    "View Unconfirmed Orders",
    "Confirm Web Orders",
  ];
  return (
    <Dialog
      scroll="paper"
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      fullWidth
      sx={{
        maxHeight: "700px",
        mx: "auto",
        my: "auto",
        "& .MuiDialog-paper": { maxWidth: "unset", m: 0 },
      }}
    >
      <DialogTitle>
        <h2 className="text-2xl font-bold">Add New Role</h2>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            name: "",
            defaultPage: "Setup",
            permissions: [],
          }}
          innerRef={formRef}
          validationSchema={yup.object({
            name: yup.string("Enter the Name").required("Name is required"),
          })}
          //   onSubmit={handleAdd}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <FormObserver setValues={setValues} setErrors={setErrors} />
              <div className="py-5 grid md:grid-cols-2 gap-3">
                <InputFormik
                  formik={props}
                  name="name"
                  label="Name (Required)"
                  placeholder="Name"
                  inputClassName="text-sm"
                />
                <MuiSelectFieldFormikValueLabel
                  label="Default Page"
                  variant="outlined"
                  value={props.values.defaultPage}
                  formik={props}
                  name="defaultPage"
                  list={[
                    { text: "Setup", value: "Setup" },
                    { text: "Setup Locations", value: "Setup Locations" },
                    { text: "Setup Menu", value: "Setup Menu" },
                  ]}
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      p: 1,
                    },
                  }}
                />
              </div>
              {/* Access rights & permissions */}
              <h4>Access Rights & Permissions</h4>
              <div className="py-5 grid md:grid-cols-2 gap-10 text-xs text-gray-500">
                {/* Admin */}
                <div className="flex flex-col space-y-3">
                  <InputLabel>Admin</InputLabel>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    {React.Children.toArray(
                      adminArray.map((item) => (
                        <FormikCheckboxWLabel
                          label={item}
                          name="permissions.admin"
                          value={item}
                          onChange={props.handleChange}
                        />
                      ))
                    )}
                  </div>
                </div>
                {/* POS Access */}
                <div className="flex flex-col space-y-3">
                  <InputLabel>POS Access</InputLabel>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    {React.Children.toArray(
                      posArray.map((item) => (
                        <FormikCheckboxWLabel
                          label={item}
                          name="permissions.posAccess"
                          value={item}
                          onChange={props.handleChange}
                        />
                      ))
                    )}
                  </div>
                </div>
                {/* Dashboard */}
                <div className="flex flex-col space-y-3">
                  <InputLabel>Dashboard</InputLabel>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    {React.Children.toArray(
                      dashboardArray.map((item) => (
                        <FormikCheckboxWLabel
                          label={item}
                          name="permissions.posAccess"
                          value={item}
                          onChange={props.handleChange}
                        />
                      ))
                    )}
                  </div>
                </div>
                {/* Transactions */}
                <div className="flex flex-col space-y-3">
                  <InputLabel>Transactions</InputLabel>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    {React.Children.toArray(
                      transactionsArray.map((item) => (
                        <FormikCheckboxWLabel
                          label={item}
                          name="permissions.posAccess"
                          value={item}
                          onChange={props.handleChange}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions>
        <div
          className="w-full flex justify-end p-2
          bg-gray-100 border-t"
        >
          <div className="flex space-x-2">
            <OutlinedButton onClick={handleClose} text="Cancel" />
            <FilledButton
              type="button"
              //   onClick={handleAdd}
              text="Add Role"
            />
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}

function MenuRightSection({ filterRole, setFilterRole }) {
  const handleSetRoleFilter = (role) => setFilterRole(role);
  return (
    <div className="rounded border text-sm text-blue-500">
      <div
        className="text-xs font-semibold text-gray-500
            py-1 px-[15px] bg-gray-100 border-b"
      >
        STAFF ROLES
      </div>
      {roles.map((role) => (
        <RoleButton
          role={role}
          filterRole={filterRole}
          onClick={handleSetRoleFilter}
        />
      ))}
    </div>
  );
}

function RoleButton({ role, filterRole, onClick }) {
  const { name, value } = role;
  return (
    <div
      className={
        `flex items-center space-x-1 ` +
        (filterRole === value
          ? "bg-[#767676] text-white"
          : "bg-gray-100 hover:bg-gray-200 ")
      }
    >
      <button
        onClick={() => onClick(value)}
        className="
          py-1 px-[15px]
          w-full text-left"
      >
        {name}
      </button>
    </div>
  );
}

function ImageUploader({ formik }) {
  const fileRef = useRef();
  const [image, setImage] = useState(formik.values["img"]);
  const [displayFileError, setDisplayFileError] = useState(null);

  const handleFileInputChange = (e) => {
    const [file] = e.target.files;
    const fileSize = file.size / 1024 / 1024;
    if (fileSize > 1) {
      formik.setFieldValue("img", null);
      setDisplayFileError(true);
      setImage(null);
    } else {
      formik.setFieldValue(
        "img",
        document.querySelector('input[name="img"]').files[0]
      );
      setDisplayFileError(false);
      setImage(URL.createObjectURL(file));
    }
  };
  const changeImg = () => fileRef.current.click();
  const deleteImg = () => setImage(null);

  return (
    <div className="flex flex-col items-center self-stretch h-full">
      {image ? (
        <div className="h-full relative">
          <div className="absolute right-1 top-1 rounded-md overflow-hidden space-x-[1px]">
            <button
              type="button"
              onClick={changeImg}
              className="group bg-[#677382] py-[10px] px-3"
            >
              <MdEdit className="fill-white" />
            </button>
            <button
              type="button"
              onClick={deleteImg}
              className="group bg-[#677382] py-[10px] px-3"
            >
              <MdDelete className="fill-white" />
            </button>
          </div>
          <img src={image} alt="Profile image" className="h-full" />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileRef.current.click()}
          className="text-white bg-[#8da8d6]
                py-[6px] px-4 rounded border 
                group 
                "
        >
          <div>Please click here to upload</div>
        </button>
      )}
      <input
        name="img"
        value=""
        autoComplete="new-password"
        ref={fileRef}
        onChange={handleFileInputChange}
        multiple={false}
        type="file"
        hidden
        accept="image/png, image/jpeg"
      />
      <div
        style={{ display: !displayFileError && "none" }}
        className="pt-2 text-red-500 text-sm"
      >
        File size exceeded!
      </div>
      <p className="text-gray-500 text-xs mt-2">
        Only JPG and PNG file format are accepted.
      </p>
    </div>
  );
}

const staff = [
  {
    name: "Ali zahrani",
    role: "Admin",
    location: "All Locations",
    email: "newtechjobs4u@gmail.com",
  },
  {
    name: "staff2 staff2",
    role: "Call Agent",
    location: "All Locations",
    email: "staff2@gmail.com",
  },
];

const roles = [
  {
    name: "All",
    value: "",
  },
  { name: "Admin", value: "Admin" },
  { name: "Call Agent", value: "Call Agent" },
  { name: "Call Agent Supervisor", value: "Call Agent Supervisor" },
  { name: "Captain", value: "Captain" },
  { name: "Cashier", value: "Cashier" },
  { name: "Delivery Boy", value: "Delivery Boy" },
  { name: "Delivery Manager Station", value: "Delivery Manager Station" },
  { name: "Service Station", value: "Service Station" },
  { name: "Waiter", value: "Waiter" },
];

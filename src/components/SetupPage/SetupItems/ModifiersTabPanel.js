import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Popper,
} from "@mui/material";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import SearchInput from "../../shared/SearchInput";
import Transition from "../../shared/utils/Transition";
import MainH1 from "../../shared/wrappers/Reports/MainH1";
import TBR from "../../table/TBR";
import TH from "../../table/TH";
import * as yup from "yup";
import FormObserver from "../../shared/utils/FormObserver";
import OutlinedButton from "../../shared/buttons/OutlinedButton";
import Table from "../../table/Table";
import THR from "../../table/THR";
import { IoIosWarning } from "react-icons/io";
import { Box } from "@mui/system";

export default function ModifiersTabPanel() {
  const [modifier, setModifier] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpenManageModifier = (modifier) => {
    setModifier({ name: modifier.name });
    setOpen(true);
  };
  return (
    <div className="py-10">
      <div className="pb-4">
        <MainH1>Modifiers</MainH1>
      </div>
      <div className="flex justify-end">
        <div>
          <SearchInput placeholder="Search Modifiers" />
        </div>
      </div>
      <div className="py-6">
        <table
          className="table-auto border-collapse border"
          style={{ width: "100%" }}
        >
          <thead className="border">
            <tr>
              <TH style={{ width: "70%" }}>
                <div className="py-2">Modifier Name</div>
              </TH>
              <TH style={{ width: "15%" }}>
                <div className="py-2"> Items Assigned</div>
              </TH>
              <TH style={{ width: "15%" }}>
                <div className="py-2"></div>
              </TH>
            </tr>
          </thead>
          <tbody className="divide-y">
            {list.map((item) => {
              const { name, itemsAssigned } = item;
              return (
                <TBR>
                  <td>
                    <div className="py-1 font-semibold">{name}</div>
                  </td>
                  <td>
                    <div className="py-1 text-center">{itemsAssigned}</div>
                  </td>
                  <td>
                    <div className="py-1">
                      <button
                        onClick={() => handleOpenManageModifier(item)}
                        className="bg-[#49afcd] text-white px-2 py-1 text-sm rounded"
                      >
                        Manage
                      </button>
                    </div>
                  </td>
                </TBR>
              );
            })}
          </tbody>
        </table>
      </div>
      <ManageModifierDialog open={open} setOpen={setOpen} modifier={modifier} />
    </div>
  );
}

const list = [
  { name: "Bacon", itemsAssigned: 1 },
  { name: "Caramelized Onions", itemsAssigned: 1 },
  { name: "Cheese", itemsAssigned: 1 },
  { name: "Chicken", itemsAssigned: 1 },
  { name: "Lettuce", itemsAssigned: 1 },
  { name: "Tomatos", itemsAssigned: 1 },
  { name: "Wheat", itemsAssigned: 1 },
  { name: "Wholegrain", itemsAssigned: 1 },
];

function ManageModifierDialog({ open, setOpen, modifier }) {
  const { name, itemsAssigned } = modifier;

  const handleClose = () => setOpen(null);
  const formRef = useRef();
  const handleAddGroup = async () => {
    // try {
    //   const { values } = formRef.current;
    //   await formRef.current?.validateForm();
    //   const isValid = await groupValidationSchema.validate(values);
    //   if (isValid) {
    //     addGroup(values);
    //     handleClose();
    //   }
    // } catch (error) {}
  };
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState(null);

  // useEffect(() => {
  //   values && console.log(values);
  // }, [values]);
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
        <h2 className="text-2xl font-bold">{name}</h2>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ name: "", schedules: [], color: "#fff" }}
          innerRef={formRef}
          validationSchema={yup.object({
            name: yup
              .string("Enter your location")
              .required("Location is required"),
          })}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              className="bg-gray-50 p-3 pb-8 space-y-2 relative"
            >
              <FormObserver setValues={setValues} setErrors={setErrors} />
              <Table className="table-fixed" style={{ width: "100%" }}>
                <thead>
                  <THR style={{ width: "100%" }}>
                    <TH style={{ width: "40%" }}>Items</TH>
                    <TH style={{ width: "25%" }}>Groups</TH>
                    <TH style={{ width: "25%" }}></TH>
                  </THR>
                </thead>
                <tbody>
                  <TBR>
                    <td className="font-bold text-sm">Cheese Burger </td>
                    <td>
                      <div
                        className="text-sm text-left text-gray-500
                      flex items-center space-x-2"
                      >
                        <span>Add Ons</span>
                        <GroupPopper />
                      </div>
                    </td>
                    <td>
                      <button
                        disabled
                        className="bg-[#d47d78] text-white text-sm py-1 px-2 rounded"
                      >
                        Remove
                      </button>
                    </td>
                  </TBR>
                </tbody>
              </Table>
            </form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions>
        <div
          className="w-full flex justify-end p-2
              bg-gray-100 border-t"
        >
          <OutlinedButton onClick={handleClose} text="Close" />
        </div>
      </DialogActions>
    </Dialog>
  );
}

function GroupPopper() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <>
      <IoIosWarning
        className="w-4 h-4"
        onMouseEnter={handleClick}
        onMouseLeave={() => setOpen(false)}
      />
      <Popper
        sx={{ zIndex: 9999 }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <p
              className="max-w-[200px] bg-[#333333] text-white text-xs
            p-2 rounded text-center"
            >
              This group has got minimum and/or maximum conditions. To remove
              this modifier from this group, visit setup > menu and edit the
              item directly
            </p>
          </Fade>
        )}
      </Popper>
    </>
  );
}

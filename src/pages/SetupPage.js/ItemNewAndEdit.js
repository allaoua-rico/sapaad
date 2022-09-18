import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
  Menu,
} from "@mui/material";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";
import {
  MdArrowDropDown,
  MdDelete,
  MdEdit,
  MdExpandMore,
} from "react-icons/md";
import { Formik } from "formik";
import FieldWrapper from "../../components/shared/wrappers/FieldWrapper";
import InputFormik from "../../components/shared/fields/InputFormik";
import InputLabel from "../../components/shared/fields/InputLabel";
import CheckboxWLabel from "../../components/shared/fields/CheckboxWLabel";
import MuiSelectFieldFormikValueLabel from "../../components/shared/fields/MuiSelectFieldFormikValueLabel";
import React, { useRef, useState } from "react";
import { AntSwitch } from "../../components/shared/fields/AntSwitch";
import RadiosGroup from "../../components/shared/utils/RadiosGroup";
import CurrencyFormikInput from "../../components/shared/fields/CurrencyFormikInput";
import GreenButton from "../../components/shared/buttons/GreenButton";
import Transition from "../../components/shared/utils/Transition";
import FilledButton from "../../components/shared/buttons/FilledButton";
import OutlinedButton from "../../components/shared/buttons/OutlinedButton";
import MenuButton from "../../components/shared/menu/MenuButton";
import { RiDeleteBin6Fill, RiSettings3Fill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import OutlinedRedButton from "../../components/shared/buttons/OutlinedRedButton";
import * as yup from "yup";
import Input from "../../components/shared/fields/Input";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import FormObserver from "../../components/shared/utils/FormObserver";
import FormikCheckboxWLabel from "../../components/shared/fields/FormikCheckboxWLabel";

export default function ItemNewAndEdit() {
  const [values, setValues] = useState(null);
  const [errors, setErrors] = useState(null);
  const [{ crumbs }] = useOutletContext();
  const formRef = useRef();

  const { pathname } = useLocation();
  const route = pathname.split("/")[pathname.split("/").length - 1];
  const initialValues =
    route == "edit"
      ? {
          name: "Bottled Water",
          changeall: true,
          category: "Select Category",
          img: null,
          active: true,
          type: "Regular Item",
          restaurant: "0.00",
          defaultprice: "0.00",
          groups: [{ name: "group1", items: [] }],
          tags: [],
          foodSymbols: [],
        }
      : {
          name: "",
          changeall: true,
          category: "",
          img: null,
          active: true,
          type: "Regular Item",
          restaurant: "0.00",
          defaultprice: "0.00",
          groups: [],
          tags: [],
          foodSymbols: [],
        };
  return (
    <div className="py-4 relative">
      <SetupTopSection
        leftSection={
          <ReportToolbarLeftWrapper>
            <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
            <MainH1>
              {route == "edit" ? "Edit Menu Item" : "New Menu Item"}
            </MainH1>
          </ReportToolbarLeftWrapper>
        }
      />
      <Formik
        initialValues={initialValues}
        // onSubmit={handleSubmit}
        innerRef={formRef}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className="space-y-3">
            <FormObserver setValues={setValues} setErrors={setErrors} />
            <ItemDetails props={props} />
            <ItemAvailability props={props} />
            <FoodSymbols props={props} />
            {props.values.type === "Regular Item" && (
              <>
                <ItemModifiers props={props} />
                <Tags props={props} />
              </>
            )}
          </form>
        )}
      </Formik>
      <div className="py-8 px-2 border-t mt-5">
        <button className="flex items-center space-x-1">
          <RiDeleteBin6Fill className="text-red-600" />
          <span className="text-red-600">Delete</span>
        </button>
      </div>
      <div
        className="fixed bottom-0 p-[10px]
        flex justify-between w-full
        -mx-4 bg-[#f4f4f4]
        "
      >
        <OutlinedButton>Cancel</OutlinedButton>
        <div className="flex items-center space-x-2">
          <OutlinedButton
            text={
              <div className="flex items-center space-x-1">
                <HiOutlineDocumentDuplicate />
                <span>Duplicate</span>
              </div>
            }
          />
          <FilledButton
            className="bg-[#75ca75] hover:bg-green-600 
             border-[#e9f2e9]
            "
            text={
              <div className="flex items-center space-x-1">
                <HiOutlineDocumentDuplicate className="text-white" />
                <span className="text-white">Update</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

function ItemDetails({ props }) {
  return (
    <CustomAccordion title="Item Details">
      <div className="text-sm pl-8 space-x-6 flex items-center">
        <div className="w-2/3">
          <FieldWrapper horizontal={true}>
            <div className="w-1/3">
              <InputLabel>Item type</InputLabel>
            </div>
            <RadiosGroup
              name="type"
              wrapperClass="grid grid-cols-3 text-lg"
              setSelected={(value) => props.setFieldValue("type", value)}
              selected={props.values.type}
              radios={[
                {
                  text: "Regular Item",
                  value: "Regular Item",
                },
                ,
                {
                  text: "Grouped Item",
                  value: "Grouped Item",
                },
              ]}
            />
          </FieldWrapper>
          <InputFormik
            horizontal
            formik={props}
            name="name"
            placeholder=""
            label="Name (Required)"
          />
          {props.values.type === "Regular Item" && (
            <>
              <InputFormik
                horizontal
                formik={props}
                name="Barcode"
                placeholder=""
                label="Barcode"
              />
            </>
          )}
          <InputFormik
            horizontal
            formik={props}
            name="Item code"
            placeholder=""
            label="Item code"
          />
          {props.values.type === "Regular Item" && (
            <>
              <CurrencyFormikInput
                horizontal
                name="Default price"
                placeholder=""
                label="Default price (Required)"
                type="number"
                onChange={(value) => {
                  props.setFieldValue("defaultprice", value);
                }}
                value={props.values.defaultprice}
              />
              <CheckboxWLabel
                label="Change all locations"
                onChange={(e) =>
                  props.setFieldValue("changeall", e.target.checked)
                }
                value={props.values.changeall}
              />
              {/* Locations */}
              <div className="flex">
                <div className="w-1/3" />
                <div className="w-2/3 bg-gray-100 py-1 px-2 rounded border">
                  <CurrencyFormikInput
                    disabled={props.values.changeall}
                    horizontal
                    name="Default price"
                    placeholder=""
                    label="Restaurant"
                    type="number"
                    onChange={(value) => {
                      props.setFieldValue("restaurant", value);
                    }}
                    value={props.values.restaurant}
                  />
                </div>
              </div>
            </>
          )}
          <InputFormik
            rows={3}
            textarea
            horizontal
            formik={props}
            name="Description"
            placeholder=""
            label="Description"
          />
          <MuiSelectFieldFormikValueLabel
            horizontal
            variant="outlined"
            value={props.values.category}
            formik={props}
            name="category"
            label="Item category (Required)"
            list={[
              { text: "Beverages", value: "Beverages" },
              { text: "Pizzas", value: "Pizzas" },
              { text: "Burgers", value: "Burgers" },
            ]}
            defaultValue={{
              text: "Select Category",
              value: "Select Category",
            }}
            sx={{
              fontSize: "14px",
              "& .MuiOutlinedInput-input": {
                p: "8px",
              },
            }}
          />
        </div>
        <div className="w-1/3 self-stretch flex flex-col space-y-4">
          <ImageUploader formik={props} />
          <div className="flex items-center">
            <div className="whitespace-nowrap">ITEM STATUS: </div>
            <div className="flex justify-center w-full">
              <AntSwitch
                checked={props.active}
                value={props.active}
                onChange={(e) =>
                  props.setFieldValue(`active`, e.target.checked)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </CustomAccordion>
  );
}

function ItemAvailability({ props }) {
  return (
    <CustomAccordion title="Item Availability">
      <div className="p-3">
        <table
          className="min-w-full table-auto
          border-collapse divide-y divide-gray-300"
        >
          <thead>
            <tr>
              <Th scope="col"></Th>
              <Th>Sapaad</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Th className="py-2" scope="col">
                Loactions
              </Th>
              <Th className="py-2">POS</Th>
            </tr>
            <tr>
              <td className="py-2">Restaurant</td>
              <td className="py-2 flex justify-center">
                <CheckboxWLabel
                  onChange={(e) =>
                    props.setFieldValue("changeall", e.target.checked)
                  }
                  value={props.values.changeall}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </CustomAccordion>
  );
}

function FoodSymbols({ props }) {
  const array = [
    "Vegetarian",
    "Spicy",
    "Very Spicy",
    "May contain nuts",
    "May contain milk",
    "Gluten-free",
    "Non Vegetarian",
    "May contain egg",
    "May contain fish",
  ];
  return (
    <CustomAccordion title="Food Symbols">
      <div className="p-3 divide-y">
        <div className="grid grid-cols-3">
          {array.map((item) => (
            <FormikCheckboxWLabel
              label={item}
              name="foodSymbols"
              value={item}
              onChange={props.handleChange}
            />
          ))}
        </div>
      </div>
    </CustomAccordion>
  );
}

function ItemModifiers({ props }) {
  const [openAdd, setOpenAdd] = useState(false);
  const [openTemplate, setOpenTemplate] = useState(false);
  const handleAddGroup = (group) =>
    props.setFieldValue("groups", [
      ...props.values.groups,
      { ...group, items: [] },
    ]);
  const handleUpdateGroup = (updatedGroup, index) => {
    const updatedGroups = [...props.values.groups].map((group, index1) => {
      if (index1 === index) return updatedGroup;
      return group;
    });
    props.setFieldValue("groups", updatedGroups);
  };
  const handleDeleteGroup = (index) =>
    props.setFieldValue(
      "groups",
      props.values.groups.filter((item, index2) => index2 !== index)
    );
  return (
    <CustomAccordion title="Item Modifiers">
      {/* <NoGroupsPaper setOpen={setOpenAdd} /> */}
      {/* Available groups */}
      <div className="flex flex-col justify-center items-center px-0 py-10 space-y-5 text-center">
        <div className="flex space-x-3">
          <GreenButton onClick={() => setOpenAdd(true)}>
            <div className="p-2 text-lg">Add Group</div>
          </GreenButton>
          <button
            className="bg-white text-sm text-green-600
              flex items-center
              py-1 px-3 rounded
              border border-green-600
              "
            onClick={() => setOpenTemplate(true)}
          >
            <div className="p-2 text-lg">Save as Template</div>
          </button>
        </div>
        <hr className="my-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 self-stretch">
          {props.values.groups.map((group, index) => (
            <GroupCard
              groupIndex={index}
              props={props}
              updateGroup={(group) => handleUpdateGroup(group, index)}
              deleteGroup={() => handleDeleteGroup(index)}
            />
          ))}
        </div>
      </div>
      <AddGroupDialog
        open={openAdd}
        setOpen={setOpenAdd}
        addGroup={handleAddGroup}
      />
      <SaveAsTemplateDialog open={openTemplate} setOpen={setOpenTemplate} />
    </CustomAccordion>
  );
}

function Tags({ props }) {
  const [input, setInput] = useState("");
  const handleOnEnter = () =>
    input && props.setFieldValue("tags", [...props.values.tags, input]);
  const handleDeleteTag = (index) =>
    props.setFieldValue(
      "tags",
      props.values.tags.filter((tag, index1) => index1 !== index)
    );
  return (
    <CustomAccordion title="Tags">
      <div
        className="text-sm px-8 space-x-6 
          flex flex-col items-center"
      >
        <div className="py-5 w-full">
          <Input
            onKeyPress={(e) => e.key === "Enter" && handleOnEnter()}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a tag and hit enter to add it"
          />
        </div>
        <div className="py-10 w-full">
          {props.values.tags.length ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {props.values.tags.map((tag, index) => (
                <div
                  className="w-full flex justify-between
                bg-gray-200 py-1 px-2 rounded
                text-gray-600
                "
                >
                  <span>{tag}</span>
                  <button onClick={() => handleDeleteTag(index)}>
                    <TiDelete className="fill-blue-500 w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">No tags added.</div>
          )}
        </div>
      </div>
    </CustomAccordion>
  );
}

function GroupCard({ groupIndex, props: props1, updateGroup, deleteGroup }) {
  const group = props1.values.groups[groupIndex];
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const addItemToArray = () => {
    const { name, price, items } = formRef.current?.values;
    if (name) {
      formRef.current?.setFieldValue("name", "");
      formRef.current?.setFieldValue("price", 0);
      props1.setFieldValue(`groups[${groupIndex}]`, {
        ...group,
        items: [...group.items, { name, price }],
      });
    }
  };
  const removeItemFromArray = (index) => {
    const { items } = formRef.current?.values;
    formRef.current?.setFieldValue(
      "items",
      items.filter((item, index2) => index2 !== index)
    );
  };
  return (
    <div className="rounded overflow-hidden border ">
      <div className="p-[10px] bg-[#3a4552] flex justify-between items-center">
        <div className="p-[10px] text-xl text-white">{group.name}</div>
        <button type="button" onClick={() => setOpen(true)}>
          <RiSettings3Fill className="fill-gray-400 w-6 h-6" />
        </button>
      </div>
      <Formik
        initialValues={{
          // items: group.items,
          name: "",
          price: 0,
        }}
        // onSubmit={handleSubmit}
        innerRef={formRef}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div
              className="p-[10px] bg-[#52606f]
              flex justify-between items-center
              space-x-2"
            >
              <InputFormik
                inputClassName="text-sm"
                formik={props}
                name="name"
                placeholder="Search Item Name..."
              />
              <div className="w-1/5">
                <CurrencyFormikInput
                  inputClassName="text-sm"
                  name="price"
                  placeholder="0.0"
                  onChange={(value) => {
                    props.setFieldValue("price", value);
                  }}
                  value={props.values.price}
                />
              </div>
              <button
                type="button"
                onClick={addItemToArray}
                className="text-white bg-blue-600 self-stretch my-1 px-1"
              >
                +
              </button>
              <UpdateGroupDialog
                open={open}
                setOpen={setOpen}
                group={props1.values.groups[groupIndex]}
                updateGroup={updateGroup}
                deleteGroup={deleteGroup}
              />
            </div>
            {group.items.length ? (
              <table
                className="min-w-full table-auto
               border-collapse divide-y divide-gray-300"
              >
                <thead>
                  <tr>
                    <Th scope="col">Item Name</Th>
                    <Th>Additinal Price</Th>
                    <Th></Th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map(({ name, price }, index) => (
                    <tr style={{ width: "100%" }}>
                      <td className="p-2 text-left text-sm">{name}</td>
                      <td style={{ width: "20%" }} className="px-1">
                        <CurrencyFormikInput
                          inputClassName="text-sm"
                          name="price"
                          placeholder="0.0"
                          onChange={(value) => {
                            props.setFieldValue(`items[${index}].price`, value);
                          }}
                          value={group.items[index].price}
                        />
                      </td>
                      <td className="py-2">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => removeItemFromArray(index)}
                          >
                            <TiDelete className="text-red-500 w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>
                <p className="text-center text-xs py-5 px-4">
                  No modifiers yet. Please add it by typing the item above and
                  price if applicable.
                </p>
              </div>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}

function NoGroupsPaper({ setOpen }) {
  return (
    <div className="flex flex-col justify-center items-center p-3 py-10 space-y-5 text-center">
      <div>
        <p>You don’t have modifier at the moment.</p>
        <p>First, you need to add Group, then your desired modifier.</p>
      </div>
      <GreenButton onClick={() => setOpen(true)}>
        <div className="p-2 text-lg">Add Group</div>
      </GreenButton>
    </div>
  );
}

const groupSelectList = ["Add Ons", "Choose Your Bread", "Toppings"];

function GroupDialogCommunFields({ props }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openNameSelect = Boolean(anchorEl);
  const handleClickMenu = (event) => setAnchorEl(event.currentTarget);
  const handleSelectClose = () => setAnchorEl(null);
  return (
    <>
      <div className="flex w-full">
        <InputFormik
          inputClassName="text-2xl"
          formik={props}
          name="name"
          placeholder="Name (Required)"
        />
        <button
          onClick={handleClickMenu}
          className="p-3 bg-gray-200 border border-gray-300 rounded mt-1"
        >
          <MdArrowDropDown />
        </button>
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          anchorEl={anchorEl}
          open={openNameSelect}
          onClose={handleSelectClose}
          sx={{
            "& .MuiMenu-list": {
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          {React.Children.toArray(
            groupSelectList.map((select) => (
              <MenuButton
                onClose={handleSelectClose}
                onClick={() => props.setFieldValue("name", select)}
                content={
                  <div className="whitespace-nowrap -ml-1">{select}</div>
                }
                width="w-36"
              />
            ))
          )}
        </Menu>
      </div>
      <FieldWrapper>
        <InputLabel>Group Limits</InputLabel>
        <div className="flex items-center space-x-3">
          <div>
            <div className="text-xs">Minimum</div>
            <InputFormik
              inputClassName="text-2xl"
              formik={props}
              name="min"
              placeholder="0"
            />
          </div>
          <div>
            <div className="text-xs">Maximum</div>
            <InputFormik
              inputClassName="text-2xl"
              formik={props}
              name="max"
              placeholder="0"
            />
          </div>
        </div>
      </FieldWrapper>
      <CheckboxWLabel
        inputClassName="w-5 h-5"
        label="Add Multiple Quantity"
        onChange={(e) => props.setFieldValue("changeall", e.target.checked)}
        value={props.values.changeall}
      />
    </>
  );
}

function AddGroupDialog({ open, setOpen, addGroup }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();
  const handleAddGroup = async () => {
    try {
      const { values } = formRef.current;
      await formRef.current?.validateForm();
      const isValid = await groupValidationSchema.validate(values);
      if (isValid) {
        addGroup(values);
        handleClose();
      }
    } catch (error) {
      // console.log("fail");
    }
  };
  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <Formik
        initialValues={{ name: "" }}
        innerRef={formRef}
        validationSchema={groupValidationSchema}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="bg-gray-100 p-3 space-y-2 max-w-2xl"
          >
            <h2 className="text-2xl font-bold">Add Group</h2>
            <div className="p-3 space-y-8">
              <GroupDialogCommunFields props={props} />
            </div>
            {/* Buttons */}
            <div className="flex justify-end pt-5">
              <div className="flex space-x-2">
                <OutlinedButton onClick={handleClose} text="Close" />
                <FilledButton
                  type="button"
                  onClick={handleAddGroup}
                  text="Ok"
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

function SaveAsTemplateDialog({ open, setOpen }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();
  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <Formik
        initialValues={{ name: "" }}
        innerRef={formRef}
        validationSchema={groupValidationSchema}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="bg-gray-100 p-3 space-y-2 max-w-2xl"
          >
            <div className="p-3 space-y-8">
              <h2 className="text-3xl font-bold text-[#2bb26e]">
                Save as Template
              </h2>
              <InputFormik
                inputClassName="text-2xl"
                formik={props}
                name="name"
                placeholder="Name (Required)"
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-end pt-5">
              <div className="flex space-x-2">
                <OutlinedButton onClick={handleClose} text="Close" />
                <FilledButton type="button" onClick={handleClose} text="Save" />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

function UpdateGroupDialog({ open, setOpen, group, updateGroup, deleteGroup }) {
  const handleClose = () => setOpen(null);
  const formRef = useRef();
  const handleUpdateGroup = async () => {
    try {
      const { values } = formRef.current;
      await formRef.current?.validateForm();
      const isValid = await groupValidationSchema.validate(values);
      if (isValid) {
        updateGroup(values);
        handleClose();
      }
    } catch (error) {
      // console.log("fail");
    }
  };
  const handleDeleteGroup = () => {
    deleteGroup();
    handleClose();
  };
  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <Formik
        initialValues={{ ...group }}
        innerRef={formRef}
        validationSchema={groupValidationSchema}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="bg-gray-100 p-3 space-y-2 max-w-2xl"
          >
            <h2 className="text-2xl font-bold">Update Group</h2>
            <div className="p-3 space-y-8">
              <GroupDialogCommunFields props={props} />
            </div>
            {/* Buttons */}
            <div className="flex justify-between pt-5">
              <OutlinedRedButton onClick={handleDeleteGroup} />
              <div className="flex space-x-2">
                <OutlinedButton onClick={handleClose} text="Close" />
                <FilledButton onClick={handleUpdateGroup} text="Ok" />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Dialog>
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
              className="group bg-[#677382] 
              py-[10px] px-3"
            >
              <MdEdit className="fill-white" />
            </button>
            <button
              type="button"
              onClick={deleteImg}
              className="group bg-[#677382] 
              py-[10px] px-3"
            >
              <MdDelete className="fill-white" />
            </button>
          </div>
          <img src={image} alt="Profile image" className="h-full" />
        </div>
      ) : (
        <div
          className="h-full
          flex flex-col items-center justify-center space-y-2
        bg-[#e6e9ef] text-gray-500
          "
        >
          <img
            src="/pizza.svg"
            alt="pizza_img"
            className="w-12 h-12 fill-gray-500"
          />
          <div>No image available.</div>
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
          <p className="text-center text-sm">
            Click{" "}
            <Link to="" className="text-blue-500">
              here
            </Link>{" "}
            for the recommended image specifications.
          </p>
        </div>
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
      />
      <div
        style={{ display: !displayFileError && "none" }}
        className="pt-2 text-red-500 text-sm"
      >
        File size exceeded!
      </div>
    </div>
  );
}

const CustomAccordion = ({ children, title }) => {
  return (
    <Accordion>
      <AccordionSummary
        sx={{
          bgcolor: "#677382",
          color: "white",
        }}
        expandIcon={<MdExpandMore className="fill-white w-6 h-6" />}
      >
        <div>{title}</div>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

function Th({ children }) {
  return (
    <th
      className="text-xs font-bold text-gray-500 
    first:text-left
     px-2 py-1 w-full"
    >
      {children}
    </th>
  );
}

const groupValidationSchema = yup.object({
  name: yup.string("Enter the name").required("Name is required"),
});

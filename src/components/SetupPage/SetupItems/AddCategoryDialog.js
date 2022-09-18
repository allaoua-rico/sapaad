import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Formik } from "formik";
import React, { useRef } from "react";
import FilledButton from "../../shared/buttons/FilledButton";
import OutlinedButton from "../../shared/buttons/OutlinedButton";
import InputFormik from "../../shared/fields/InputFormik";
import Transition from "../../shared/utils/Transition";
import { CirclePicker } from "react-color";
import { useState } from "react";
import FieldWrapper from "../../shared/wrappers/FieldWrapper";
import InputLabel from "../../shared/fields/InputLabel";
import FormObserver from "../../shared/utils/FormObserver";
import { displayFormikFieldErrors } from "../../../utils/functions";
import _ from "lodash";
import SelectDayButton from "../../shared/utils/SelectDayButton";
import moment from "moment";
import { TiDelete } from "react-icons/ti";
import * as yup from "yup";

export default function AddCategoryDialog({ open, setOpen }) {
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
        <h2 className="text-2xl font-bold">Add New Category</h2>
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

              <div className="py-5">
                <InputFormik
                  formik={props}
                  name="name"
                  label="Name (Required)"
                  placeholder="Category Name"
                />
                <div className="py-4">
                  <FieldWrapper>
                    <div>
                      <InputLabel>Color:</InputLabel>
                    </div>
                    <CirclePicker
                      colors={[
                        "#ffffff",
                        "#c3e7f9",
                        "#fcffc5",
                        "#c5fff1",
                        "#ffcbcd",
                        "#fad3e3",
                        "#e7d0e3",
                        "#ffc87d",
                      ]}
                      circleSize={22}
                      circleSpacing={5}
                      color={props.values.color}
                      onChangeComplete={(color) =>
                        props.setFieldValue("color", color.hex)
                      }
                    />
                  </FieldWrapper>
                </div>
                <CategorySchedule formik={props} />
              </div>
            </form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions>
        <div
          className="w-full flex justify-end p-2
            bg-gray-100 border-t
            "
        >
          <div className="flex space-x-2">
            {!!formRef.current?.values.schedules?.length && (
              <OutlinedButton
                onClick={() =>
                  formRef.current?.setFieldValue("schedules", [
                    ...formRef.current?.values.schedules,
                    { ...scheduleObject },
                  ])
                }
                text="Add Schedule"
              />
            )}
            <FilledButton
              type="button"
              onClick={handleAddGroup}
              text="Add Category"
            />
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}

function CategorySchedule({ formik }) {
  const { schedules } = formik.values;
  const handleItemClick = (scheduleIndex, clickedItem) => {
    let isInArray = false;
    const selectedItems = schedules[scheduleIndex].days;
    [...selectedItems].map((item) => {
      if (_.isEqual(item, clickedItem)) {
        isInArray = true;
      }
    });
    if (isInArray) {
      const newArray = selectedItems.filter(
        (item) => !_.isEqual(item, clickedItem)
      );
      formik?.setFieldValue(`schedules[${scheduleIndex}].days`, newArray);
    } else {
      formik?.setFieldValue(`schedules[${scheduleIndex}].days`, [
        ...selectedItems,
        clickedItem,
      ]);
    }
  };
  return (
    <div className="flex flex-col items-center py-5 space-y-6">
      <h3 className="font-bold text-lg">Category Schedule</h3>
      <div className="w-full">
        {schedules.length ? (
          <div className="space-y-10">
            {schedules.map((schedule, index) => (
              <div>
                <div className="bg-gray-100 border rounded space-y-5 relative">
                  {/* Delete schedule button */}
                  <button
                    className="absolute -right-3 -top-3 z-50"
                    onClick={() =>
                      formik.setFieldValue(
                        "schedules",
                        schedules.filter((schedule, i) => i !== index)
                      )
                    }
                  >
                    <TiDelete className="fill-red-500 hover:fill-red-600 w-8 h-8" />
                  </button>
                  <div className="p-2">
                    <InputFormik
                      formik={formik}
                      name={`schedules[${index}].name`}
                      label="Name (Required)"
                      placeholder="Category Name"
                    />
                  </div>
                  {/* Choose Days: */}
                  <div className="w-full p-2">
                    <FieldWrapper>
                      <InputLabel>Choose Days:</InputLabel>
                      <div className="flex justify-between items-center w-full space-x-2 border-b pb-3">
                        {React.Children.toArray(
                          days.map((day) => (
                            <SelectDayButton
                              day={day}
                              itemClick={() => handleItemClick(index, day)}
                              itemsSelected={schedule.days}
                            />
                          ))
                        )}
                      </div>
                    </FieldWrapper>
                    <div>{displayFormikFieldErrors(formik, "days")}</div>
                  </div>
                  {/* Choose Time: */}
                  <div className="pt-3 border-b">
                    <div className="p-2">Choose Time:</div>
                    {schedule.times.map((time, index2) => (
                      <div
                        className={
                          "flex items-center space-x-3 py-3 p-2 " +
                          (index2 % 2 ? "bg-gray-200" : "")
                        }
                      >
                        <div className="w-1/2">
                          <InputLabel>From:</InputLabel>
                          <input
                            type="time"
                            value={time.start}
                            className="w-full border rounded"
                            placeholder="Time"
                            onChange={(e) => {
                              formik.setFieldValue(
                                `schedules[${index}].times[${index2}].start`,
                                e.target.value
                              );
                            }}
                          />
                        </div>
                        <div className="w-1/2">
                          <InputLabel>Until:</InputLabel>
                          <input
                            type="time"
                            value={time.end}
                            className="w-full border rounded"
                            placeholder="Time"
                            onChange={(e) => {
                              console.log(e.target.value);
                              formik.setFieldValue(
                                `schedules[${index}].times[${index2}].end`,
                                e.target.value
                              );
                            }}
                          />
                        </div>
                        <button
                          onClick={() =>
                            formik.setFieldValue(
                              `schedules[${index}].times`,
                              schedule.times.filter((time, i) => i !== index2)
                            )
                          }
                          disabled={index2 === 0}
                        >
                          <TiDelete
                            className={
                              "fill-gray-500 w-6 h-6 " +
                              (index2 !== 0 ? "hover:fill-gray-600" : "")
                            }
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                {schedule.times.length === 1 && (
                  <button
                    onClick={() =>
                      formik.setFieldValue(`schedules[${index}].times`, [
                        ...schedule.times,
                        {
                          start: moment(new Date()).format("HH:mm"),
                          end: moment(new Date()).format("HH:mm"),
                        },
                      ])
                    }
                    className="w-full bg-[#e4e9f1] hover:bg-[#d6dfee] py-1 hover:underline transition-all duration-75"
                  >
                    Add time
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10 flex flex-col items-center space-y-4">
            <p className="text-sm">There's no schedule for this category.</p>
            <OutlinedButton
              onClick={() =>
                formik.setFieldValue("schedules", [scheduleObject])
              }
              text="Add Schedule"
            />
          </div>
        )}
      </div>
    </div>
  );
}

const scheduleObject = {
  name: "",
  days: [],
  times: [
    {
      start: moment(new Date()).format("HH:mm"),
      end: moment(new Date()).format("HH:mm"),
    },
  ],
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuresday",
  "Friday",
  "Saturday",
];

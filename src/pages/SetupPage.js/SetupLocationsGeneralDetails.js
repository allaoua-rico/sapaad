import { Formik } from "formik";
import React from "react";
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import FilledButton from "../../components/shared/buttons/FilledButton";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import InputFormik from "../../components/shared/fields/InputFormik";
import InputLabel from "../../components/shared/fields/InputLabel";
import FieldWrapper from "../../components/shared/wrappers/FieldWrapper";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";

export default function SetupLocationsGeneralDetails() {
  const [{ crumbs }] = useOutletContext();
  const formRef = useRef();

  return (
    <div>
      <SetupTopSection
        leftSection={
          <ReportToolbarLeftWrapper>
            <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
            <MainH1>Edit Location</MainH1>
          </ReportToolbarLeftWrapper>
        }
      />
      <Formik
        innerRef={formRef}
        initialValues={{ name: "A" }}
        // onSubmit={handleSubmit}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="text-sm w-1/2 px-8
          space-y-4
          "
          >
            <InputFormik
              horizontal
              formik={props}
              name="name"
              placeholder="ex. Abbey Road"
              label="Name (Required)"
            />
            <InputFormik
              horizontal
              formik={props}
              name="address"
              placeholder="ex. Abbey Road"
              label="Address"
            />
            <InputFormik
              horizontal
              formik={props}
              name="address2"
              placeholder="ex. Abbey Road"
              label="Address 2"
            />
            <InputFormik
              horizontal
              formik={props}
              name="city"
              placeholder="ex. Abbey Road"
              label="City (Required)"
            />
            <FieldWrapper horizontal>
              <InputLabel>Country</InputLabel>
              <div>Saudi Arabia</div>
            </FieldWrapper>
            <FieldWrapper horizontal>
              <InputLabel>Time zone</InputLabel>
              <div>Riyadh</div>
            </FieldWrapper>
            <FieldWrapper horizontal>
              <InputLabel>Currency</InputLabel>
              <div>Saudi Riyal - SAR</div>
            </FieldWrapper>
            <InputFormik
              horizontal
              formik={props}
              name="phone"
              placeholder="ex. Abbey Road"
              label="Telephone"
            />
            <InputFormik
              horizontal
              formik={props}
              name="location"
              placeholder="ex. Abbey Road"
              label="Store Location"
            />
            <FilledButton text="Update" />
          </form>
        )}
      </Formik>
    </div>
  );
}

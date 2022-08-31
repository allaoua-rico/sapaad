import FilledButton from "../shared/buttons/FilledButton";
import InputFormik from "../shared/fields/InputFormik";
import { detailsValidationSchema } from "../../utils/validation/ValidationSchema";
import { validateStep } from "../../utils/validation/functions";

export default function SetupDetails({ formik, next }) {
  const handleNext = async () => {
    const isValid1 = await validateStep(formik, detailsValidationSchema);
    isValid1 && next();
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-3xl">Restaurant Details</div>
        <p className="text-center">
          To begin, we'll need some information about your business.
        </p>
      </div>
      <div className="w-full space-y-3">
        <InputFormik
          name="location"
          formik={formik}
          placeholder="ex. Abbey Road"
          label="Location Name"
        />
        <InputFormik
          name="address"
          formik={formik}
          placeholder="ex. 123 Orchard Road"
          label="Address"
        />
        <InputFormik
          name="city"
          formik={formik}
          placeholder="ex. Los Angeles"
          label="City"
        />
        <InputFormik
          type="number"
          name="phone"
          formik={formik}
          placeholder="+1-123-45678"
          label="Phone Number"
        />
      </div>
      <div>
        <FilledButton onClick={handleNext} text="Next" type="button" />
      </div>
    </>
  );
}

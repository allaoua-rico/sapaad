import * as yup from "yup";

export const validateStep = async (formik, validationSchema) => {
  try {
    let values = {};
    // Validate the field and display error
    Object.keys(validationSchema).forEach(function (key, index) {
      formik.validateField(key);
      formik.setFieldTouched(key, true);
      values[key] = formik.values[key];
    });

    // Validate the field and continue to next step
    const isDataValid = await yup
      .object(validationSchema)
      .validate(values, { strict: true });
    return !!isDataValid;
  } catch (error) {
    console.log(error);
  }
};

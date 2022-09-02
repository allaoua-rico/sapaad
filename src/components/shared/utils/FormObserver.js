import { useFormikContext } from "formik";
import { useEffect } from "react";

const FormObserver = ({ setValues, setErrors }) => {
  const { values, errors } = useFormikContext();
  useEffect(() => {
    values && setValues && setValues(values);
    errors && setErrors && setErrors(errors);
  }, [values, errors]);
  return null;
};
export default FormObserver;

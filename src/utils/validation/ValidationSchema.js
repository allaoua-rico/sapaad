import * as yup from "yup";

export const detailsValidationSchema = {
  location: yup.string("Enter your location").required("Location is required"),
  address: yup.string("Enter your address").required("Address is required"),
  city: yup.string("Enter your city").required("City is required"),
  phone: yup
    .string()
    .min(9, "Enter a valid phone number")
    .required("Phone number is required"),
};

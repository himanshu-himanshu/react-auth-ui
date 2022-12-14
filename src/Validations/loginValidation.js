import * as yup from "yup";

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email("⚠ Please enter a valid email address.")
    .required("⚠ Email is required"),
  password: yup
    .string()
    .min(8, "⚠ Enter password between 8-12 characters")
    .max(12, "⚠ Enter password between 6-12 characters")
    .required("⚠ Password is required"),
});

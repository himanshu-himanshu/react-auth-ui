import * as yup from "yup";

export const userValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("⚠ Username is required")
    .min(6, "⚠ Create a username atleast 6 characters long.")
    .matches(
      "^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$",
      "⚠ Given username contains invalid characters"
    ),
  email: yup
    .string()
    .email("⚠ Please enter a valid email address.")
    .required("⚠ Email is required"),
  password: yup
    .string()
    .min(8, "⚠ Create a password between 8-12 characters")
    .max(12, "⚠ Create a password between 6-12 characters")
    .required("⚠ Password is required"),
});

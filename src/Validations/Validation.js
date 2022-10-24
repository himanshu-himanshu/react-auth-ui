import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(6, "Username too short"),
  email: yup
    .string()

    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password too short")
    .max(12, "Password too long")
    .required("Password is required"),
});

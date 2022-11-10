import React from "react";

const Input = ({ type, id, placeholder, ...restProps }) => {
  const classname =
    id === "username"
      ? `${
          restProps.errors.username && restProps.touched.username
            ? "border-pink-500"
            : "active-border"
        }`
      : id === "email"
      ? `${
          restProps.errors.email && restProps.touched.email
            ? "border-pink-500"
            : "active-border"
        }`
      : `${
          restProps.errors.password && restProps.touched.password
            ? "border-pink-500"
            : "active-border"
        }`;
  return (
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className={`input ${classname}`}
      onChange={restProps.handleChange}
      onBlur={restProps.handleBlur}
      value={restProps.values.value}
    />
  );
};

export default Input;

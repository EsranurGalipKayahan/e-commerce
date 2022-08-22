import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

export const Error = ({ message }) => {
  return (
    <div className="error">
      <ErrorIcon />
      <p>{message}</p>
    </div>
  );
};

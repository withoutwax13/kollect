// Recyclable component for system alert
import React from "react";
import Alert from "@mui/material/Alert";

const SystemAlert = ({ message, type }) => {
  const alertTypes = {
    success: <Alert severity="success">{message}</Alert>,
    info: <Alert severity="info">{message}</Alert>,
    warning: <Alert severity="warning">{message}</Alert>,
    error: <Alert severity="error">{message}</Alert>,
  };

  if (alertTypes[type] === undefined) {
    throw new Error(`Invalid system alert type: ${type}`);
  } else {
    return alertTypes[type];
  }
};

export default SystemAlert;

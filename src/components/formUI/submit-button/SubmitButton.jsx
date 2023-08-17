import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const SubmitButton = ({ action }) => {
  const { submitForm } = useFormikContext();
  const { loading } = useSelector((state) => state.authSlice);

  return (
    <Button
      variant="contained"
      onClick={() => submitForm()}
      sx={{
        mt: 2,
        minWidth: 200,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
          color: "primary.contrastText",
        },
      }}
    >
      {loading ? "Loading..." : action}
    </Button>
  );
};

SubmitButton.propTypes = {
  action: PropTypes.string.isRequired,
};

export default SubmitButton;

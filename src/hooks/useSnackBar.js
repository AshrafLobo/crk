import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

function useSnackBar() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState({});

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const setMessage = (message, variant = "success") => {
    setOptions({
      message,
      variant,
    });
    setOpen(true);
  };

  const SnackbarComponent = (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={options.variant}
        sx={{ width: "100%" }}
      >
        {options.message}
      </Alert>
    </Snackbar>
  );

  return { displaySnackBar: SnackbarComponent, setMessage };
}

export default useSnackBar;

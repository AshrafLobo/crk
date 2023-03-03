import React from "react";
import { Modal, Box, Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { PayrollDownloadForm } from "../../components/forms";

function PayrollDownloadModal({ open, handleClose }) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              p: 10,
              maxWidth: "600px",
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <IconButton
              onClick={handleClose}
              aria-label="close"
              sx={{ position: "absolute", p: 2, top: 0, right: 0 }}
            >
              <CloseIcon sx={{ color: "#0a0a0a" }} />
            </IconButton>
            <Stack spacing={1} sx={{ py: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Request a demo
              </Typography>
              <Typography variant="body1" color="#A0A0A0">
                Please fill in the the form below and submit to begin download.
                We will get back to you shortly using the details provided.
              </Typography>
            </Stack>
            <PayrollDownloadForm handleClose={handleClose} />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default PayrollDownloadModal;

import React, { useState, useLayoutEffect } from "react";
import {
  Modal,
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";

import { useData } from "../../hooks";

function DownloadResourcesModal({ postId, open, handleClose }) {
  const { get } = useData();
  const [resources, setResources] = useState([]);
  useLayoutEffect(() => {
    (async () => {
      if (postId) {
        const { data } = await get(`featuredDownloads/resources/${postId}`);
        setResources(data);
      }
    })();
  }, [postId]);

  const handleDownload = (downloadSrc) => {
    window.open(`${process.env.REACT_APP_API_URL}/${downloadSrc}`, "_blank");
  };

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
            <Stack spacing={2} sx={{ py: 4 }}>
              <Stack spacing={1} sx={{ mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Download Resources
                </Typography>
                <Typography variant="body1" sx={{ color: "#A0A0A0" }}>
                  Please click 'Download' to download the respective resource.
                </Typography>
              </Stack>
              <Box>
                {resources &&
                  resources.map(({ id, title, downloadSrc }) => (
                    <Stack
                      key={`resource-${id}`}
                      spacing={1}
                      sx={{ borderBottom: "solid 1px #E0E0E0", my: 3, mr: 2 }}
                    >
                      <Stack
                        spacing={2}
                        direction="row"
                        sx={{ justifyContent: "space-between", mb: 1 }}
                      >
                        <Typography variant="body1">{title}</Typography>
                        <Button
                          type="button"
                          variant="contained"
                          startIcon={<DownloadIcon />}
                          size="small"
                          sx={{
                            width: "fit-content",
                            py: 1,
                            px: 2,
                            lineHeight: "0",
                            borderRadius: "50px",
                            backgroundColor: "#DDA01E",
                            "&:hover": {
                              bgcolor: "#DDA01E",
                              opacity: "0.9",
                            },
                          }}
                          onClick={() => handleDownload(downloadSrc)}
                        >
                          Download
                        </Button>
                      </Stack>
                    </Stack>
                  ))}
              </Box>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default DownloadResourcesModal;

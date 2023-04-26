import React, { useState, useLayoutEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";

import DownloadIcon from "@mui/icons-material/Download";

import { useData } from "../../hooks";
import { DownloadResourcesModal } from "./";

function FeaturedPostsSection(props) {
  const { get } = useData();
  const [posts, setPosts] = useState([]);

  useLayoutEffect(() => {
    (async () => {
      let { data } = await get("featuredposts");
      setPosts(data[0]);
    })();
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container sx={{ m: "0 !important", py: 5 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mx: 2 }}>
            <ReactPlayer
              controls
              width="100%"
              height="100%"
              url={`${process.env.REACT_APP_API_URL}/${posts.featuredPostSrc}`}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            spacing={2}
            sx={{
              textAlign: { xs: "center", md: "left" },
              mx: 2,
              mt: { xs: 5, md: 0 },
            }}
          >
            <Stack spacing={0}>
              <Typography
                variant="body1"
                component="span"
                sx={{
                  bgcolor: "#3E4756",
                  color: "#ffffff",
                  width: "fit-content",
                  px: 2,
                  mx: { xs: "auto", md: 0 },
                  mb: 1,
                  fontSize: "14px",
                }}
              >
                FEATURED POSTS
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                {posts.title}
              </Typography>
            </Stack>
            <Typography variant="body1" component="p" sx={{ color: "#A0A0A0" }}>
              {posts.description}
            </Typography>

            <Button
              type="button"
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                width: "fit-content",
                mx: { xs: "auto !important", md: "0 !important" },
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
              onClick={handleOpen}
            >
              Download resources
            </Button>
          </Stack>
        </Grid>
      </Grid>

      <DownloadResourcesModal
        postId={Object.keys(posts).length > 0 ? posts.id : null}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default FeaturedPostsSection;

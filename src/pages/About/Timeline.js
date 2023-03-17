import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { TimelineItem } from "./";
import { useData } from "../../hooks";

const responsive = {
  xl: {
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
  },
  lg: {
    breakpoint: { max: 1536, min: 1200 },
    items: 4,
  },
  md: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
  },
  sm: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
  },
  xs: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Timeline(props) {
  const { get } = useData();
  const [timelines, setTimelines] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await get("timelines");
      setTimelines(data);
    })();
  }, []);

  const handleRightClick = () => {
    alert("Right clicked");
  };

  const handleLeftClick = () => {
    alert("Left clicked");
  };

  return (
    <Carousel
      arrows
      responsive={responsive}
      customRightArrow={<RightArrow onClick={handleRightClick} />}
      customLeftArrow={<LeftArrow onClick={handleLeftClick} />}
      draggable={false}
      className="carousel"
    >
      {timelines &&
        timelines.map((timeline) => (
          <TimelineItem timeline={timeline} key={`Timeline-${timeline.id}`} />
        ))}
    </Carousel>
  );
}

function RightArrow({ onClick, ...rest }) {
  // const {
  //   onMove,
  //   carouselState: { currentSlide, deviceType },
  // } = rest;

  return (
    <IconButton
      aria-label="forward"
      sx={{ color: "#FFFFFF", position: "absolute", right: 0 }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

function LeftArrow({ onClick, ...rest }) {
  // const {
  //   onMove,
  //   carouselState: { currentSlide, deviceType },
  // } = rest;

  return (
    <IconButton
      aria-label="back"
      sx={{ color: "#FFFFFF", position: "absolute", left: 0 }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
}

export default Timeline;

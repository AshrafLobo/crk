import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { TimelineItem } from "./";
import useData from "../../hooks/useData";

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
  const [get] = useData();
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

/* const TIMELINES = [
  {
    index: 1,
    year: "1972",
    title: "Inception",
    timelineText:
      "Comp-rite Kenya Limited began in 1972 by providing software solutions to growing market",
  },
  {
    index: 2,
    year: "1972",
    title: "Data Processing Bureau",
    timelineText:
      "Developed Data Processing Bureau: Share Registration and Payroll",
  },
  {
    index: 3,
    year: "1978",
    title: "Began sales of mini-computers",
    timelineText: "We commenced sales of Kenya's first mini-computer",
  },
  {
    index: 4,
    year: "1978",
    title: "Introduced Apple Computers to Africa",
    timelineText:
      "We introduced Apple Computers to Africa as well as started new services for micro, mini and mainframe computers",
  },
  {
    index: 5,
    year: "1984",
    title: "Launching Apple Macintosh Computers",
    timelineText: "Launched Apple Macintosh Personal Computers",
  },
  {
    index: 6,
    year: "1986",
    title: "Successfully processed IPO",
    timelineText:
      "Successfully processed the IPO for the FIRST listed company in Kenya.",
  },
]; */

export default Timeline;

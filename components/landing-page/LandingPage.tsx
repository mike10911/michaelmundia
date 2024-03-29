"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { H1, H2 } from "../../lib/typography";
import PrimaryButton from "../primary-button/PrimaryButton";
import { StyledCallToActionBtnContainer } from "../primary-button/PrimaryButton.styles";
import {
  StyledLandingContainer,
  StyledM,
  StyledName,
  StyledNameContainer,
  StyledNameTitleContainer,
  StyledTitle,
} from "./LandingPage.styles";
//import resume from "../../docs/MMResume.pdf";

const variantsTop = {
  enter: { y: "-100%", opacity: 0 },
  center: { y: "0%", opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

const variantsBottom = {
  enter: { y: "100%", opacity: 0 },
  center: { y: "0%", opacity: 1 },
  exit: { y: "100%", opacity: 0 },
};

const LandingPage: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "SOFTWARE ENGINEER",
    "TECHNICAL LEAD",
    "THEATRE PROFESSIONAL",
    "DESIGNER",
    "PHOTOGRAPHER",
    "RESIDENT ASSISTANT",
    "THRIFTER",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [textIndex, texts.length]);

  const variants = {
    enter: {
      y: "-100%",
      opacity: 0,
    },
    center: {
      y: "0%",
      opacity: 1,
    },
    exit: {
      y: "100%",
      opacity: 0,
    },
  };

  return (
    <StyledLandingContainer>
      <StyledNameTitleContainer>
        <StyledNameContainer>
          <StyledName
            key="name"
            // initial="enter"
            // animate="center"
            // exit="exit"
            // variants={variantsTop}
            // transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            MICHAEL
          </StyledName>
          <StyledM>M</StyledM>
          <StyledName
            key="name"
            // initial="enter"
            // animate="center"
            // exit="exit"
            // variants={variantsBottom}
            // transition={{ duration: 1.5, damping: 100, ease: "easeInOut" }}
          >
            MUNDIA
          </StyledName>
        </StyledNameContainer>
        <motion.div
          key={texts[textIndex]}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <StyledTitle>{texts[textIndex]}</StyledTitle>
        </motion.div>
      </StyledNameTitleContainer>
      <StyledCallToActionBtnContainer>
        <PrimaryButton btnText={"CONTACT"} btnLink={"#contact"}></PrimaryButton>
        <PrimaryButton
          btnText={"RESUME"}
          newTab
          btnLink={"https://drive.google.com/file/d/1Ja7V7arJvg6Jm_nkH0os4MBxl1bHnC7u/view?usp=drive_link"}
        ></PrimaryButton>
      </StyledCallToActionBtnContainer>
    </StyledLandingContainer>
  );
};

export default LandingPage;

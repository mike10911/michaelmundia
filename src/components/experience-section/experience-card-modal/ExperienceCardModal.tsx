import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ExperienceCardModalProps } from "../../../lib/types";

import PrimaryButton from "../../primary-button/PrimaryButton";
import {
  ExperienceCardModalConatiner,
  ExperienceCardModalOverlay,
} from "./ExperienceCardModal.styles";

const ExperienceCardModal: React.FC<ExperienceCardModalProps> = (props) => {
  const handleClick = () => {
    props.handleClicked(false);
  };
  return ReactDOM.createPortal(
    <>
      <ExperienceCardModalConatiner>
        <PrimaryButton btnText={"BACK"} onClick={handleClick}></PrimaryButton>
        <p>{props.jobTitle}</p>
        <p>{props.company}</p>
        <p>{props.date}</p>
        <p>{props.location}</p>
        <ul>
          {props.bulletPoints.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>
      </ExperienceCardModalConatiner>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default ExperienceCardModal;

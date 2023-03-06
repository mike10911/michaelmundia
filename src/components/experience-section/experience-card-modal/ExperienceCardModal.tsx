import React, { forwardRef, Ref } from "react";
import { ExperienceCardModalProps } from "../../../lib/types";
import PrimaryButton from "../../primary-button/PrimaryButton";
import { ExperienceCardModalConatiner } from "./ExperienceCardModal.styles";

const ExperienceCardModal: React.FC<ExperienceCardModalProps> = forwardRef(
  (
    { handleClicked, jobTitle, company, date, location, bulletPoints },
    ref: Ref<HTMLDivElement>
  ) => {
    const handleClick = () => {
      handleClicked(false);
    };
    return (
      <ExperienceCardModalConatiner ref={ref}>
        <PrimaryButton btnText={"BACK"} onClick={handleClick}></PrimaryButton>
        <p>{jobTitle}</p>
        <p>{company}</p>
        <p>{date}</p>
        <p>{location}</p>
        <ul>
          {bulletPoints.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>
      </ExperienceCardModalConatiner>
    );
  }
);

export default ExperienceCardModal;

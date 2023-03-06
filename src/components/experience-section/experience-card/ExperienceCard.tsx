import React from "react";
import { ExperienceCardProps } from "../../../lib/types";
import PrimaryButton from "../../primary-button/PrimaryButton";
import ExperienceCardModal from "../experience-card-modal/ExperienceCardModal";
import { ExperienceCardModalOverlay } from "../experience-card-modal/ExperienceCardModal.styles";
import {
  ExperienceCardContainer,
  StyledExperienceCardImage,
  StyledExperienceCardTitle,
} from "./ExperienceCard.styles";

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleChildClick = (childState: boolean) => {
    setModalOpen(childState);
  };
  return (
    <>
      <ExperienceCardContainer backgroundColor={props.backgroundColor}>
        <StyledExperienceCardImage src={props.image} />
        <StyledExperienceCardTitle color={props.textColor}>
          {props.jobTitle}
        </StyledExperienceCardTitle>
        <PrimaryButton
          onClick={() => setModalOpen(true)}
          primaryColor={props.textColor}
          secondaryColor={props.backgroundColor}
          btnText="MORE"
        />
      </ExperienceCardContainer>
      {modalOpen && (
        <>
          <ExperienceCardModalOverlay />
          <ExperienceCardModal
            handleClicked={handleChildClick}
            jobTitle={props.jobTitle}
            company={props.company}
            date={props.date}
            location={props.date}
            bulletPoints={props.bulletPoints}
          />
        </>
      )}
    </>
  );
};

export default ExperienceCard;

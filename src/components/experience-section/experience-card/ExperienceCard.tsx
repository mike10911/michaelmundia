import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ExperienceCardProps } from "../../../lib/types";
import PrimaryButton from "../../primary-button/PrimaryButton";
import ExperienceCardModal from "../experience-card-modal/ExperienceCardModal";
import { ExperienceCardModalOverlay } from "../experience-card-modal/ExperienceCardModal.styles";
import {
  backdropVariant,
  modalVariant,
} from "../experience-card-modal/ExperienceCardModal.animations";
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
  const ExperienceCardModalMotion = motion(ExperienceCardModal);
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
      <AnimatePresence>
        {modalOpen && (
          <>
            <ExperienceCardModalOverlay
              variants={backdropVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            <ExperienceCardModalMotion
              handleClicked={handleChildClick}
              image={props.modalLogo}
              jobTitle={props.jobTitle}
              company={props.company}
              date={props.date}
              location={props.location}
              bulletPoints={props.bulletPoints}
              key={props.id}
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceCard;

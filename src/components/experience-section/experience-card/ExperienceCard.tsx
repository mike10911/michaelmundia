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

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  const handleChildClick = (childState: boolean) => {
    setModalOpen(childState);
  };

  const ExperienceCardModalMotion = motion(ExperienceCardModal);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={ref}
      key={props.id}
      initial="hidden"
      animate={animation}
      exit="hidden"
      variants={cardVariants}
      transition={{ duration: 0.7 }}
    >
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
    </motion.div>
  );
};

export default ExperienceCard;

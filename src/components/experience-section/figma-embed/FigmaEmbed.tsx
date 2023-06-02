import React from "react";
import { StyledFigmaEmbed } from "../ExperienceSection.styles";
import { DesignExpProps } from "../../../lib/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";


export const FigmaEmbed: React.FC<DesignExpProps> = (props) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  React.useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animation}
      exit="hidden"
      variants={cardVariants}
      transition={{ duration: 0.7 }}
    >
      <StyledFigmaEmbed
        whileHover={{ scale: 1.1 }}
        src={props.figmaLink}
        allowFullScreen
        loading="lazy"
      />
    </motion.div>
  );
};

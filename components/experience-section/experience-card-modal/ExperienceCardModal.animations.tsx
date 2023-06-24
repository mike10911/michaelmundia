export const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.2, // To delay the child animation
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const modalVariant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: "0vh",
    transition: {
      type: "spring", // Transition type animation used is spring
      stiffness: 70, // Stiffness of spring
      damping: 10, // Damping of spring
      duration: 0.3, // Duration of animation
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

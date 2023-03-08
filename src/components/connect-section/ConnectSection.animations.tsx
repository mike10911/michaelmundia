export const socialIconAnimations = {
  animate: {
    rotate: [1, 15, -14, -14, 12, 16, -18, 12, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
      damping: 1000,
      bounce: 1000,
      type: "spring",
    },
  },
  hover: {
    scale: 1.5,
  },
  tap: {
    scale: 0.9,
  },
  load: {
    opacity: 0,
    scale: 0.9,

    transition: {
      duration: 0.5,
    },
  },
};

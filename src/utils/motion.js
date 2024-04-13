export function slideInFromLeft(delay) {
    return {
      hidden: { x: -100, opacity: 0 , overflow:"hidden" },
      visible: {
        x: 0,
        overflow:"hidden",
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export function slideInFromRight(delay) {
    return {
      hidden: { x: 80, opacity: 0 , overflow:"hidden" },
      visible: {
        x: 0,
        overflow:"hidden",
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
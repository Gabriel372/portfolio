export const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  
  export const pageVariantsModal = {
    initial: {
      opacity: 0,
      y: "100vh",
    },
    in: {
      opacity: 1,
      y: 0,  
    },
    out: {
      opacity: 0,
      y: "-100vh", 
    },
  };
  export const pageTransitionModal = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.7
  };




  // export const modalVariants = {
  //   hidden: { opacity: 0, y: "-100vh" },
  //   visible: { opacity: 1, y: "0" },
  //   exit: { opacity: 0, y: "100vh" }
  // };  
import React, { createContext, useState, useContext } from 'react';

const AnimationContext = createContext();

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [isLandingAnimationComplete, setLandingAnimationComplete] = useState(false);

  return (
    <AnimationContext.Provider value={{ isLandingAnimationComplete, setLandingAnimationComplete }}>
      {children}
    </AnimationContext.Provider>
  );
};

import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/loader.json' ; // adjust the path accordingly

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie 
        options={defaultOptions}
        height={50} // Adjust as needed
        width={50}  // Adjust as needed
      />
    </div>
  );
};

export default Loader;

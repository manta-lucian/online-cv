import React from "react";

const Hero = React.forwardRef((props, ref) => {
  return (
    <div className="hero-container">
      {props.children}
      <div ref={ref} className="helper-div helper-div-home"></div>
    </div>
  );
});

export default Hero;

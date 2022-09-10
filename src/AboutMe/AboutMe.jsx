import React from "react";
import { useInView } from "react-intersection-observer";
import Typed from "react-typed";

const AboutMe = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;
  const { ref: aboutMeSection, inView: isAboutMeSectioninView } = useInView();
  const aboutMe = document.querySelector(".about-container");

  if (isAboutMeSectioninView) {
    aboutMe.classList.add("from-bottom");
  }

  return (
    <div className="about-container" ref={aboutMeSection}>
      <div ref={ref1} className="helper-div"></div>
      <div ref={ref2} className="helper-div helper-div-about"></div>
      <div className="about-left-side-container">
        <div className="about-img"></div>
        <h2 className="about-name">
          <span className="change-name-animation">
            <Typed strings={["Lucian", "Ionut"]} typeSpeed={100} backSpeed={50} backDelay={5000} loop />
          </span>
          - Manta
        </h2>
        <p className="about-position">Front End Developer</p>
        <button className="call-to-action-button button-resume button about-resume-button">Resume</button>
        <span className="vertical-line-divider"></span>
      </div>
      <div className="about-right-side-container">
        <div className="about-head-title">About Me</div>
        <div className="about-description-c">
          <p className="about-description-c__content--1">
            Hi there ! My name is Manta Lucian - Ionut and im an aspiring front-end developer. Currently i am a novice but i keep on
            learning everyday. As everyone says , when learning about this field there is no end , its a continuous evelving path.
          </p>
          <p className="about-description-c__content--2">
            I've been intrigued by Informational Technology since a friend of mine flexed on me with a cool coding trick but only now began
            to really learn it. I like to code in my free time to learn more and develop my skills and I also enjoy working both as a team
            or invidually. I'm a friendly, flexible person who gets accustomed really fast and i can not wait to... .
          </p>
          <p className="about-description-c__content--3">Below you will find some of my passions</p>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;

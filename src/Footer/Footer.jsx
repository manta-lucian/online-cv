import { FaAtom, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import React from "react";

const Footer = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;
  const { scrollToHome, scrollToSkills, scrollToPortofolio, scrollToAboutMe, handleModalState } = props;
  return (
    <div className="footer-container">
      <div ref={ref1} className="helper-div"></div>
      <div ref={ref2} className="helper-div helper-div-contact"></div>
      <div className="logo-slo-wrap">
        <div className="footer-logo">
          <FaAtom />
        </div>
        <p className="slogan slogan--1">you visiualize</p>
        <p className="slogan slogan--2">i create</p>
      </div>
      <div className="quick-links">
        <p className="quick-links__title">Quick links</p>
        <ul className="quick-links__list">
          <li className="quick-links__item">
            <a onClick={scrollToHome}>home</a>
          </li>
          <li className="quick-links__item">
            <a onClick={scrollToSkills}>skills</a>
          </li>
          <li className="quick-links__item">
            <a onClick={scrollToPortofolio}>portofolio</a>
          </li>
          <li className="quick-links__item">
            <a onClick={scrollToAboutMe}>about</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <p className="contact__title">Contact</p>
        <ul className="contact__list">
          <li className="contact__item">
            <a href="#">
              <FaEnvelope /> lucian.ionut.manta@gmail.com
            </a>
          </li>
          <li className="contact__item">
            <a href="#">
              <FaPhone /> 0741411319
            </a>
          </li>
          <li className="contact__item">
            <a href="#">
              <FaLinkedin /> linkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="hire-wrap">
        <button className="call-to-action button" onClick={handleModalState}>
          Hire Me
        </button>
      </div>
      <div className="copyright-container">
        <p className="copy">&copy; Copyright</p>
        <p className="copy-name">Manta Lucian-Ionut</p>
        <p className="copy-year">2022</p>
      </div>
    </div>
  );
});

export default Footer;

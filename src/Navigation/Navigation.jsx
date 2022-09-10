import { FaAtom, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import BurgerButton from "./BurgerButton";
import MobileNav from "./MobileNav";
import { useState } from "react";
import React from "react";

const Navigation = React.forwardRef((props, ref) => {
  const {
    scrollToSkills,
    scrollToPortofolio,
    isSkillsVisible,
    isPortofolioVisible,
    isHomeVisible,
    isAboutMeVisible,
    scrollToAboutMe,
    isFooterVisible,
    scrollToFooter,
    handleModalState,
    setShowModal,
  } = props;
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [navColor, setNavColor] = useState(false);

  const heroLinks = document.querySelectorAll(".navigation__link");
  const activeSkillsLink = document.querySelector(".navigation__link--skills");
  const activePortofolioLink = document.querySelector(".navigation__link--portofolio");
  const activeHomeLink = document.querySelector(".navigation__link--home");
  const activeAboutMeLink = document.querySelector(".navigation__link--about");
  const activeContactLink = document.querySelector(".navigation__link--contact");

  if (isSkillsVisible) {
    activeSkillsLink?.classList.add("active-link");
  } else {
    activeSkillsLink?.classList.remove("active-link");
  }

  if (isPortofolioVisible) {
    activePortofolioLink?.classList.add("active-link");
  } else {
    activePortofolioLink?.classList.remove("active-link");
  }

  if (isHomeVisible) {
    activeHomeLink?.classList.add("active-link");
  } else {
    activeHomeLink?.classList.remove("active-link");
  }

  if (isAboutMeVisible) {
    activeAboutMeLink?.classList.add("active-link");
  } else {
    activeAboutMeLink?.classList.remove("active-link");
  }

  if (isFooterVisible) {
    activeContactLink?.classList.add("active-link");
  } else {
    activeContactLink?.classList.remove("active-link");
  }

  const addActiveLink = (e) => {
    heroLinks.forEach((el) => {
      el.classList.remove("active-link");
    });
    e.classList.add("active-link");
  };

  const changeNavColor = () => {
    if (window.scrollY > 800) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  const scrollInViewHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickBurger = () => {
    if (showMobileNav == false) {
      setShowMobileNav(true);
    } else {
      setShowMobileNav(false);
    }
    const burgerButtonContainer = document.querySelector(".burger-button-container");
    const topLine = document.querySelector(".top-line");
    const middleLine = document.querySelector(".middle-line");
    const bottomLine = document.querySelector(".bottom-line");

    burgerButtonContainer.classList.toggle("burger-button-container-mod");
    topLine.classList.toggle("top-line-mod");
    middleLine.classList.toggle("middle-line-mod");
    bottomLine.classList.toggle("bottom-line-mod");
  };

  return (
    <nav className={navColor ? "navigation-container navigation-container-solid-color" : "navigation-container"}>
      {showMobileNav ? (
        <MobileNav
          navColor={navColor}
          setShowMobileNav={setShowMobileNav}
          scrollInViewHome={scrollInViewHome}
          scrollToSkills={scrollToSkills}
          scrollToPortofolio={scrollToPortofolio}
          scrollToAboutMe={scrollToAboutMe}
          scrollToFooter={scrollToFooter}
          setShowModal={setShowModal}
        />
      ) : null}
      <div className="navigation-logo">
        <FaAtom />
      </div>
      <div className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              onClick={(e) => {
                addActiveLink(e.target);
                scrollInViewHome();
              }}
              className="navigation__link navigation__link--home"
            >
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={(e) => {
                addActiveLink(e.target);
                scrollToSkills();
              }}
              className="navigation__link navigation__link--skills"
            >
              Skills
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={(e) => {
                addActiveLink(e.target);
                scrollToPortofolio();
              }}
              className="navigation__link navigation__link--portofolio"
            >
              Portofolio
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={(e) => {
                addActiveLink(e.target);
                scrollToAboutMe();
              }}
              className="navigation__link navigation__link--about"
            >
              About
            </a>
          </li>
          <li className="navigation__item">
            <a
              onClick={(e) => {
                addActiveLink(e.target);
                scrollToFooter();
              }}
              className="navigation__link navigation__link--contact"
            >
              Contact
            </a>
          </li>

          <li className="navigation__item navigation__item-button">
            <a className="navigation__link navigation__link-button" onClick={handleModalState}>
              Hire Me
            </a>
          </li>
        </ul>
        <div className="navigation-icons">
          <ul className="navigation-icons__list">
            <li className="navigation-icons__item">
              <a className="navigation-icons__link" href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="navigation-icons__item">
              <a className="navigation-icons__link" href="https://github.com/manta-lucian" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className="navigation-icons__item">
              <a className="navigation-icons__link" href="https://www.linkedin.com/in/lucian-manta-34a75224b/" target="_blank">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigation-icons-second navigation-icons">
        <ul className="navigation-icons__list">
          <li className="navigation-icons__item">
            <a className="navigation-icons__link" href="#">
              <FaFacebook />
            </a>
          </li>
          <li className="navigation-icons__item">
            <a className="navigation-icons__link" href="https://github.com/manta-lucian" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className="navigation-icons__item">
            <a className="navigation-icons__link" href="https://www.linkedin.com/in/lucian-manta-34a75224b/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="navigation-burger">
        <BurgerButton handleClickBurger={handleClickBurger} />
      </div>
    </nav>
  );
});

export default Navigation;

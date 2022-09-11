import "./App.css";
import { useRef, useState } from "react";
import Layout from "./Layout/Layout";
import Hero from "./Hero/Hero";
import Navigation from "./Navigation/Navigation";
import HeroContent from "./Hero/HeroContent";
import Skills from "./Skills/Skills";
import ScrollToTop from "./Navigation/ScrollToTop";
import Portofolio from "./Portofolio/Portofolio";
import { useInView } from "react-intersection-observer";
import AboutMe from "./AboutMe/AboutMe";
import Passions from "./AboutMe/Passions";
import Footer from "./Footer/Footer";
import ModalForm from "./Modals/ModalForm";

function App() {
  const skillsRef = useRef(null);
  const portoRef = useRef(null);
  const aboutMeRef = useRef(null);
  const footerRef = useRef(null);
  const { ref: skillsActiveRef, inView: isSkillsVisible } = useInView();
  const { ref: homeActiveRef, inView: isHomeVisible } = useInView();
  const { ref: portofolioActiveRef, inView: isPortofolioVisible } = useInView();
  const { ref: aboutMeActiveRef, inView: isAboutMeVisible } = useInView();
  const { ref: footerActiveRef, inView: isFooterVisible } = useInView();
  const [showModal, setShowModal] = useState(false);

  const formCont = document.querySelector(".form-container");

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };
  const scrollToPortofolio = () => {
    portoRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleModalState = () => {
    if (!showModal) {
      setShowModal(true);
      formCont.classList.remove("display-none");
      formCont.classList.add("display-flex");
    } else {
      formCont.classList.remove("display-flex");
      setTimeout(() => {
        formCont.classList.add("display-none");
      }, 500);
      setShowModal(false);
    }
  };

  const handleModalStateOnKeyDown = (e) => {
    if (e.key == "Escape") {
      formCont.classList.remove("display-flex");
      setTimeout(() => {
        formCont.classList.add("display-none");
      }, 500);
      setShowModal(false);
    }
  };

  return (
    <Layout>
      <Hero ref={homeActiveRef}>
        <Navigation
          isHomeVisible={isHomeVisible}
          isSkillsVisible={isSkillsVisible}
          scrollToSkills={scrollToSkills}
          isPortofolioVisible={isPortofolioVisible}
          scrollToPortofolio={scrollToPortofolio}
          isAboutMeVisible={isAboutMeVisible}
          scrollToAboutMe={scrollToAboutMe}
          isFooterVisible={isFooterVisible}
          scrollToFooter={scrollToFooter}
          handleModalState={handleModalState}
          setShowModal={setShowModal}
        ></Navigation>
        <HeroContent></HeroContent>
      </Hero>
      <Skills ref={{ ref1: skillsRef, ref2: skillsActiveRef }}></Skills>
      <Portofolio ref={{ ref1: portoRef, ref2: portofolioActiveRef }}></Portofolio>
      <AboutMe ref={{ ref1: aboutMeRef, ref2: aboutMeActiveRef }}></AboutMe>
      <Passions></Passions>
      <Footer
        ref={{ ref1: footerRef, ref2: footerActiveRef }}
        scrollToAboutMe={scrollToAboutMe}
        scrollToPortofolio={scrollToPortofolio}
        scrollToSkills={scrollToSkills}
        scrollToHome={scrollToHome}
        handleModalState={handleModalState}
      ></Footer>
      <ModalForm handleModalState={handleModalState} handleModalStateOnKeyDown={handleModalStateOnKeyDown} />
      <ScrollToTop />
    </Layout>
  );
}

export default App;

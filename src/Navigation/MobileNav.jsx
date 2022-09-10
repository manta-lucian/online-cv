function MobileNav(props) {
  const {
    scrollToSkills,
    setShowMobileNav,
    navColor,
    scrollInViewHome,
    scrollToPortofolio,
    scrollToAboutMe,
    scrollToFooter,
    setShowModal,
  } = props;
  const burgerButtonContainer = document.querySelector(".burger-button-container");
  const topLine = document.querySelector(".top-line");
  const middleLine = document.querySelector(".middle-line");
  const bottomLine = document.querySelector(".bottom-line");

  function toggleClassesMobile() {
    burgerButtonContainer.classList.toggle("burger-button-container-mod");
    topLine.classList.toggle("top-line-mod");
    middleLine.classList.toggle("middle-line-mod");
    bottomLine.classList.toggle("bottom-line-mod");
  }

  return (
    <div className={navColor ? "mobile-nav-container navigation-container-solid-color" : "mobile-nav-container"}>
      <div className="mobile-nav">
        <ul className="mobile-nav__list">
          <li className="mobile-nav__item">
            <a
              onClick={() => {
                setShowMobileNav(false);
                toggleClassesMobile();
                scrollInViewHome();
              }}
              className="mobile-nav__link"
            >
              Home
            </a>
          </li>
          <li className="mobile-nav__item">
            <a
              onClick={() => {
                setShowMobileNav(false);
                toggleClassesMobile();
                scrollToSkills();
              }}
              className="mobile-nav__link"
            >
              Skills
            </a>
          </li>
          <li className="mobile-nav__item">
            <a
              onClick={() => {
                setShowMobileNav(false);
                toggleClassesMobile();
                scrollToPortofolio();
              }}
              className="mobile-nav__link"
            >
              Portofolio
            </a>
          </li>
          <li className="mobile-nav__item">
            <a
              onClick={() => {
                setShowMobileNav(false);
                toggleClassesMobile();
                scrollToAboutMe();
              }}
              className="mobile-nav__link"
            >
              About
            </a>
          </li>
          <li className="mobile-nav__item">
            <a
              onClick={() => {
                setShowMobileNav(false);
                toggleClassesMobile();
                scrollToFooter();
              }}
              className="mobile-nav__link"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => {
            setShowMobileNav(false);
            toggleClassesMobile();
            setShowModal(true);
          }}
          className="button call-to-action-button button-resume"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default MobileNav;

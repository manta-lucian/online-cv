import Typed from "react-typed";

function HeroContent() {
  function scrollToFirstSection() {
    window.scrollTo({
      top: 850,
      behavior: "smooth",
    });
  }

  return (
    <div className="hero-content-container">
      <div className="hero-content">
        <h2 className="hero-content__greet">Hello and Welcome!</h2>
        <h1 className="hero-content__introduction">
          My name is{" "}
          <span className="hero-content__introduction-name">
            <Typed strings={["Lucian", "Ionut"]} typeSpeed={100} backSpeed={50} backDelay={5000} loop />
            Manta
          </span>
        </h1>
        <div className="hero-content-paragraph-container">
          <p className="hero-content__information">I'm a front end developer striving for the best because im a perfectionist</p>
          <p className="hero-content__information">Here you can find just who I am</p>
        </div>
      </div>
      <div className="hero-content-button-container">
        <button onClick={scrollToFirstSection} className="button-read-more button">
          Read More
        </button>
        <form className="resume-button" method="get" action="resume/resume-manta.pdf" target="_blank">
          <button type="submit" className="call-to-action-button button-resume button">
            Resume
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroContent;

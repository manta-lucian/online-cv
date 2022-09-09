function HeroContent() {
  function scrollToFirstSection() {
    window.scrollTo({
      top: 990,
      behavior: "smooth",
    });
  }

  return (
    <div className="hero-content-container">
      <div className="hero-content">
        <h2 className="hero-content__greet">Hello and Welcome !</h2>
        <h1 className="hero-content__introduction">
          My name is <span className="hero-content__introduction-name">Lucian - Manta</span>
        </h1>
        <div className="hero-content-paragraph-container">
          <p className="hero-content__information">Here you can find all the information about me...</p>
          <p className="hero-content__information">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur eligendi vero quam
          </p>
        </div>
      </div>
      <div className="hero-content-button-container">
        <button onClick={scrollToFirstSection} className="button-read-more button">
          Read More
        </button>
        <button className="call-to-action-button button-resume button">Resume</button>
      </div>
    </div>
  );
}

export default HeroContent;
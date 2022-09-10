import Gaming from "./Gaming";
import Travel from "./Travel";
import Music from "./Music";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Passions = (props) => {
  const windowHeight = window.innerHeight;
  const { ref: passionSection, inView: isPassionSectionInView } = useInView({
    rootMargin: `0px 0px ${windowHeight > 800 ? "-800px" : windowHeight > 700 ? "-700px" : windowHeight > 600 ? "-600px" : "-500px"} 0px`,
  });

  const passionCont = document.querySelector(".passion-container");

  if (isPassionSectionInView) {
    passionCont.classList.remove("go-up");
  }

  const [gaming, setGaming] = useState(true);
  const [travel, setTravel] = useState(false);
  const [music, setMusic] = useState(false);

  const handleGaming = () => {
    if (!gaming) {
      setGaming(true);
      setMusic(false);
      setTravel(false);
    }
  };
  const handleTravel = () => {
    if (!travel) {
      setTravel(true);
      setGaming(false);
      setMusic(false);
    }
  };
  const handleMusic = () => {
    if (!music) {
      setMusic(true);
      setGaming(false);
      setTravel(false);
    }
  };

  return (
    <div className="passion-container go-up" ref={passionSection}>
      {props.children}
      <div className="passion-btn-wrap">
        <button onClick={handleGaming} className="button passion-btn passion-gaming-button">
          gaming
        </button>
        <button onClick={handleTravel} className="button passion-btn passion-travel-button">
          travel
        </button>
        <button onClick={handleMusic} className="button passion-btn passion-music-button">
          music
        </button>
      </div>
      {gaming ? <Gaming /> : null}
      {travel ? <Travel /> : null}
      {music ? <Music /> : null}
    </div>
  );
};

export default Passions;

import Gaming from "./Gaming";
import Travel from "./Travel";
import Music from "./Music";
import { useState } from "react";

const Passions = (props) => {
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
    <div className="passion-container">
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

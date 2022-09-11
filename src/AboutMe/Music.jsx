import musicData from "../JsonData/Music.json";

const Music = (props) => {
  return (
    <div className="gaming-container">
      <div className="gaming-p-wrap">
        <p className="gaming-description">There is no time in a day that i don't listen to a masterpiece made by...</p>
      </div>
      <div className="gaming-gallery-container">
        {musicData.map((el) => {
          return (
            <div key={el.id} className="gaming-card box-shadow">
              <img src={el.image} alt="somegameinfo" />
              <div className="porto-card-hover">
                <div className="porto-card-hover__title">{el.title}</div>
                <a href={el.url} className="see-more" target="_blank">
                  Visit channel
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Music;

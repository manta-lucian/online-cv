import travelData from "../JsonData/Travel.json";

const Travel = (props) => {
  return (
    <div className="gaming-container">
      <div className="gaming-p-wrap">
        <p className="gaming-description">When possible i like to travel. A break from reality is always healthy.</p>
      </div>
      <div className="gaming-gallery-container">
        {travelData.map((el) => {
          return (
            <div key={el.id} className="gaming-card box-shadow">
              <img src={el.image} alt="somegameinfo" />
              <div className="porto-card-hover">
                <div className="porto-card-hover__title">{el.title}</div>
                <a href={el.url} className="see-more" target="_blank">
                  See Wiki
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Travel;

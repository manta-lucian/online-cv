import gamingData from "../JsonData/GamingData.json";

const Gaming = (props) => {
  return (
    <div className="gaming-container">
      <div className="gaming-p-wrap">
        <p className="gaming-description">
          I like anything that tests the mind and also these games that require some degree of game sense and skill in general.
        </p>
        <p className="">I hate luck based games but play them ocasionally with friends and family for entertainment.</p>
      </div>
      <div className="gaming-gallery-container">
        {gamingData.map((el) => {
          return (
            <div key={el.id} className="gaming-card box-shadow">
              <img src={el.image} alt="somegameinfo" />
              <div className="porto-card-hover">
                <div className="porto-card-hover__title">{el.title}</div>
                <button className="see-more">See more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gaming;

import projects from "../JsonData/PortofolioData.json";
import { useState, useEffect } from "react";
import React from "react";

const Portofolio = React.forwardRef((props, ref) => {
  const [project, setProject] = useState(projects);

  const { ref1, ref2 } = ref;

  return (
    <div className="porto-container">
      <div ref={ref1} className="helper-div"></div>
      <div ref={ref2} className="helper-div helper-div-portofolio"></div>
      <div className="porto-head">
        <div className="porto-head__title">
          <h2>Portofolio</h2>
        </div>
        <div className="porto-head__description">
          <p>
            Here you will a see a set of projects that i have done along my journey of learning all the concepts listed above. The
            complexity of these projects have a wide range which starts from the very basics and progress all the way to advanced. <br />
            <br />
            They were coded along the way with the creator of the courses "Jonas Schmedtmann" and afterwards practiced them alone once more.
          </p>
          <br />
          <p>
            This gallery also contains homeworks given by &nbsp; "The informal school of IT" &nbsp; which some of them were actually
            challenging.
          </p>
        </div>
      </div>
      <div className="porto-gallery-container">
        {project.map((el) => {
          return (
            <div key={el.id} className="porto-card box-shadow">
              <img src={el.image} alt="project img" />
              <div className="porto-card-hover">
                <div className="porto-card-hover__title">{el.title}</div>
                <a href={el.url} className="porto-card-hover__url">
                  Go to project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Portofolio;

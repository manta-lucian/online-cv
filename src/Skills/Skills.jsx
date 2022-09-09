import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import React from "react";

const Skills = React.forwardRef((props, ref) => {
  const { ref1, ref2 } = ref;
  return (
    <div className="skills-container">
      <div ref={ref1} className="helper-div"></div>
      <div ref={ref2} className="helper-div helper-div-skills"></div>
      <div className="skills-head-title">Skills</div>
      <div className="skill-card-container">
        <div className="skill-card-left-item">
          <div className="skill-icon">
            <img className="skill-icon__icon" src="assets/src/imgs/html5-icon.png" alt="mata" />
          </div>
          <div className="skill-star">
            <ul className="skill-star__list">
              <li className="skill-star__item skill-star__item--1">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--2">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--3">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--4">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--5">
                <FaStar />
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-card-right-item">
          <div className="skill-card-right-item__title">HyperText Markup Language</div>
          <p className="skill-card-right-item__description">
            Is markup language for the structure and presentation of World Wide Web contents. HTML5 supports the traditional HTML and
            XHTML-style syntax and other new features in its markup, New APIs, XHTML and error handling.
          </p>
        </div>
      </div>

      <div className="skill-card-container skill-card-container-reverse">
        <div className="skill-card-right-item">
          <div className="skill-card-right-item__title">Cascading Style Sheets Level 3</div>
          <p className="skill-card-right-item__description">
            Is the iteration of the CSS standard used in the styling and formatting of Web pages. CSS3 incorporates the CSS2 standard with
            some changes and improvements.
          </p>
        </div>
        <div className="skill-card-left-item skill-card-left-item-reverse">
          <div className="skill-icon">
            <img className="skill-icon__icon" src="assets/src/imgs/css3-icon.png" alt="mata" />
          </div>
          <div className="skill-star">
            <ul className="skill-star__list">
              <li className="skill-star__item skill-star__item--1">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--2">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--3">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--4">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--5">
                <FaStarHalfAlt />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skill-card-container">
        <div className="skill-card-left-item">
          <div className="skill-icon">
            <img className="skill-icon__icon" src="assets/src/imgs/sass-icon.png" alt="mata" />
          </div>
          <div className="skill-star">
            <ul className="skill-star__list">
              <li className="skill-star__item skill-star__item--1">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--2">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--3">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--4">
                <FaStarHalfAlt />
              </li>
              <li className="skill-star__item">
                <FaRegStar />
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-card-right-item">
          <div className="skill-card-right-item__title">Syntactically awesome style sheets</div>
          <p className="skill-card-right-item__description">
            Is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to
            keep things organised and allows you to create style sheets faster.
          </p>
        </div>
      </div>

      <div className="skill-card-container skill-card-container-reverse">
        <div className="skill-card-right-item">
          <div className="skill-card-right-item__title">JavaScript</div>
          <p className="skill-card-right-item__description">
            Is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It
            allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.
          </p>
        </div>
        <div className="skill-card-left-item skill-card-left-item-reverse">
          <div className="skill-icon">
            <img className="skill-icon__icon" src="assets/src/imgs/javaScript-icon.png" alt="mata" />
          </div>
          <div className="skill-star">
            <ul className="skill-star__list">
              <li className="skill-star__item skill-star__item--1">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--2">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--3">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--4">
                <FaStarHalfAlt />
              </li>
              <li className="skill-star__item">
                <FaRegStar />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skill-card-container">
        <div className="skill-card-left-item">
          <div className="skill-icon">
            <img className="skill-icon__icon" src="assets/src/imgs/reactJS-icon.png" alt="mata" />
          </div>
          <div className="skill-star">
            <ul className="skill-star__list">
              <li className="skill-star__item skill-star__item--1">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--2">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--3">
                <FaStar />
              </li>
              <li className="skill-star__item">
                <FaRegStar />
              </li>
              <li className="skill-star__item">
                <FaRegStar />
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-card-right-item">
          <div className="skill-card-right-item__title">React</div>
          <p className="skill-card-right-item__description">
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will
            efficiently update and render just the right components when your data changes.
          </p>
        </div>
      </div>

      <div className="skill-card-container skill-card-container-reverse">
        <div className="skill-card-right-item">
          <div className="skill-card-right-item__title">WordPress</div>
          <p className="skill-card-right-item__description">
            Is a popular open source blog platform and content manager (CMS). Based on PHP and MySQL, WordPress allows users to create
            sophisticated, professional-looking websites and blogs.
          </p>
        </div>
        <div className="skill-card-left-item skill-card-left-item-reverse">
          <div className="skill-icon">
            <img className="skill-icon__icon" src="assets/src/imgs/wordpress-icon.png" alt="mata" />
          </div>
          <div className="skill-star">
            <ul className="skill-star__list">
              <li className="skill-star__item skill-star__item--1">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--2">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--3">
                <FaStar />
              </li>
              <li className="skill-star__item">
                <FaRegStar />
              </li>
              <li className="skill-star__item">
                <FaRegStar />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skill-card-container margin-bottom-big">
        <div className="skill-card-left-item">
          <div className="skill-icon">
            <img className="skill-icon__icon" src="assets/src/imgs/Git-icon.png" alt="mata" />
          </div>
          <div className="skill-star">
            <ul className="skill-star__list">
              <li className="skill-star__item skill-star__item--1">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--2">
                <FaStar />
              </li>
              <li className="skill-star__item skill-star__item--3">
                <FaStar />
              </li>
              <li className="skill-star__item">
                <FaRegStar />
              </li>
              <li className="skill-star__item">
                <FaRegStar />
              </li>
            </ul>
          </div>
        </div>
        <div className="skill-card-right-item">
          <div className="skill-card-right-item__title">Git</div>
          <p className="skill-card-right-item__description">
            Is a free and open source software for distributed version control: tracking changes in any set of files, usually used for
            coordinating work among programmers collaboratively developing source code during software development.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Skills;

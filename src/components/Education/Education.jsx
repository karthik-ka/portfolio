import "./Education.scss";
import Qualification from "./Qualification";

const Education = () => {
  return (
    <div className="education__section section" id="qualification">
      <h1 className="section__title">Qualification</h1>
      <span className="section__subtitle">My personal journy</span>

      <div className="qualification__container container">
        <div className="qualification__tab">
          <div className="qualification__button"><i className="uil uil-graduation-cap icon" /> <span className="text">Education</span></div>
        </div>
        <Qualification />
      </div>
    </div>
  );
};

export default Education;

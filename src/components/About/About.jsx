import "./About.scss"
import Info from "./Info"
const About = () => {
  return (
    <section className="about__section section">
      <h1 className="section__title">About Me</h1>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container grid">
        <div className="about__img"></div>
        <Info />
      </div>
    </section>
  )
}

export default About

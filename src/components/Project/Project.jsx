import "./Project.scss"
import Works from "./Works"

const Project = () => {
  return (
    <div className="project__section section" id="project">
        <h1 className="section__title">Projects</h1>
        <span className="section__subtitle">My works</span>
        <Works />
    </div>
  )
}

export default Project
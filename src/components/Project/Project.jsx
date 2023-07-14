import "./Project.scss"
import Works from "./Works"

import {useEffect} from "react"
import AOS from "aos";
import 'aos/dist/aos.css';

  const Project = () => {

    useEffect(() => {
     AOS.init();
    }, [])
    
  return (
    <div className="project__section section" id="project" data-aos="fade-up">
        <h1 className="section__title">Projects</h1>
        <span className="section__subtitle">My works</span>
        <Works />
    </div>
  )
}

export default Project
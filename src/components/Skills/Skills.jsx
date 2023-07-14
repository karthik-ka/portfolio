import Backend from "./Backend"
import Frontend from "./Frontend"
import Others from "./Others"
import "./Skills.scss"

import {useEffect} from "react"
import AOS from "aos";
import 'aos/dist/aos.css';


const Skills = () => {

    useEffect(() => {
     AOS.init();
    }, [])

  return (
    <div className="skill__section section" id="skill" data-aos="fade-up">
        <h1 className="section__title">Skills</h1>
        <span className="section__subtitle">My technical level</span>
        <div className="skill__container container">
            <div className="skills__content grid">
                <Frontend />
                <Backend />
                <Others />
            </div>
        </div>
    </div>
  )
}

export default Skills
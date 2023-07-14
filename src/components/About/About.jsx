import Info from "./Info"
import "./About.scss"
import Rotate from "../../assets/text.png";

import {useEffect} from "react"
import AOS from "aos";
import 'aos/dist/aos.css';


const About = () => {

    useEffect(() => {
     AOS.init();
    }, [])
    

  return (
    <section className="about__section section" id="about" data-aos="fade-up">
      <h1 className="section__title">About Me</h1>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container grid ">
        <div className="about__img" data-aos="fade-up">
          <span className="stamp" >
            <img src={Rotate} alt="" className="stamp-text"/>
            {/* <img src={emoji} alt="emoji" className="stamp-img"/> */}
            <img src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966" alt="emoji" className="stamp-img"/>
          </span>
        </div>
        <Info />
      </div>
    </section>
  )
}

export default About

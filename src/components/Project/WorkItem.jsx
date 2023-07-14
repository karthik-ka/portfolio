/* eslint-disable react/prop-types */
import {useEffect} from "react"
import AOS from "aos";
import 'aos/dist/aos.css';

  const WorkItem = ({item}) => {

    useEffect(() => {
     AOS.init();
    }, [])

  return (
    <div className="project__content" data-aos="fade-up">
        <div className="content-card" key={item.id}>
            <img src={item.image} alt="" className="card-image"/>
            <h3 className="card-title">{item.title} </h3>
            <a href={item.link} className="card-subtitle">Live demo<i className="uil uil-arrow-right arrow-icon" /></a>
        </div>
    </div>
  )
}

export default WorkItem
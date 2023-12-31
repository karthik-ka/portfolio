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
              <div className="flex card">
                {item.link && <a href={item.link} className="card-subtitle">Live demo</a> }
                <a href={item.gitLink} className="card-subtitle">GitHub Repo</a>
              </div>
        </div>
    </div>
  )
}

export default WorkItem
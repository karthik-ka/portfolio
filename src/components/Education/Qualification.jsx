
import {useEffect} from "react"
import AOS from "aos";
import 'aos/dist/aos.css';



const Qualification = () => {

    useEffect(() => {
     AOS.init();
    }, [])
    

  return (
    <div className="container-box" data-aos="fade-up">
       <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
             <h3>Bachelor of Computer Application</h3>
             <p> 2020 - 2023 <i className="uil uil-calendar-alt" /></p>
          </div>
       </div>
    
       <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
             <h3>Higher Secondary</h3>
             <p> <i className="uil uil-calendar-alt" />2018 - 2020</p>
          </div>
       </div>
    
       <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
             <h3>High School</h3>
             <p>2018 <i className="uil uil-calendar-alt" /></p>
          </div>
       </div>
    </div>
  );
};

export default Qualification;

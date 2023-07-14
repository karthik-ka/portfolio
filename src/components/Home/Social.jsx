import {useEffect} from "react"
import AOS from "aos";
import 'aos/dist/aos.css';


  const Social = () => {

    useEffect(() => {
     AOS.init();
    }, [])
  return (
    <div className="social-section" data-aos="fade-right">
      <a href="https://www.linkedin.com/in/karthik-k-a-674451278/"><i className="social__icon uil uil-linkedin" /></a>
      <a href="https://github.com/karthik-ka"><i className="social__icon uil uil-github" /></a>
      <a href="https://www.instagram.com/krthik.___/"><i className="social__icon uil uil-instagram" /></a>
    </div>
  )
}

export default Social

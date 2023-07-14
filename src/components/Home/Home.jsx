import "./Home.scss";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

import {useEffect} from "react"
import AOS from "aos";
import 'aos/dist/aos.css';

  const Home = () => {

    useEffect(() => {
     AOS.init();
    }, [])


  return (
    <section className="home__section" id="home">
      <div className="home__container container">
        <div className="home__content grid" >
          <Social />
          <div className="home__img" data-aos="fade-up"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

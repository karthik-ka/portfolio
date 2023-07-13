import { useState } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className="header">
      <div className="nav container">
        <a href="index.html" className="nav__logo">
          Karthik
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="nav__icon uil uil-estate " />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="nav__icon uil uil-user" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skill" className="nav__link">
                <i className="nav__icon uil uil-file-alt" />
                Skill
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="nav__icon uil uil-bag" />
                Services
              </a>
            </li> */}
            <li className="nav__item">
              <a href="#project" className="nav__link">
                <i className="nav__icon uil uil-scenery" />
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="nav__icon uil uil-message" />
                Contact
              </a>
            </li>
          </ul>
            <i className="nav__close uil uil-multiply" onClick={()=>setToggle(!toggle)}/>
        </div>
        <div className="nav__toggle" onClick={()=>setToggle(!toggle)}>
          <i className="uil uil-apps" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

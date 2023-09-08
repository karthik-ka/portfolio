import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer__section">
      <div className="footer__container container">
        <h1 className="footer__title">Karthik</h1>
        <ul className="flex footer-link">
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#project"><li>Projects</li></a>
        </ul>
        <span className="flex footer-social">
        <a href="https://www.instagram.com/krthik.___/"><i className="uil uil-instagram social-icon" /></a>
        <a href="https://wa.me/+918113068690"><i className="uil uil-whatsapp social-icon" /></a>
        <a href="https://www.linkedin.com/in/karthik-k-a-674451278/"><i className="uil uil-linkedin-alt social-icon" /></a>
        <a href="https://github.com/karthik-ka"><i className="uil uil-github-alt social-icon" /></a>
        <a href="https://twitter.com/krthik__"><i className="uil uil-twitter social-icon" /></a>
        </span>
        <span className="copyright">Copyright © 2023. All rights are reserved</span>
        
      </div>
    </div>
  );
};

export default Footer;

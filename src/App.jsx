import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import Scrollbar from "./components/Scrollbar/Scrollbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
      <Footer />
      <Scrollbar />
    </>
  );
}

export default App;

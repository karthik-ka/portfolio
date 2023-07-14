// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Scrollbar.scss"


const Scrollbar = () => {
    window.addEventListener("scroll", ()=>{
        const scrollUp = document.querySelector(".scrollup");
        if (scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
        }else{
            scrollUp.classList.remove("show-scroll");
        }
    })
  return (
    <div className="scrollup">
        <a href="#"><i className="uil uil-arrow-up scrollbar-icon" /></a>
    </div>
  )
}

export default Scrollbar
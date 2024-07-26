import styles from "../styles/Details.module.css"
import codeImg from "../assets/About.ts.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


function Details() {
  useGSAP(()=>{
    gsap.from("#about", {
      scale: 0,
      scrollTrigger:{
        trigger: "#details",
        scroller: "body",
        start: "top 60%",
        end: "top 5%",
        scrub: 3,
      }
    })
  })
  return (
    <div id='details' className={`${styles.details} w-full h-full absolute -bottom-full flex`}>
      <img id="about" src={codeImg} alt="" className="lg:scale-90 lg:w-auto lg:h-auto sm:w-96 sm:h-60 object-contain"/>
      <a href={"https://drive.google.com/file/d/1YaUWbjf3JD7Ire3xP6DqUOy4gj6HxUaH/view?usp=sharing"} target="_blank" rel="noopener noreferrer">
        <button id="button" className="fira-code-regular w-52 h-14 bg-orange-500 rounded-full text-white cursor-pointer absolute top-1/2 right-96 shadow-md shadow-neutral-300 transform transition-transform duration-300 hover:scale-110 ease-in-out">
          View Resume
        </button>
      </a>
      
    </div>
  )
}

export default Details

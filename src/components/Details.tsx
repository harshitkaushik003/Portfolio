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
      <img id="about" src={codeImg} alt="" className="scale-90"/>
      <button id="button" className="fira-code-regular w-60 h-16 bg-orange-500 rounded-full text-white cursor-pointer absolute top-1/2 right-96 shadow-md shadow-neutral-300 transform transition-transform duration-300 hover:scale-110 ease-in-out">View Resume</button>
    </div>
  )
}

export default Details

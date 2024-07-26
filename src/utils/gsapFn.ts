import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export function rise(query_for_gsap: string){
    gsap.from(query_for_gsap, {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.4
    })
}


export function headerAnimation(query1: string, scroll1: string, query2: string, scroll2: string){
    const tl = gsap.timeline();

    // Add the animations to the timeline
    tl.to(query1, {
        y: window.innerHeight + 200,
        x: window.innerWidth + 200,
        duration: 2 // or any duration you prefer
    });

    tl.to(query2, {
        top: 0,
        duration: 2 // or any duration you prefer
    });

    // Use ScrollTrigger to control the timeline
    ScrollTrigger.create({
        animation: tl,
        trigger: scroll1,
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    });

    ScrollTrigger.create({
        animation: tl,
        trigger: scroll2,
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        // scrub: 2,
        // pin: true
    });
}

export function fly(query_for_gsap: string, scroll_query: string){
    gsap.to(query_for_gsap, {
        y: window.innerHeight + 200,
        x: window.innerWidth + 200,
       scrollTrigger: {
        trigger: scroll_query,
        scroller: "body",
        markers:true,
        start: "top 0%",
        // end: "top -100%",
        scrub: 2,
        pin: true
       }
    })
}

export function drag(query_for_gsap: string, scroll_query: string): void {
    ScrollTrigger.matchMedia({
      // Desktop and larger screens
      "(min-width: 768px)": function() {
        gsap.to(query_for_gsap, {
          top: 0,
          scrollTrigger: {
            trigger: scroll_query,
            scroller: "body",
            start: "top 0%",
            end: "top -100%",
            markers:true,
            scrub: 2,
            pin: true
          }
        });
      },
  
      // Mobile screens
      "(max-width: 767px)": function() {
        gsap.to(query_for_gsap, {
          top: 0,
          scrollTrigger: {
            trigger: scroll_query,
            scroller: "body",
            start: "top 0%",
            end: "top -150%", // Adjust the end value for smaller screens
            markers: true,
            scrub: 2,
            pin: true,
            pinSpacing: true // No space is left for the pinned element
          }
        });
      }
    });
  }
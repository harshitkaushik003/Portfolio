import gsap from "gsap";

export function rise(query_for_gsap: string){
    gsap.from(query_for_gsap, {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.4
    })
}
import React, { useEffect, useState } from 'react'

import gsap from 'gsap'

import Banner from '../components/banner'
import Cases from '../components/cases'
import IntroOverlay from '../components/introOverlay'

const homeAnimation = (completeAnimation) => {
  const tl = gsap.timeline()

  // specific to this project, otherwise would use useRef
  // to avoid flashing animation when refreshing

  tl.from(".line span", 1.5, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3 // to delay
    }
  })
    .to(".overlay-top", 1.6, {
    height: 0,
    ease: "expo.inOut",
    stagger: 0.4,
  })
    .to(".overlay-bottom", 1.6, {
    width: 0,
    ease: "expo.inOut", 
    delay: -.8,
    stagger: {
      amount: 0.4,
    }
    })
    .to(".intro-overlay", 0, { css: { display: "none" } })
    .from(".case-image img", 1.6, {
    scale: 1.4,
    ease: "expo.inOut", 
    delay: -2,
    stagger: {
      amount: 0.4,
      },
    onComplete: completeAnimation //to change the state
})
}

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false)
  
  const completeAnimation = () => {
    setAnimationComplete(true)
  }

  useEffect(() => {    
    // on load timeline
   homeAnimation(completeAnimation)
  }, [])

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      
      <Banner />
      <Cases /> 
    </>
  )
}

export default Home

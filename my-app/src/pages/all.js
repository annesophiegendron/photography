import React from "react"
import { useState, useEffect, useRef, useLayoutEffect } from "react"

//assets
import { images } from "../assets/images-all.js"

//libraries
import { motion, useViewportScroll, useTransform } from "framer-motion"
import gsap from 'gsap'

//components
import SeeAllOverlay from '../components/seeAllOverlay'

const allAnimation = (completeAnimation) => {
  const tl = gsap.timeline()

  tl.from(".see-all-overlay", 0, {
    width: 0,
    ease: "expo.inOut",
    stagger: 0.4,
  })
    .to(".overlay-transition", 1.1, {
    height: 0,
    ease: "expo.inOut", 
    delay: .4,
    stagger: {
      amount: 0,
    }
    })
    .to(".see-all-overlay", 0, {
      css: { display: "none" },
    })
}

const ParallaxImage = ({ src, ...style }) => {
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()

  const x = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false
  })

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  return (
    <div ref={ref} className="image-container">
      <motion.div className="overlay" style={{ ...style, x }} />
      <img className="parallax-img" src={src} alt="" />
    </div>
  )
}

const All = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const completeAnimation = () => {
    setAnimationComplete(true)
  }
  useEffect(() => {    
   allAnimation(completeAnimation)
  }, [])

  return (
    <>
      {animationComplete === false ? <SeeAllOverlay /> : ""}
      <div className="all-wrapper">
        <div className="parallax-container">
          <SeeAllOverlay />

          <motion.div
            className="container-scrolldown"
            animate={{
              scale: [3, 2, 1.5, 1.5, 1],
              opacity: [0.2, 0.5, 1]
            }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
            }}
          >
            <p className="message">scroll down</p>
          </motion.div>

          {images.map(image => (
            <ParallaxImage key={image.src} {...image} />
          ))}
        </div>
      </div> 
    </>
  )
}

export default All 
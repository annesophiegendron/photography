import React from "react"
import { useState, useEffect } from "react"

//assets
import { images } from "../assets/images-all.js"

//libraries
import { motion, useTransform, useAnimation, AnimatePresence } from "framer-motion"
import gsap from 'gsap'

//components
import SeeAllOverlay from '../components/seeAllOverlay'

// scroll behavior
import { useInView } from "react-intersection-observer"

// Page opening transition
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

// Content animation
const Content = ({ src }) => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-400px" // the animation occurs with a small delay when scrolling
  })

    useEffect(() => {    
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
  
  return (
    <motion.div className="image-container">
      <motion.img
        className="content"
        src={src}
        alt=""
        whileHover={{
          scale: 1.1,
        }}
        transition={{ type: 'spring', stiffness: 20, velocity: 0.2 }}
        ref={contentRef}
        animate={animation}
        initial="hidden"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 300 }
        }}
      >
      </motion.img>
    </motion.div>
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
      <AnimatePresence>
        <div className="wrapper">
          <div className="sub-container">
            <SeeAllOverlay />
            <motion.div
              className="container-scrolldown"
              animate={{
                scale: [2, 1, 1.5, 1.5, 1],
                opacity: [0.2, 0.5, 1]
              }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
              }}
            >
              <p className="message">scroll</p>
            </motion.div>

            {images.map(image => (
              <div>
                <Content key={image.src} {...image} />
              </div>
            ))}   
          </div>
        </div> 
      </AnimatePresence>
    </>
  )
}

export default All 
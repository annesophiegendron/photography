import React from 'react'
import { useState, useEffect } from 'react'

// libraries
import gsap from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

// assets
import { images } from "../../assets/serie-page/image-data-serieThree"

//components
import SerieOverlay from '../../components/serieOverlay'

const serieAnimation = (completeAnimation) => {
  const tl = gsap.timeline()

  tl.from(".serie-overlay-container", 0, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
  })
    .to(".serie-transition", 0.9, {
      height: 0,
      ease: "expo.inOut",
      delay: .3,
      stagger: {
        amount: 0.4,
      }
    })
    .to(".serie-overlay-container", 0, {
      css: { display: "none" },
    })
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

export const SerieThree = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const completeAnimation = () => {
    setAnimationComplete(true)
  }
  useEffect(() => {    
   serieAnimation(completeAnimation)
  }, [])

return (
  <>
    {animationComplete === false ? <SerieOverlay /> : ""}

    <AnimatePresence initial={false} custom={direction}>
      <motion.div className="slider-container">
      <motion.img
        className="image-slider"
        key={page}
        src={images[imageIndex]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        whileTap={{ scale: 1.5 }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 200 },
          opacity: { duration: 0.7 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
        />
      </motion.div>
    </AnimatePresence>
    <div className="next" onClick={() => paginate(1)}>
      {"‣"}
    </div>
    <div className="prev" onClick={() => paginate(-1)}>
      {"‣"}
    </div>
  </>
)
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
return Math.abs(offset) * velocity;
}

export default SerieThree
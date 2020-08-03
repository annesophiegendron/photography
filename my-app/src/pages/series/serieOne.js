import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { images } from "../../assets/serieOne/image-data"


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
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

export const SerieOne = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

return (
  <>
    <AnimatePresence initial={false} custom={direction}>
      <motion.div className="slider-container">
      <img
        className="image-slider"
        key={page}
        src={images[imageIndex]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 200 },
          opacity: { duration: 0.4 }
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

/**
* Experimenting with distilling swipe offset and velocity into a single variable, so the
* less distance a user has swiped, the more velocity they need to register as a swipe.
* Should accomodate longer swipes and short flicks without having binary checks on
* just distance thresholds and velocity > 0.
*/
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
return Math.abs(offset) * velocity;
};

// const SerieOne = () => {
//   return (
//     <div className="page">
//       <div className="container"> 
//         <div className="row">
//           <img className="serie-img" src={require("../../assets/dad-and-son-beach.jpeg")} alt="dad and son on the beach"></img>
//           <img className="serie-img" src={require("../../assets/dad-and-son-beach.jpeg")} alt="dad and son on the beach"></img>
//         </div>
//       </div>
//     </div>
//   )
// }

export default SerieOne
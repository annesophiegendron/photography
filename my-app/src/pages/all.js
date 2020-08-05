// import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom'
// import {
//   useViewportScroll,
//   motion,
//   useTransform,
//   useMotionValue,
//   AnimatePresence
// } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const All = () => {
//   const { scrollY } = useViewportScroll()
//   const y1 = useTransform(scrollY, [100, 300], [0, 100])
//   const y2 = useTransform(scrollY, [0, 300], [0, -100])
//   const y3 = useTransform(scrollY, [0, -600], [0, 300])

//   const [ref, inView, entry] = useInView({
//     threshold: 0.5,
//     triggerOnce: true
//   })

//   console.log(entry)

//   const variants = {
//     visible: { opacity: 1, scale: 1, y: 0 },
//     hidden: {
//       opacity: 0,
//       scale: 0.65,
//       y: 50
//     }
//   }

//   return (
//     <>
//       <div className="parallax-container">

//         {/* part 1 */}
//         <AnimatePresence>
//           <motion.img
//             className="parallax-img" style={{ y: y1, x: -100 }}
//             src={require(`../assets/oskar_couch.jpeg`)} alt=""
//           />
//           <motion.img
//             className="parallax-img"
//             style={{ y: y2, x: 130 }}
//             src={require(`../assets/dad-and-son-beach.jpeg`)} alt=""
//           />
//           <div style={{ height: 300 }} />
//           <div style={{ position: 'fixed', top: 0, left: 0 }}>
//             {' '}
//           </div>
//         </AnimatePresence>
//         <AnimatePresence>
//           <motion.img
//             src={require(`../assets/beach.jpeg`)} alt=""
//             animate={inView ? 'visible' : 'hidden'}
//             variants={variants}
//             transition={{ duration: 2, ease: 'easeOut' }}
//             ref={ref}
//             className="fading-img-one"
//           />
//         </AnimatePresence>

//         {/* part 2 */}
//         <div style={{ height: 300 }} />
//         <div style={{ position: 'fixed', top: 0, left: 0 }}>
//             {' '}
//         </div>
//         <AnimatePresence initial={false}>
//           <motion.img
//             className="parallax-img" style={{ y: y1, x: -100 }}
//             src={require(`../assets/oskar_couch.jpeg`)} alt=""
//           />
//           <motion.img
//             className="parallax-img"
//             style={{ y: y3, x: 130 }}
//             src={require(`../assets/dad-and-son-beach.jpeg`)} alt=""
//           />
//           <div style={{ position: 'fixed', top: 0, left: 0 }}>
//             {' '}
//           </div>
//         </AnimatePresence>
//       </div>
//     </>
//   )
// }

// export default All

import React from "react"
import { useState, useRef, useLayoutEffect } from "react"
import { images } from "../assets/images-all.js"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const ParallaxImage = ({ src, ...style }) => {
  const [elementTop, setElementTop] = useState(0)
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false
  })

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
  }, [ref])

  return (
    <div ref={ref} className="image-container">
      <motion.div className="overlay" style={{ ...style, y }} />
      <img className="parallax-img" src={src} alt="" />
    </div>
  );
};

const All = () => (
  <div className="parallax-container">
    {images.map(image => (
      <ParallaxImage key={image.src} {...image} />
    ))}
  </div>
);

export default All
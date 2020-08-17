import React from "react"
import { useState, useEffect } from "react"

//assets
import { images } from "../assets/images-all.js"

//libraries
import { motion, useTransform, useAnimation } from "framer-motion"
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
// const Content = ({ src }) => {
//   return (
//     <div className="image-container">
//       <motion.img
//         className="parallax-img"
//         src={src}
//         alt=""
//         whileHover={{
//           scale: 1.3,
//           opacity: 1,
//         }}
//         transition={{ type: 'spring', stiffness: 80, velocity:0.9}}
//       >
//       </motion.img>
//     </div>
//   )
// }

const All = () => {
  // const [animationComplete, setAnimationComplete] = useState(false)
  // const completeAnimation = () => {
  //   setAnimationComplete(true)
  // }

  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-1000px", // the animation occurs with a small delay when scrolling
  })

  useEffect(() => {    
    // allAnimation(completeAnimation)
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <>
      {/* {animationComplete === false ? <SeeAllOverlay /> : ""} */}
      <motion.div
        className="all-wrapper" //HOMECONTENTSECTION
        ref={contentRef}
        animate={animation}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: {
            opacity: 0,
            y: 72,
          }
        }}
      >

        <div className="parallax-container"> 
            <div className="image-container">
            <img className="parallax-img" src="https://res.cloudinary.com/dc2tplzzd/image/upload/v1596638433/photography%20website/38CB9972-6034-48A9-B006-FCDCEA1B01E7_1_102_o_ixs0kq.jpg"></img>
            <img className="parallax-img" src="https://res.cloudinary.com/dc2tplzzd/image/upload/v1596638433/photography%20website/38CB9972-6034-48A9-B006-FCDCEA1B01E7_1_102_o_ixs0kq.jpg"></img>
            <img className="parallax-img" src="https://res.cloudinary.com/dc2tplzzd/image/upload/v1596638433/photography%20website/38CB9972-6034-48A9-B006-FCDCEA1B01E7_1_102_o_ixs0kq.jpg"></img>
            <img className="parallax-img" src="https://res.cloudinary.com/dc2tplzzd/image/upload/v1596638433/photography%20website/38CB9972-6034-48A9-B006-FCDCEA1B01E7_1_102_o_ixs0kq.jpg"></img>
            <img className="parallax-img" src="https://res.cloudinary.com/dc2tplzzd/image/upload/v1596638433/photography%20website/38CB9972-6034-48A9-B006-FCDCEA1B01E7_1_102_o_ixs0kq.jpg"></img>
            <img className="parallax-img" src="https://res.cloudinary.com/dc2tplzzd/image/upload/v1596638433/photography%20website/38CB9972-6034-48A9-B006-FCDCEA1B01E7_1_102_o_ixs0kq.jpg"></img>
            <img className="parallax-img" src="https://res.cloudinary.com/dc2tplzzd/image/upload/v1596638433/photography%20website/38CB9972-6034-48A9-B006-FCDCEA1B01E7_1_102_o_ixs0kq.jpg"></img>
            <img className="parallax-img" src="https://res.cloudinary.com/dc2tplzzd/image/upload/v1596638433/photography%20website/38CB9972-6034-48A9-B006-FCDCEA1B01E7_1_102_o_ixs0kq.jpg"></img>
            </div>
        </div>
    </motion.div>

      {/* <div className="all-wrapper">
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
            <p className="message">scroll</p>
          </motion.div>
          
          <motion.div className="test-container">
              {images.map(image => (
                <div>
                  <Content key={image.src} {...image} />
                </div>
              ))}   
            </motion.div>
        </div>
      </div>  */}
    </>
  )
}

export default All 
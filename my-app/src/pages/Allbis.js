import React from "react"
import { useState, useEffect } from "react"

//assets
import items from "../assets/images/items"

//libraries
import { motion, AnimatePresence, useCycle } from "framer-motion"
import gsap from 'gsap'
import { Image, Modal } from 'semantic-ui-react'

//components
import SeeAllOverlay from '../components/seeAllOverlay'

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

const Allbis = () => {
  // eslint-disable-next-line
  const [visible, onCycle] = useCycle(true, false)
  // modal image state
  const [open, setOpen] = useState(false)

  // opening page transition
  const [animationComplete, setAnimationComplete] = useState(false)
  const completeAnimation = () => {
    setAnimationComplete(true)
  }
  useEffect(() => {
    allAnimation(completeAnimation)
  }, [])

  // to change right big picture when hovering miniature
  const [revealImage, setrevealImage] = useState({
    show: false,
    image: "spoons.jpg",
    key: "2",
  })

  return (
    <>
      {animationComplete === false ? <SeeAllOverlay /> : ""}  {/* show page content when opening transition is over */}

      <AnimatePresence>
        <div className="wrapper">
          <SeeAllOverlay />

          {/* PAGE CONTENT */}
          <div className="grid">
            <div className="grid-container">
              <ul>
                {items.map(item => (
                  <motion.li
                    key={item.id}
                    onHoverStart={() => setrevealImage({
                      show: true,
                      image: item.image,
                      key: item.id,
                    })}
                    onHoverEnd={() => setrevealImage({
                      show: false,
                      image: item.image,
                      key: item.id,
                    })} 
                  >

                    {/* left side cards miniature */}
                    <Modal
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      open={open}
                      trigger={
                        <button className="modal-button">
                          <img key={item.id} src={require(`../assets/images/${item.image}`)} alt={item.name}></img>
                        </button>}
                    >

                      <Modal.Content>
                        <Image
                          src={require(`../assets/images/${revealImage.image}`)}
                          size='fullscreen'
                          key={revealImage.key}
                        />
                      </Modal.Content>

                      <Modal.Actions>
                        <button className="modal-close-button" onClick={() => setOpen(false)} positive>close</button>
                      </Modal.Actions>

                    </Modal>
                  </motion.li>
                ))}
              </ul>

              {/* right side picture */}
              <div className="image-cover">
                <motion.img
                  key={revealImage.key}
                  className="picture"
                  src={require(`../assets/images/${revealImage.image}`)}
                  initial={{ opacity: 0.8 }}
                  exit={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                </motion.img>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default Allbis 
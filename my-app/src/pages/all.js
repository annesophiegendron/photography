import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const All = () => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [100, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  console.log(entry)

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  }

  return (
    <>
      <div className="parallax-container">

        <motion.img
          className="parallax-img" style={{ y: y1, x: 50 }}
          src={require(`../assets/oskar_couch.jpeg`)} alt=""
        />
        <motion.img
          className="parallax-img"
          style={{ y: y2, x: 130, background: 'blue' }}
          src={require(`../assets/dad-and-son-beach.jpeg`)} alt=""
        />

        <div style={{ height: 300}} />
        <div style={{ position: 'fixed', top: 0, left: 0 }}>
          {' '}
        </div>
        <motion.img
          src={require(`../assets/beach.jpeg`)} alt=""
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 2, ease: 'easeOut' }}
          ref={ref}
          className="magic"
        />

      </div>
    </>
  )
}

export default All

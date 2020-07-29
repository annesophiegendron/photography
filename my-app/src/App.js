import React, { useEffect } from 'react'
import gsap from 'gsap'

// Styles
import './styles/App.scss'

// Components
import Header from './components/header'
import Banner from './components/banner'
import Cases from './components/cases'
import IntroOverlay from './components/introOverlay'

function App() {

  useEffect(() => {
    
    let vh = window.innerHeight * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    gsap.to("body", 0, { css: { visibility: "visible" } }) // to prevent the flashing to happen over the h2 text animation
    
    // timeline
    const tl = gsap.timeline()

    // specific to this project, otherwise would use useRef
    // to avoid flashing animation when refreshing

    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3 // to delay
      }
    }).to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    }).to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut", 
      delay: -.8,
      stagger: {
        amount: 0.4,
      }
})
  }, [])
  
  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  )
}

export default App

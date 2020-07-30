import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Route } from 'react-router-dom'

// Styles
import './styles/App.scss'

// Components
import Header from './components/header'
import Navigation from './components/navigation'

// Pages
import Home from './pages/home'
import Series from './pages/series'
import About from './pages/about'

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/series", name: "Series", Component: Series },
  { path: "/about", name: "About us", Component: About },
]

// to prevent the state to update every the use resize the viewport > otherwise could slow down the app creating a thousand objects
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {
  // to prevent the flashing to happen over the h2 text animation
  gsap.to("body", 0, { css: { visibility: "visible" } })
  
  // to capture the height and width and send it to the state
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
      
  useEffect(() => {
    // grab inner height of window for mobile reasons when dealing with vh
    // let vh = window.innerHeight * 0.01
    let vh = dimensions.height * 0.01 

    //Set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const HandleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000) // 1000 == represents the "ms" in the setTimeout 

    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  })

  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
            </Route>
        ))}
      </div>
      <Navigation />
    </>
  )
}

export default App

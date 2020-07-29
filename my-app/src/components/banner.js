import React from 'react'
import {ReactComponent as RightArrow} from '../assets/arrow-right.svg'

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating unique photographs</span>
            </div>
            <div className="line">
              <span>with a unique camera.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">See more <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner




import React from 'react'
import { ReactComponent as RightArrow } from '../assets/icons/arrow-right.svg'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>photography captures</span>
            </div>
          </h2>
          <div className="btn-row">
            <NavLink to="/all" exact>See all <RightArrow />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner




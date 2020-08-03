import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
              <ul className="nav-links">
              <li>
                <NavLink to="/serie001" exact>
                  Serie 001
                </NavLink>
              </li>
              <li>
                <NavLink to="/serie002" exact>
                  Serie 002
                </NavLink>
              </li>
              <li>
                <NavLink to="/serie003" exact>
                  Serie 003
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact>
                  About
                </NavLink>
              </li>
              </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">annesophie.gendron@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

import React from 'react'
import { NavLink } from 'react-router-dom'

import { motion } from 'framer-motion'

import { ReactComponent as SeriesNext } from '../assets/icons/arrow-right.svg'
import { ReactComponent as SeriesPrev } from '../assets/icons/arrow-left.svg'

const photoSeries = [
  {
    id: 1,
    subtitle: 'Serie',
    title: '001', 
    img: 'dad-and-son-beach',
    link: '/serie001',
  },
  {
    id: 2,
    subtitle: 'Serie',
    title: '002', 
    img: 'wood',
    link: '/serie002',
  },
  {
    id: 3,
    subtitle: 'Serie',
    title: '003', 
    img: 'beach',
    link: '/serie003',
  }
]

const transition = { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }

const Series = () => {

  return (
    <section className="series"> 
      
      <div className="container-fluid"> 
        <div className="row">
          {photoSeries.map((serieItem) => (
            <div className="serie" key={serieItem.id}>
              
              <NavLink to={`${serieItem.link}`} exact> 
                <motion.div
                  whileHover={{ scale: 1.1, transition: 0.95 }}
                  transition={transition}
                  className="serie-details">
                  <span>{serieItem.subtitle}</span>
                  <h2>{serieItem.title}</h2>
                </motion.div>
              </NavLink>
              
              <div className="serie-image">
                <img src={require(`../assets/${serieItem.img}.jpeg`)} alt={serieItem.title}></img>
              </div>
            
            </div>
          ))}
          </div>
      </div>
      
    </section>
  )
}

export default Series

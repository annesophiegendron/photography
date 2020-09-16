import React from 'react'
import { NavLink } from 'react-router-dom'

const photoSeries = [
  {
    id: 1,
    subtitle: 'Serie',
    title: '001: pastel', 
    img: 'window',
    link: '/serie001',
  },
  {
    id: 2,
    subtitle: 'Serie',
    title: '002: black and white', 
    img: 'beach',
    link: '/serie002',
  },
  {
    id: 3,
    subtitle: 'Serie',
    title: '003: items', 
    img: 'spoons',
    link: '/serie003',
  }
]

const Series = () => {

  return (
    <section className="series"> 
      
      <div className="container-fluid"> 
        <div className="row">
          {photoSeries.map((serieItem) => (
            <div className="serie" key={serieItem.id}>
              
              <NavLink to={`${serieItem.link}`} exact> 
                <div
                  className="serie-details">
                  <span>{serieItem.subtitle}</span>
                  <h2>{serieItem.title}</h2>
                </div>
              </NavLink>
              
              <div className="serie-image">
                <img src={require(`../assets/images/${serieItem.img}.jpg`)} alt={serieItem.title}></img>
              </div>
            
            </div>
          ))}
          </div>
      </div>
      
    </section>
  )
}

export default Series

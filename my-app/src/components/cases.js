import React from 'react'
import { NavLink } from 'react-router-dom'


import { ReactComponent as CasesNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg'

const caseStudies = [
  {
    id: 1,
    subtitle: 'Oskar',
    title: '001', 
    img: 'dad-and-son-beach',
    link: '/serie001',
  },
  {
    id: 2,
    subtitle: 'Them',
    title: '002', 
    img: 'wood',
    link: '/serie002',
  },
  {
    id: 3,
    subtitle: 'Territories',
    title: '003', 
    img: 'beach',
    link: '/serie003',
  }
]

const Cases = () => {

  return (
    <section className="cases"> 
      
      <div className="container-fluid"> 
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>

        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              
              <NavLink to={`${caseItem.link}`} exact> 
                <div className="case-details">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
              </NavLink>
              
              <div className="case-image">
                <img src={require(`../assets/${caseItem.img}.jpeg`)} alt={caseItem.title}></img>
              </div>
            
            </div>
          ))}
          </div>
      </div>
    </section>
  )
}

export default Cases

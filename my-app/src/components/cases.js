import React from 'react'
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg'

const caseStudies = [
  {
    id: 1,
    subtitle: 'Oskar',
    title: 'him', 
    img: 'dad-and-son-beach'
  },
  {
    id: 2,
    subtitle: 'Them',
    title: 'together', 
    img: 'wood'
  },
  {
    id: 3,
    subtitle: 'Black and White',
    title: 'melancoly', 
    img: 'beach'
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
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
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

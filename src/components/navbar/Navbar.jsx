import React from 'react'
import '../../global.css'
import './Navbar.css'

const Navbar = () => {
  return (
   <section className="navbar">
    <div className="navbar-container">
      <div className="left">
        <h1>Pickle Wars</h1>
        <h4>by Redwood Games</h4>
      </div>
      <nav className="right">
        <ul className="list-items">
          <li className="list-item"><a href="#intro">Home</a></li>
          <li className="list-item">Content</li>
          <li className="list-item"><a href="#specification">Specification</a></li>
          <li className="list-item"><span>Purchase</span></li>
        </ul>
      </nav>
    </div>
   </section>
  )
}

export default Navbar
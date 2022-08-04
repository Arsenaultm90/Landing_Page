import React from 'react'
import '../../global.css'
import './Intro.css'
import monitor from '../../images/monitor.png'

const Intro = () => {
  return (
    <section className="intro" id ="intro">
      <div className="intro-container">
        <div className="video-container">
          <iframe width="430" height="380" src="https://www.youtube.com/embed/Ds3HdJiyyMk?controls=0&rel=0&autoplay=1&loop=1&mute=1&playlist=Ds3HdJiyyMk" title="YouTube video player" frameBorder="0" allow="autoplay"></iframe>
          <img src={monitor} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Intro
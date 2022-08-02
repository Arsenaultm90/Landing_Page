import React from 'react'
import '../../global.css'
import './Content.css'
import picklerLogo from '../../images/pickleLogo.jpg'

const Content = () => {
  return (
    <section className="content">
      <div className="content-container">
        <div className="img-container">
          <img src={picklerLogo} alt="" />
        </div>
        <div className="text-container">
          <h1>Experience A Classic</h1>
          <p>A game made to challenge the player. Experience jaw-dropping graphics when you boot up this bad boy in MS-DOS.</p>
        </div>
      </div>
    </section>
  )
}

export default Content
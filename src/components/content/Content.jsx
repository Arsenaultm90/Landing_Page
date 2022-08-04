import React from "react";
import "../../global.css";
import "./Content.css";
import picklerLogo from "../../images/pickleLogo.jpg";

const Content = () => {
  return (
    <section className='content' id='content'>
      <div className='content-container'>
        <div className='img-container'>
          <img src={picklerLogo} alt='' />
        </div>
        <div className='text-container'>
          <h1>Experience A Classic</h1>
          <br />
          <p>
            A game made to challenge the player.
            Experience jaw-dropping graphics when
            you boot up this bad boy in MS-DOS.
            <br />
            <br />
            On the peaceful planet of Arcadia you
            play as Dave and Linda on the search
            for weapons to prevent the invasion.
            Though the planet has not needed
            weapons for centuries there is a man
            known as Lord Geric who knows of a
            Doomsday device that will end the
            invasion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;

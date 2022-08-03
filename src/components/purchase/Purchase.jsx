import React from "react";
import "../../global.css";
import "./Purchase.css";
import free from "../../images/free.gif";
import { TbWorld } from "react-icons/tb";
import { FcWikipedia } from "react-icons/fc";
import { RiQuestionnaireFill } from "react-icons/ri";

const Purchase = () => {
  return (
    <section className='purchase' id='purchase'>
      <div className='purchase-container'>
        <div className='purchase-content-container'>
          <h1>Pickle Wars Is FREE</h1>
          <a
            href='https://classicreload.com/pickle-wars.html'
            target='_blank'
            rel='noreferrer'>
            Play it for free
          </a>
        </div>
        <footer className='footer'>
          <div className='footer-container'>
            <ul className='footer-links'>
              <li className='footer-link'>
                <TbWorld color='white' />
                <a
                  href='http://www.redwoodgames.com/'
                  target='_blank'
                  rel='noreferrer'>
                  Redwood Games
                </a>
              </li>
              <li className='footer-link'>
                <RiQuestionnaireFill color='white' />
                <a
                  href='http://legacy.3drealms.com/news/2006/01/the_apogee_lega_1.html'
                  target='_blank'
                  rel='noreferrer'>
                  Creator Interview
                </a>
              </li>
              <li className='footer-link'>
                <FcWikipedia color='white' />
                <a href='https://en.wikipedia.org/wiki/Pickle_Wars'>
                  Wikipedia
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Purchase;

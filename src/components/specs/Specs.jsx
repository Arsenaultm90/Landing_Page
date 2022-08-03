import React, { useState } from "react";
import "../../global.css";
import "./Specs.css";
import arrow from "../../images/arrow.png";
import pickle1 from "../../images/pickle1.jpg";
import pickle2 from "../../images/pickle2.png";
import pickle3 from "../../images/pickle3.png";
import pickle4 from "../../images/pickle4.jpg";

const Specs = () => {
  const [currentSlide, setCurrentSlide] =
    useState(0);
  const pickleImages = [
    {
      id: 1,
      img: pickle1,
    },
    {
      id: 2,
      img: pickle2,
    },
    {
      id: 3,
      img: pickle3,
    },
    {
      id: 4,
      img: pickle4,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(
          currentSlide > 0 ? currentSlide - 1 : 2
        )
      : setCurrentSlide(
          currentSlide < pickleImages.length - 1
            ? currentSlide + 1
            : 0
        );
  };

  return (
    <section className='specs' id='specification'>
      <div className='specs-container'>
        <div className='top'>
          <div
            className='slider'
            style={{
              transform: `translateX(-${
                currentSlide * 100
              }vw)`,
            }}>
            {pickleImages.map((image) => (
              <div className='slider-container'>
                <div className='item'>
                  <img src={image.img} alt='' />
                </div>
              </div>
            ))}
          </div>
          <img
            src={arrow}
            className='arrow left'
            alt=''
            onClick={() => handleClick("left")}
          />
          <img
            src={arrow}
            className='arrow right'
            alt=''
            onClick={() => handleClick()}
          />
        </div>
        <span className='divider'></span>
        <div className='bottom'></div>
      </div>
    </section>
  );
};

export default Specs;

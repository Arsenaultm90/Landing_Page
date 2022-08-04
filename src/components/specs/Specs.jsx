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
        <div className='bottom'>
          <span className='divider'></span>

          <div className='info-container'>
            <div className='require-container'>
              <h1>REQUIREMENTS</h1>
              <ul>
                <li>
                  <span>CPU: </span> 486DX 66 MHz
                  or better processor (Pentium
                  recommended)
                </li>
                <li>
                  <span>RAM: </span> 16 megabytes
                  (MB) of memory (24 MB
                  recommended)
                </li>
                <li>
                  <span>Size: </span> 120 MB
                  minimum of free hard-disk space
                </li>
                <li>
                  <span>Install: </span> CD-ROM or
                  DVD-ROM drive
                </li>
                <li>
                  <span>Monitor: </span> Display
                  adapter and monitor that support
                  VGA or higher resolution
                </li>
                <li>
                  <span>Mouse: </span> Microsoft
                  Mouse or compatible pointing
                  device.
                </li>
              </ul>
            </div>
            <span className='v-divider'></span>
            <div className='instruction-container'>
              <h1>INSTALLATION</h1>
              <ul>
                <li>
                  1. Insert Pickle Wars™ CD-ROM
                  into CD-ROM Drive.
                </li>
                <li>
                  2. Double click 'My Computer' on
                  your Desktop.
                </li>
                <li>
                  3. Look for your Disk Drive and
                  double click it.
                </li>
                <li>
                  4. When the installation window
                  appears click the 'Install'
                  button.
                </li>
                <li>
                  5. Click 'Yes' on every window
                  without reading so we can
                  collect your data.
                </li>
                <li>
                  6. PATIENTLY wait 10 hours.
                </li>
                <li>
                  7. Once the game is installed,
                  double click the desktop icon
                  labelled 'Pickle Wars'™.
                </li>
                <li>
                  8. If you receive any errors it
                  may be because its 2022.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;

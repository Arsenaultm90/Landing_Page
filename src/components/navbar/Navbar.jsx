import React from "react";
import "../../global.css";
import "./Navbar.css";
import pickleIcon from "../../images/pickleIcon.png";

const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='navbar-container'>
        <div className='left'>
          <img src={pickleIcon} alt='' />
          <h1>Pickle Wars</h1>
        </div>
        <nav className='right'>
          <ul className='list-items'>
            <li className='list-item'>
              <a href='#intro'>Home</a>
            </li>
            <li className='list-item'>
              <a href='#content'>Content</a>{" "}
            </li>
            <li className='list-item'>
              <a href='#specification'>
                Specification
              </a>
            </li>
            <li className='list-item purchase-btn'>
              <button>
                <a href='#purchase'>Purchase</a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;

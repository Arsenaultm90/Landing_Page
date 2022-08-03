import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Content from "./components/content/Content";
import Specs from "./components/specs/Specs";
import Purchase from "./components/purchase/Purchase";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='sections'>
        <Intro />
        <Content />
        <Specs />
        <Purchase />
      </div>
    </div>
  );
};

export default App;

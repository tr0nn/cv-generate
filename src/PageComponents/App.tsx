import React from 'react';
import { useState } from 'react';
//import styled from 'styled-components';
//import logo2 from './images/LOGO1.npg';
import '../styles/App.css';

import ComponentWraper from './ComponentWraper';

function App() {
  const [homePageState, setHomePageState] = useState(true);

  const Home = () => {
    return (
      <div className="main-div">
        <img
          className="main-image"
          src={require('../images/shutt.png')}
          alt="mainImage"
        />

        <img
          className="signature"
          src={require('../images/LOGO1.png')}
          alt="signature"
        />
        <img
          className="redberry-text"
          src={require('../images/LOGO2.png')}
          alt="redberry"
        />
        <button
          onClick={() => {
            setHomePageState(false);
          }}
          className="add-rasume-btn"
        >
          რეზიუმეს დამატება
        </button>
        <hr className="hr" />
      </div>
    );
  };

  return <div>{homePageState ? <Home /> : <ComponentWraper />}</div>;
}

export default App;

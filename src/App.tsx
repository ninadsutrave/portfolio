import React, { FC, ReactElement, useState } from 'react';
import './App.css';

//import sections
import LandingPage from './pages/LandingPage'
import Intro from './pages/Intro'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//importing components
import Heading from './components/Heading'
import Navbar from './components/Navbar'

//importing bulb icons
import BulbOn from './assets/images/bulb-icon-on.svg'
import BulbOff from './assets/images/bulb-icon-off.svg'


const App:FC = ():ReactElement => {

  interface modeData {
    modeType: string,
    iconUrl: string
  }

  const [mode, setMode] = useState<modeData> ({
    modeType: "light",
    iconUrl: `${BulbOn}`
  });

  const switchMode = () => {
    if(mode.modeType === "light") {
      setMode({
        modeType: "dark",
        iconUrl: `${BulbOff}`
      })
    }
    else {
      setMode({
        modeType: "light",
        iconUrl: `${BulbOn}`
      })
    }
  }

  return (
    <div className= {`App w-full h-screen snap-y snap-mandatory overflow-y-scroll bg-${mode.modeType}`}>

      <img 
        className= "fixed w-10 mt-4 ml-5 cursor-pointer z-10"
        alt="Bulb Icon"
        src={mode.iconUrl} 
        onClick={switchMode}
      />
      <Heading />
      <Navbar />
      <Intro />
      <Work />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;

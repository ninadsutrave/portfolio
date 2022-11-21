import React, { FC, ReactElement, useState, useEffect } from 'react';
import './App.css';

//import sections
import PageTemplate from './pages/PageTemplate';
import LandingPage from './pages/content/LandingPage';
import Intro from './pages/content/Intro';
import About from './pages/content/About';
import Work from './pages/content/Work';
import Projects from './pages/content/Projects';
import Contact from './pages/content/Contact';

//importing components
import Heading from './components/Heading';
import Navbar from './components/Navbar';

//importing icons
import BulbOn from './assets/images/bulb-icon-on.svg';
import BulbOff from './assets/images/bulb-icon-off.svg';
import DownloadLight from './assets/images/download-icon-light.svg';
import DownloadDark from './assets/images/download-icon-dark.svg';
import DoubleDownLight from './assets/images/double-down-light.svg';
import DoubleDownDark from './assets/images/double-down-dark.svg';
import Github from './assets/images/github-light.svg';
import GithubDark from './assets/images/github-dark.svg';
import Linkedin from './assets/images/linkedin-light.svg';
import LinkedinDark from './assets/images/linkedin-dark.svg';
import Instagram from './assets/images/instagram-light.svg';
import InstagramDark from './assets/images/instagram-dark.svg';
import Hamburger from './assets/images/hamburger-light.svg';
import HamburgerDark from './assets/images/hamburger-dark.svg';
import Cross from './assets/images/cross-light.svg';
import CrossDark from './assets/images/cross-dark.svg';
import Card1 from './assets/images/test-card-1.png';
import Card1Dark from './assets/images/test-card-1-dark.png';
import Card2 from './assets/images/test-card-2.png';
import Card2Dark from './assets/images/test-card-2-dark.png';
import Card3 from './assets/images/test-card-3.png';
import Card3Dark from './assets/images/test-card-3-dark.png';
import Card4 from './assets/images/test-card-4.png';
import Card4Dark from './assets/images/test-card-4-dark.png';
import Card5 from './assets/images/test-card-5.png';
import Card5Dark from './assets/images/test-card-5-dark.png';


const App:FC = ():ReactElement => {

  interface modeData {
    modeType: string;
    bulbIcon: string;
    downloadIcon: string;
    doubleDownIcon: string;
    githubIcon: string;
    linkedinIcon: string;
    instagramIcon: string;   
    hamburgerIcon: string; 
    crossIcon: string;
    card1: string;
    card2: string;
    card3: string;
    card4: string;
    card5: string;
  }

  const [mode, setMode] = useState<modeData> ({
    modeType: "light",
    bulbIcon: `${BulbOn}`,
    downloadIcon: `${DownloadLight}`,
    doubleDownIcon: `${DoubleDownLight}`,
    githubIcon: `${Github}`,
    linkedinIcon: `${Linkedin}`,
    instagramIcon: `${Instagram}`,
    hamburgerIcon: `${Hamburger}`,
    crossIcon: `${Cross}`,
    card1: `${Card1}`,
    card2: `${Card2}`,
    card3: `${Card3}`,
    card4: `${Card4}`,
    card5: `${Card5}`
  });

  useEffect(() => {
    localStorage.setItem("mode", mode.modeType);
  }, [mode])

  const switchMode = () => {
    if(mode.modeType === "light") {
      setMode({
        modeType: "dark",
        bulbIcon: `${BulbOff}`,
        downloadIcon: `${DownloadDark}`,
        doubleDownIcon: `${DoubleDownDark}`,
        githubIcon: `${GithubDark}`,
        linkedinIcon: `${LinkedinDark}`,
        instagramIcon: `${InstagramDark}`,
        hamburgerIcon: `${HamburgerDark}`,
        crossIcon: `${CrossDark}`,
        card1: `${Card1Dark}`,
        card2: `${Card2Dark}`,
        card3: `${Card3Dark}`,
        card4: `${Card4Dark}`,
        card5: `${Card5Dark}`
      })
    }
    else {
      setMode({
        modeType: "light",
        bulbIcon: `${BulbOn}`,
        downloadIcon: `${DownloadLight}`,
        doubleDownIcon: `${DoubleDownLight}`,
        githubIcon: `${Github}`,
        linkedinIcon: `${Linkedin}`,
        instagramIcon: `${Instagram}`,
        hamburgerIcon: `${Hamburger}`,
        crossIcon: `${Cross}`,
        card1: `${Card1}`,
        card2: `${Card2}`,
        card3: `${Card3}`,
        card4: `${Card4}`,
        card5: `${Card5}`
      })
    }
  }

  return (
    <div className= {`App w-full h-screen snap-y snap-mandatory overflow-y-scroll ${(mode.modeType === "light")? "bg-stone-200": "bg-zinc-900"} ${mode.modeType}`}>

      <img 
        className= "fixed w-10 mt-4 ml-5 cursor-pointer z-70"
        alt="Bulb Icon"
        src={mode.bulbIcon} 
        onClick={switchMode}
      />

      <PageTemplate mode={mode} pageName="LandingPage" children={<LandingPage/>}/>

      <div>
        <Heading {...mode}/>
        <Navbar/>
        <PageTemplate mode={mode} pageName="Intro"    children={<Intro/>}               />
        <PageTemplate mode={mode} pageName="About"    children={<About/>}               />
        <PageTemplate mode={mode} pageName="Work"     children={<Work/>}                />
        <PageTemplate mode={mode} pageName="Projects" children={<Projects {...mode}/>}            />
        <PageTemplate mode={mode} pageName="Contact"  children={<Contact {...mode}/>}   />
      </div>

      
    </div>
  );
}

export default App;

import React, { FC, ReactElement, useState, useEffect } from 'react';
import './App.css';

//import sections
import PageTemplate from './pages/PageTemplate'
import LandingPage from './pages/content/LandingPage'
import Intro from './pages/content/Intro'
import Work from './pages/content/Work'
import Projects from './pages/content/Projects'
import Contact from './pages/content/Contact'

//importing components
import Heading from './components/Heading'
import Navbar from './components/Navbar'

//importing icons
import BulbOn from './assets/images/bulb-icon-on.svg'
import BulbOff from './assets/images/bulb-icon-off.svg'
import DownloadLight from './assets/images/download-icon-light.svg'
import DownloadDark from './assets/images/download-icon-dark.svg'
import DoubleDownLight from './assets/images/double-down-light.svg'
import DoubleDownDark from './assets/images/double-down-dark.svg'
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
    crossIcon: `${Cross}`
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
        crossIcon: `${CrossDark}`
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
        crossIcon: `${Cross}`
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
        <PageTemplate mode={mode} pageName="Image"    children={<Intro/>}     />
        <PageTemplate mode={mode} pageName="Work"     children={<Work/>}      />
        <PageTemplate mode={mode} pageName="Projects" children={<Projects/>}  />
        <PageTemplate mode={mode} pageName="Contact"  children={<Contact {...mode}/>}   />
      </div>

      
    </div>
  );
}

export default App;

import React, { FC } from 'react'
import ResumeDownloadButton from './ResumeDownloadButton';
import Hamburger from './Hamburger'

interface modeData {
  modeType: string;
  bulbIcon: string;
  newTabIcon: string;
  doubleDownIcon: string;
  githubIcon: string;
  linkedinIcon: string;
  instagramIcon: string;   
  hamburgerIcon: string; 
  crossIcon: string;
}

const Heading: FC<modeData> = (mode) => {

  return (
    <div className={`sticky flex w-full bg-stone-200 dark:bg-zinc-900 top-0 pt-6 pb-6 z-60 ${localStorage.getItem("mode") === "dark"?"darkMode":"lightMode"}`}>
      <div className="w-4/12 xs:w-3/12"></div>
      <div className="flex w-4/12 xs:w-6/12 justify-center items-center">
        <span className="text-sm text-gray-500 "> 
          &lt;Title&gt; 
        </span> 
        <p className="mx-4 flex justify-center items-center text-lg sm:text-2xl font-bold text-black dark:text-slate-50">
          Ninad Sutrave
        </p>
        <span className="text-sm text-gray-500"> 
          &lt;/Title&gt; 
        </span>
      </div>
      {
        (window.innerWidth > 1024) ?
        <ResumeDownloadButton {...mode}/> : <Hamburger {...mode}/>
      }
    </div>
  )
}

export default Heading
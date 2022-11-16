import React, { FC, useState } from 'react';
import ResumeDownloadButton from './ResumeDownloadButton';

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

const Nav:FC<modeData> = (mode) => {
    let Links =[
      {name:"Intro",link:"#Image"},
      {name:"Work",link:"#Work"},
      {name:"Projects",link:"#Projects"},
      {name:"Contact",link:"#Contact"},
    ];
    let [open,setOpen]=useState(false);

    const scrollTo = (nextPage: string | undefined) => {
      setOpen(false)
      if(nextPage) {
        const element = document.getElementById(`#${nextPage}`) as HTMLInputElement | null
        if(element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }
    }

  return (
    <div className={`w-full fixed top-0 left-0 lg:hidden z-80 dark:bg-zinc-900 ${localStorage.getItem("mode") === "dark"?"darkMode":"lightMode"}`}>
      <div className={`lg:flex h-0 items-center justify-between bg-zinc-200 dark:bg-zinc-900 py-4 lg:px-10 px-7 ${localStorage.getItem("mode") === "dark"?"darkMode":"lightMode"}`}>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
      {open ? <img className="mt-3 mr-1 w-6" alt="close icon" src={mode.crossIcon}/>: <img className="mt-2 w-8" alt="hamburger icon" src={mode.hamburgerIcon}/>}
      </div>

      <ul className={`shadow-md lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-zinc-200 dark:bg-zinc-900 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
              <a href={link.link} onClick={() => scrollTo(link.name)} className={`text-gray-800 hover:text-zinc-600 duration-500 dark:text-white`}>{link.name}</a>
            </li>
          ))
        }
        <ResumeDownloadButton {...mode}/>
      </ul>
      </div>
    </div>
  )
}

export default Nav
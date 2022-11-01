import React, { useState } from 'react';
import ResumeDownloadButton from './ResumeDownloadButton';
import cross from '../assets/images/cross.svg';
import hamburger from '../assets/images/hamburger.svg';

const Nav = () => {
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
    <div className='w-full fixed top-0 left-0 lg:hidden'>
      <div className='lg:flex h-0 items-center justify-between bg-zinc-200 py-4 lg:px-10 px-7'>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
      {open ? <img alt="close icon" src={cross}/>: <img alt="hamburger icon" src={hamburger}/>}
      </div>

      <ul className={`shadow-md lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-zinc-200 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
              <a href={link.link} onClick={() => scrollTo(link.name)} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <ResumeDownloadButton />
      </ul>
      </div>
    </div>
  )
}

export default Nav
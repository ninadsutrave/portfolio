import React, {FC, useState} from 'react'

interface modeData {
    modeType: string;
    hamburgerIcon: string; 
    crossIcon: string;
}

const Resume:FC<modeData> = (mode) => {

  const  [open,setOpen] = useState(false);

  return (
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
      {open ? <img className="mt-3 mr-1 w-6" alt="close icon" src={mode.crossIcon}/>: <img className="mt-2 w-8" alt="hamburger icon" src={mode.hamburgerIcon}/>}
    </div>
  )
}

export default Resume
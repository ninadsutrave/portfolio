import React, { FC } from 'react'
import downloadIconUrl from '../assets/images/download-icon-light.svg';

const Heading: FC = () => {

  const resumeLink : string | undefined = process.env.REACT_APP_RESUME_LINK;

  return (
    <div className="sticky flex w-full bg-stone-200 top-0 pt-6 z-10">
      <div className="w-1/3"></div>
      <div className="flex w-1/3 justify-center items-center">
        <span className="text-gray-500"> 
          &lt;Title&gt; 
        </span>
        <h2 className="mx-4 text-2xl font-bold">
          Ninad Sutrave
        </h2>
        <span className="text-gray-500"> 
          &lt;/Title&gt; 
        </span>
      </div>
      <div className="flex w-1/3 justify-center items-center">
        <a href={resumeLink} className="flex gap-2 p-2 border-2 border-black rounded-md">
            <p className="font-semibold">
              Resume
            </p>
            <img
              className="w-6"
              alt="Download Icon"
              src={downloadIconUrl}
            />
        </a>
      </div>
    </div>
  )
}

export default Heading
import React, { FC } from 'react'
import downloadIconUrl from '../assets/images/download-icon-light.svg';

const Heading: FC = () => {
  return (
    <div className="Heading">
      <span className="tag"> 
        &lt;Title&gt; 
      </span>
      <h2 className="mx-4">
        Ninad Sutrave
      </h2>
      <span className="neutral-400"> 
        &lt;/Title&gt; 
      </span>
      <a href="../assets/NinadSutrave_Resume.pdf" download>
        <div className="resume">
          Resume
          <img
            className="download-icon"
            alt="Download Icon"
            src={downloadIconUrl}
          />
        </div>
      </a>
    </div>
  )
}

export default Heading
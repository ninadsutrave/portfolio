import React, { FC } from 'react'
import downloadIconUrl from '../assets/images/download-icon-light.svg';

const ResumeDownloadButton: FC = () => {

  const resumeLink : string | undefined = process.env.REACT_APP_RESUME_LINK;

  return (
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
  )
}

export default ResumeDownloadButton
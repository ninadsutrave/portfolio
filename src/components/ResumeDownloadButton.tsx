import React, { FC, useState, useEffect } from 'react'
import downloadIconUrl from '../assets/images/download-icon-light.svg';
import downloadDarkIconUrl from '../assets/images/download-icon-dark.svg';

const ResumeDownloadButton: FC = () => {

  const resumeLink : string | undefined = process.env.REACT_APP_RESUME_LINK;
  const [downloadIcon, setDownloadIcon] = useState<string>(`${downloadIconUrl}`);

  useEffect(() => {
    if(localStorage.getItem("mode") === "dark") {
      setDownloadIcon(`${downloadIconUrl}`)
    }
    else {
      setDownloadIcon(`${downloadDarkIconUrl}`)
    }
    
  }, [localStorage.getItem("mode")])

  return (
      <div className="flex w-1/3 justify-center items-center">
        <a href={resumeLink} className="flex gap-2 p-2 border-2 border-black dark:text-slate-50 dark:border-slate-50 rounded-md">
            <p className="font-semibold">
              Resume
            </p>
            <img
                  className="w-6"
                  alt="Download Icon"
                  src={downloadIcon}
                />
        </a>
      </div>
  )
}

export default ResumeDownloadButton
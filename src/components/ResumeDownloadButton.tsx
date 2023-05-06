import { FC } from 'react'

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

const ResumeDownloadButton: FC<modeData> = (mode) => {

  return (
      <div className="sm:flex w-32 sm:w-3/12 items-center">
        <a href="NinadSutrave_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 p-2 border-2 border-black dark:text-slate-50 dark:border-slate-50 rounded-md">
            <p className="font-semibold">
              Resume
            </p>
            <img
                  className="w-5"
                  alt="Download Icon"
                  src={mode.newTabIcon}
            />
        </a>
      </div>
  )
}

export default ResumeDownloadButton
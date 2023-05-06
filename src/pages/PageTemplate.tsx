import React, { FC, ReactElement } from 'react';

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

type Page = {
    pageName: string;
    children?: JSX.Element | JSX.Element[];
    mode: modeData;
};

let nextPage = new Map<string, string>([
  ["LandingPage", "Intro"],
  ["Intro", "About"],
  ["About", "Work"],
  ["Work", "Projects"],
  ["Projects", "Contact"]
]);

const PageTemplate: FC<Page> = ({pageName, children, mode}: Page): ReactElement => {

  const scrollTo = (nextPage: string | undefined) => {
    if(nextPage) {
      const element = document.getElementById(`#${nextPage}`) as HTMLInputElement | null
      if(element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }

  return (
    
    <section className="relative flex items-center justify-center h-screen max-h-screen snap-center" id={`#${pageName}`}>
        <div className="flex flex-col h-4/6 justify-between w-10/12">
          <p className="text-gray-500">
            &lt; {pageName} &gt;
          </p>
            {children}
          <p className="text-gray-500">
            &lt;/ {pageName} &gt;
          </p>
        </div>

        {
          (nextPage.has(pageName))?
          <a 
            className="absolute bottom-0 mb-4 cursor-pointer z-30"
            href={`#${nextPage.get(pageName)}`}
            onClick = {() => scrollTo(nextPage.get(pageName))}
          >
            <img
              src={mode.doubleDownIcon}
              alt="Bottom Nav Icon"
              className="w-6"
            />
          </a>:null
        }

    </section>
  )
}

export default PageTemplate;
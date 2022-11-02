import React, { FC, ReactElement } from 'react';

const Navbar: FC = (): ReactElement => {

    const scrollTo = (nextPage: string | undefined) => {
        if(nextPage) {
          const element = document.getElementById(`#${nextPage}`) as HTMLInputElement | null
          if(element) {
            element.scrollIntoView({behavior: 'smooth'});
          }
        }
      }

    return <div className="sticky hidden lg:flex justify-end top-1/6 h-screen w-9/12 ml-44 z-30">
        <div className="h-4/6 border-2 bg-black border-black dark:bg-zinc-400 dark:border-zinc-400">
        </div>
        <div className="h-4/6 flex flex-col items-center justify-around">
            <a className="cursor-pointer" href="#Image" onClick={() => scrollTo("Image")}>
            <div className="flex items-center justify-center gap-2 -ml-10">
                <div className="w-4 h-4 rounded-full bg-zinc-400 border-4 border-black dark:border-zinc-900"></div>
                <div className="text-gray-600 dark:text-zinc-300">&lt; Intro /&gt;</div>
            </div>
            </a>
            <a className="cursor-pointer" href="#Work" onClick={() => scrollTo("Work")}>
            <div className="flex items-center justify-center gap-2 -ml-10">
                <div className="w-4 h-4 rounded-full bg-zinc-400 border-4 border-black dark:border-zinc-900"></div>
                <div className="text-gray-600 dark:text-zinc-300">&lt; Work /&gt;</div>
            </div>
            </a>
            <a className="cursor-pointer" href="#Projects" onClick={() => scrollTo("Projects")}>
            <div className="flex items-center justify-center gap-2 -ml-2">
                <div className="w-4 h-4 rounded-full bg-zinc-400 border-4 border-black dark:border-zinc-900"></div>
                <div className="text-gray-600 dark:text-zinc-300">&lt; Projects /&gt;</div>
            </div>
            </a>
            <a className="cursor-pointer" href="#Contact" onClick={() => scrollTo("Contact")}>
            <div className="flex items-center justify-center gap-2 -ml-2">
                <div className="w-4 h-4 rounded-full bg-zinc-400 border-4 border-black dark:border-zinc-900"></div>
                <div className="text-gray-600 dark:text-zinc-300">&lt; Contact /&gt;</div>
            </div>
            </a>
        </div>
    </div>
}

export default Navbar
import React, { FC, ReactElement } from 'react';

const LandingPage: FC = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className={`text-4xl mobile:text-5xl sm:text-7xl lg:text-8xl w-10/12 text-neutral-800 dark:text-slate-200 flex justify-center items-center ${localStorage.getItem("mode") === "dark"?"dark":"light"}`}>
        Ninad Sutrave
      </div>
      <div className={`w-11/12 border sm:border-2 bg-zinc-900 border-zinc-900 dark:bg-slate-50 dark:border-slate-50 ${localStorage.getItem("mode") === "dark"?"dark":"light"}`} />
      <div className={`text-xl mobile:text-3xl md:text-2xl lg:text-3xl w-10/12 text-neutral-600 dark:text-zinc-400 flex justify-center items-center ${localStorage.getItem("mode") === "dark"?"dark":"light"}`}>
        Full Stack Developer
      </div>
    </div>
  )
}

export default LandingPage
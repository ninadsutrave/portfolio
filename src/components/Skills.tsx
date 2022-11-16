import React, { FC } from 'react'

interface Skillset {
  type: string;
  list: string[];
}

const Skills: FC<Skillset> = ({type, list}: Skillset) => {

  return (
    <div className="flex gap-8">
      <header className="font-bold text-sm sm:text-base w-2/12 dark:text-slate-50">
          {type}:
      </header>
      <div className="flex w-3/4">
          {
              list.map((skill, index) => {
                  return <span key={`skill-${index}`} className="mr-2  dark:text-zinc-300">{skill}</span>
              })
          }
      </div>
    </div>
  )
}

export default Skills
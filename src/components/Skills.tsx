import React, { FC } from 'react'

interface Skillset {
  type: string;
  list: string[];
}

const Skills: FC<Skillset> = ({type, list}: Skillset) => {

  let skillsList: string = "";
  list.forEach((skill) => {
    skillsList = skillsList + skill + "  ";
  })

  return (
    <div className="flex sm:gap-0 gap-4">
      <header className="font-bold text-sm sm:text-base w-2/12 dark:text-zinc-300">
          {type}:
      </header>
      <div className="flex w-3/4 sm:ml-0 ml-6 lg:-ml-4">
        <p className="mr-2  dark:text-zinc-300 text-sm sm:text-base">
          {skillsList}
        </p>
      </div>
    </div>
  )
}

export default Skills
import React, { FC } from 'react'

interface Skillset {
  type: string;
  list: string[];
}

const Skills: FC<Skillset> = ({type, list}: Skillset) => {

  return (
    <div className="flex gap-8">
      <header className="font-bold w-2/12">
          {type}:
      </header>
      <p className="flex">
          {
              list.map((skill) => {
                  return <p className="mr-2">{skill}</p>
              })
          }
      </p>
    </div>
  )
}

export default Skills
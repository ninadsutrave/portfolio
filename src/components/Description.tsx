import React, { FC } from 'react'

interface MyProps {
  descp: string[];
}

const Description: FC<MyProps> = ({descp}: MyProps) => {

  return (
    <ul className="w-11/12 mt-4 md:mt-0 md:w-7/12 lg:w-5/12 list-disc">
      {descp.map((point, index) => {
        return <li key={index} className="text-sm md:text-base dark:text-zinc-300">
          {point}
        </li>
        })
      } 
    </ul>
  )
}

export default Description
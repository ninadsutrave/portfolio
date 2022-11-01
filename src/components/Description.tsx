import React, { FC } from 'react'

interface MyProps {
  descp: string[];
}

const Description: FC<MyProps> = ({descp}: MyProps) => {

  return (
    <ul className="w-7/12 lg:w-5/12 list-disc">
      {descp.map((point) => {
        return <li>
          {point}
        </li>
        })
      } 
    </ul>
  )
}

export default Description
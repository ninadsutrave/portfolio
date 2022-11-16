import React, { FC } from 'react'

interface RoleInfo {
  company: string;
  position: string;
  startDate: string;
  endDate: string; 
}
const Role: FC<RoleInfo> = ({company, position, startDate, endDate}: RoleInfo) => {

  return (
    <div className="flex flex-col md:gap-4 mr-12">

      <h1 className="text-xl md:text-2xl font-black dark:text-slate-50">
        {company}
      </h1>

      <div>
      <p className="underline text-xs md:text-sm dark:text-zinc-300">
        {position}
      </p>
      <p className="text-xs md:text-sm dark:text-zinc-300">
        {startDate} - {endDate}
      </p>
      </div>

    </div>
  )
}

export default Role
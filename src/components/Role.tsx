import React, { FC } from 'react'

interface RoleInfo {
  company: string;
  position: string;
  startDate: string;
  endDate: string; 
}
const Role: FC<RoleInfo> = ({company, position, startDate, endDate}: RoleInfo) => {

  return (
    <div className="flex flex-col gap-4 mr-12">

      <h1 className="text-2xl font-black">
        {company}
      </h1>

      <div>
      <p className="underline text-sm">
        {position}
      </p>
      <p className="text-sm">
        {startDate} - {endDate}
      </p>
      </div>

    </div>
  )
}

export default Role
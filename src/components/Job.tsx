import React, { FC } from 'react'
import Role from './Role'
import Description from './Description'

interface JobInfo {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    descp: string[];
}

const Job: FC<JobInfo> = ({company, position, startDate, endDate, descp}: JobInfo) => {

  return (
    <div className="flex">
        <Role 
            company={company}
            position={position}
            startDate={startDate}
            endDate={endDate}
        />
        <Description 
            descp={descp}
        />
    </div>
  )
}

export default Job
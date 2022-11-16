import React, { FC, ReactElement } from 'react';
import Job from '../../components/Job'

const Work: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-4 sm:gap-12 md:ml-8 py-8 ml-6 md:py-0">
        <Job
          company="Tech IndusOne"
          position="Full Stack Developer Intern"
          startDate="Jun 2022"
          endDate="Jul 2022"
          descp={["Developed a Technical Skills Assessment and Certification platform", "Looked into all client side and server side aspects of the application to work at a large scale"]}
        />

        <Job
          company="Music Seekho"
          position="Back End Developer Intern"
          startDate="Mar 2022"
          endDate="Apr 2022"
          descp={["Worked on the development and deployment of an online music education and collaboration platform", "Designed and implemented the application’s primary APIs, databases,  and other functionalities from scratch"]}
        />
    </div>
  )
}

export default Work;
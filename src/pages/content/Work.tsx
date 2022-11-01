import React, { FC, ReactElement } from 'react';
import Skills from '../../components/Skills'
import Job from '../../components/Job'

const Work: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-8 ml-8">

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
      <div className="ml-8">
        <p className="text-gray-500">
            &lt; Skills &gt;
        </p>

        <div className="ml-4 py-1">
          <Skills type="Languages" list={["C,", "C++,", "JavaScript,", "Typescript,", "JAVA"]} />
          <Skills type="Front End" list={["HTML,", "CSS,", "Tailwind,", "Bootstrap,", "React,", "Redux"]} />
          <Skills type="Back End" list={["NodeJS,", "Express,", "MongoDB,", "PostgreSQL,", "Firebase"]} />
          <Skills type="Design" list={["Figma,", "Adobe XD"]} />
        </div>

        <p className="text-gray-500">
          &lt;/ Skills &gt;
        </p>
      </div>
    </div>
  )
}

export default Work;
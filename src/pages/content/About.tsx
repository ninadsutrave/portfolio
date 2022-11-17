import React, { FC, ReactElement } from 'react';
import Skills from '../../components/Skills'

const About: FC = (): ReactElement => {

  return (
    <div className="flex flex-col md:gap-12">

        <div className="w-11/12 lg:w-8/12 flex flex-col gap-4 ml-4 py-2 sm:py-0">
          <p className="text-sm sm:text-base dark:text-zinc-300">I'm Ninad Sutrave - an engineer, developer, musician and above all, a passionate learner. I look forward to exploring the Software Development industry and contributing to the community in every way I can. </p>
          <p className="text-sm sm:text-base dark:text-zinc-300">I am currently pursuing my engineering degree at Indian Institute of Technology, Ropar and am grabbing all opportunities coming my way, to sharpen my technical and non technical skills.</p>
        </div>
        
        <div className="ml-2 sm:ml-8">
          <p className="text-gray-500">
              &lt; Skills &gt;
          </p>

          <div className="ml-2 sm:ml-4 py-1 flex flex-col">
            <Skills type="Languages" list={["C,", "C++,", "JavaScript,", "Typescript,", "JAVA"]} />
            <Skills type="Front End" list={["HTML,", "CSS,", "Tailwind,", "React,", "Redux"]} />
            <Skills type="Back End" list={["Node,", "Express,", "MongoDB,", "PostgreSQL,", "Firebase"]} />
            <Skills type="Design" list={["Figma,", "Adobe XD,", "Canva"]} />
          </div>

          <p className="text-gray-500">
            &lt;/ Skills &gt;
          </p>
        </div>
    </div>
  )
}

export default About;
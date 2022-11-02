import React, { FC, ReactElement } from 'react';
import MyImage from '../../assets/images/me.jpg'

const Intro: FC = (): ReactElement => {

  return (
    <div className="flex ml-12 gap-12 lg:gap-0">
      <div className="flex lg:w-80 items-center">
        <div className="border border-black w-56">
          <img
            className="border-slate-300 shadow-sm border-8"
            src={MyImage}
            alt="Me"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center py-8 gap-4 lg:w-96">

        <p className="text-gray-500">
            &lt; Intro &gt;
        </p>

          <div className="flex flex-col gap-8 sm:ml-4 md:ml-8">

            <p className={`sm:text-2xl md:text-3xl w-10/12 dark:text-slate-50 ${localStorage.getItem("mode") === "dark"?"dark":"light"}`}>
              Hola!<br/>
              I love developing beautiful UIs & creating unique web experiences.
            </p>
            <p className={`sm:text-2xl md:text-3xl dark:text-slate-50 ${localStorage.getItem("mode") === "dark"?"dark":"light"}`}>
              Pleasure meeting you!
            </p>

          </div>

        <p className="text-gray-500">
          &lt;/ Intro &gt;
        </p>

      </div>

    </div>
  )
}

export default Intro
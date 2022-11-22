import React, { FC, ReactElement } from 'react';
import MyImage from '../../assets/images/me.webp'

const Intro: FC = (): ReactElement => {

  return (
    <div className="flex flex-col sm:flex-row ml-4 lg:ml-12 sm:gap-20 lg:gap-0 xl:gap-20">
      <div className="flex lg:w-80 items-center w-full sm:w-56">
        <div className="border border-black mt-4 w-full max-w-xs sm:w-64 sm:h-full lg:mb-4">
          <img
            className="border-slate-300 shadow-sm border-8 sm:h-full object-cover"
            src={MyImage}
            alt="Me"
          />
        </div>
      </div>
      <div className="mt-6 mb-2 xs:mt-0 xs:mb-0 flex flex-col sm:justify-center py-2 sm:py-8 gap-4 lg:w-96">

        <p className="text-gray-500">
            &lt; Greeting &gt;
        </p>

          <div className="flex flex-col sm:gap-8 ml-2 sm:ml-4 md:ml-8">

            <p className={`sm:text-2xl md:text-3xl w-10/12 dark:text-slate-50 ${localStorage.getItem("mode") === "dark"?"dark":"light"}`}>
              Hola!<br/>
              I love developing beautiful UIs & creating unique web experiences.
            </p>
            <p className={`sm:text-2xl md:text-3xl dark:text-slate-50 ${localStorage.getItem("mode") === "dark"?"dark":"light"}`}>
              Pleasure meeting you!
            </p>

          </div>

        <p className="text-gray-500">
          &lt;/ Greeting &gt;
        </p>

      </div>

    </div>
  )
}

export default Intro
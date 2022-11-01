import React, { FC, ReactElement } from 'react';
import MyImage from '../../assets/images/me.jpg'

const Intro: FC = (): ReactElement => {

  return (
    <div className="flex ml-12 gap-12 lg:gap-0">
      <div className="flex lg:w-4/12 items-center">
        <div className="border border-black w-56">
          <img
            className="border-slate-300 shadow-sm border-8"
            src={MyImage}
            alt="Me"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center py-8 gap-4 lg:w-4/12">

        <p className="text-gray-500">
            &lt; Intro &gt;
        </p>

          <div className="flex flex-col gap-8 ml-8">

            <p className="text-3xl w-10/12">
              Hola!<br/>
              I love developing beautiful UIs & creating unique web experiences.
            </p>
            <p className="text-3xl">
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
import React, { FC, ReactElement } from 'react';

const LandingPage: FC = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-8xl w-10/12 text-neutral-800 flex justify-center items-center">
        Ninad Sutrave
      </div>
      <div className="w-11/12 border-2 bg-zinc-900 border-zinc-900" />
      <div className="text-3xl w-10/12 text-neutral-600 flex justify-center items-center">
        Full Stack Developer
      </div>
    </div>
  )
}

export default LandingPage
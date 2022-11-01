import React, { FC, ReactElement } from 'react';
import Carousel from '../../components/Carousel';

const Projects: FC = (): ReactElement => {
  return (
    <div className="flex lg:w-8/12 z-50">
      <Carousel />
    </div>
  )
}

export default Projects;
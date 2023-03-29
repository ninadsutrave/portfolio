import React, { FC, ReactElement } from 'react';
import Carousel from '../../components/Carousel';

interface modeData {
  modeType: string;
  card1: string;
  card2: string;
  card3: string;
  card4: string;
  card5: string;
  card6: string;
}

const Projects: FC<modeData> = (mode): ReactElement => {
  return (
    <div className="flex lg:w-8/12 z-50">
      <Carousel {...mode}/>
    </div>
  )
}

export default Projects;
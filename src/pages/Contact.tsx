import React, { FC, ReactElement } from 'react';

const Contact: FC = (): ReactElement => {
  return (
    <section className="flex items-center justify-center h-screen border-4 border-solid border-black snap-center">
        <h1 className="text-gray-400">
          &lt;Contact&gt;
        </h1>
        <h1 className="text-gray-400">
          &lt;/Contact&gt;
        </h1>
    </section>
  )
}

export default Contact;
import React from 'react'
import photo from './karan-sekhri.jpg'

const Content = () => (
  <section className="mx-auto mt-6 mb-5 flex max-w-screen-xl items-center px-8 md:mt-[5rem] md:mb-[4.5rem] lg:mt-[8rem] lg:mb-[7rem] xl:mt-[10rem] xl:mb-[9rem] xl:px-4 2xl:px-0">
    <div className="mr-5 hidden md:block xl:mr-7 2xl:mr-11">
      <div className="mb-4">
        <img
          className="max-w-[16rem] rounded-full"
          src={photo}
          alt="Karan Sekhri"
        />
      </div>
      <div className="text-center">Staff Frontend Software Engineer</div>
      <div className="text-center">Course Hero</div>
    </div>
    <div className="text-md bg-slate-50 px-6 py-5 dark:bg-slate-600 md:ml-5 md:px-8 md:py-8 md:text-lg lg:px-10 lg:py-12 lg:text-xl xl:ml-7 xl:px-[5rem] xl:py-[4rem] xl:text-2xl 2xl:ml-11">
      <p className="mb-7">
        Frontend Software Engineer with a strong background in leadership and
        UX.
      </p>
      <p className="mb-7">Skilled in React, Typescript, and Tailwind.</p>
      <p>
        Strong engineering professional who graduated Cum Laude with a BS in
        Computer Science from University of California, Irvine.
      </p>
    </div>
  </section>
)

export default Content

import React from 'react'
import photo from './karan-sekhri.jpg'

const HeaderMobile = ({ className }: { className: string }) => (
  <header className={className}>
    <div className="relative flex w-full select-none flex-wrap justify-between border-b px-8 pb-7 shadow-md dark:border-slate-700 dark:shadow-none">
      <div className="absolute top-0 left-0 right-0 h-[5rem] bg-slate-50 dark:bg-slate-600" />
      <div className="mr-5 mt-4 inline-flex shrink-0 translate-y-3 flex-col">
        <div className="mb-2 flex">
          <img
            className="max-w-[6rem] rounded-full"
            src={photo}
            alt="Karan Sekhri"
          />
        </div>
        <div className="cursor-default text-xl font-medium">Karan Sekhri</div>
        <div className="text-xs">Staff Frontend Software Engineer</div>
        <div className="text-xs">Course Hero</div>
      </div>
      <div className="mt-3 flex shrink-0 translate-y-3 items-end text-sm">
        <div className="mr-2">
          <a
            className="rounded-full bg-sky-700 py-1 px-2 text-slate-50 text-sky-600"
            href="https://github.com/ksekhri/"
            title="Karan Sekhri GitHub"
          >
            GitHub
          </a>
        </div>
        <div>
          <a
            className="rounded-full bg-sky-700 py-1 px-2 text-slate-50 text-sky-600"
            href="https://linkedin.com/in/ksekhri"
            title="Karan Sekhri LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default HeaderMobile

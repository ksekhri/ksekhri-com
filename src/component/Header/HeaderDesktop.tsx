import React from 'react'

const HeaderDesktop = ({ className }: { className: string }) => (
  <header className={className}>
    <div className="w-full border-b bg-slate-50 shadow-md dark:border-slate-700 dark:bg-transparent dark:shadow-none">
      <div className="mx-auto flex w-full max-w-screen-xl select-none items-center justify-between px-8 py-8 xl:px-4 2xl:px-0">
        <div className="cursor-default text-4xl font-medium">Karan Sekhri</div>
        <div className="flex text-2xl">
          <div className="mr-3">
            <a
              className="text-sky-600 dark:text-sky-400"
              href="https://github.com/ksekhri/"
              title="Karan Sekhri GitHub"
            >
              GitHub
            </a>
          </div>
          <div className="mr-3">•</div>
          <div>
            <a
              className="text-sky-600 dark:text-sky-400"
              href="https://linkedin.com/in/ksekhri"
              title="Karan Sekhri LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default HeaderDesktop

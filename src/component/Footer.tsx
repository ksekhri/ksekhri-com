import React from 'react'

const Footer = () => (
  <footer className="mx-auto max-w-screen-xl px-10 pb-4 text-center">
    © {new Date().getFullYear()} Karan Sekhri —{' '}
    <a
      className="text-sky-600 dark:text-sky-400"
      href="https://github.com/ksekhri"
    >
      Source
    </a>
  </footer>
)

export default Footer

import React from 'react'
import NightSwitch from './NightSwitch'

const Footer = () => (
  <footer className="mx-auto max-w-screen-xl px-10 pb-4 text-center text-sm xl:text-base">
    © {new Date().getFullYear()} Karan Sekhri —{' '}
    <a
      className="text-sky-600 dark:text-sky-400"
      href="https://github.com/ksekhri/ksekhri-com"
    >
      Source
    </a>{' '}
    — <NightSwitch />
  </footer>
)

export default Footer

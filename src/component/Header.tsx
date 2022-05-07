import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header = () => (
  <>
    <HeaderMobile className="md:hidden" />
    <HeaderDesktop className="hidden md:block" />
  </>
)

export default Header

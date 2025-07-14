import React from 'react'
import AboutHerosection from './AboutHerosection'
import Aboutsection1 from './Aboutsection1'
import Aboutsection2 from './Aboutsection2'
import Aboutsection3 from './Aboutsection3'
import Aboutsection4 from './Aboutsection4'
import MetaTags from '../../Core/Metatags'

export default function Aboutus() {
  return (
    <>
    <MetaTags/>
        <AboutHerosection/>
        <Aboutsection1/>
        <Aboutsection2/>
        <Aboutsection3/>
        <Aboutsection4/>
    </>
  )
}

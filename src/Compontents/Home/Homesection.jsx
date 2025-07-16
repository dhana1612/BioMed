import React from 'react'
import HeroSection from './HeroSection'
import Home1 from './Home1'
import Infrastructure3 from '../InfrastructurePage/Infrastructure3'
import Aboutsection4 from '../Aboutus/Aboutsection4'
import CertificationsSection from '../CertificationsSection'
import { Helmet } from 'react-helmet'
import MetaTags from '../../Core/Metatags'
import Home_about from './Home_about'
import Home_Excellence from './Home_Excellence'


export default function Homesection() {
  return (
    <>
    <Helmet></Helmet>
    <MetaTags/>
    <HeroSection/>
    <Home_about/>
    <Home1/>
    <Home_Excellence/>
    {/* <Infrastructure3/> */}
    <Aboutsection4/>
    <CertificationsSection/>
    </>
  )
}

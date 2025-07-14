import React from 'react'
import HeroSection from './HeroSection'
import Home1 from './Home1'
import Infrastructure3 from '../InfrastructurePage/Infrastructure3'
import Aboutsection4 from '../Aboutus/Aboutsection4'
import CertificationsSection from '../CertificationsSection'
import { Helmet } from 'react-helmet'
import MetaTags from '../../Core/Metatags'


export default function Homesection() {
  return (
    <>
    <Helmet></Helmet>
    <MetaTags/>
    <HeroSection/>
    <Home1/>
    <Infrastructure3/>
    <Aboutsection4/>
    <CertificationsSection/>
    </>
  )
}

import React from 'react'
import AboutHerosection from './AboutHerosection'
import Aboutsection1 from './Aboutsection1'
import Aboutsection2 from './Aboutsection2'
import Aboutsection3 from './Aboutsection3'
import Aboutsection4 from './Aboutsection4'
import MetaTags from '../../Core/Metatags'
import { Helmet } from 'react-helmet'


export default function Aboutus() {
  return (
    <>
    <MetaTags/>

    <Helmet>
        <title>Biomed International | About Us & Our Commitment</title>
        <meta name="description" content="Biomed International is a trusted manufacturer of Chondroitin Sulfate Sodium and Collagen. Serving pharmaceutical, nutraceutical, and food supplement industries globally since 2014." />
        <meta name="keywords" content="Biomed International, Chondroitin Sulfate Sodium, Collagen manufacturer, life sciences, pharmaceutical manufacturing, nutraceutical suppliers" />
    {/* 
        <!-- Open Graph (Facebook, WhatsApp, LinkedIn) --> */}
        <meta property="og:title" content="Biomed International | About Us & Our Commitment" />
        <meta property="og:description" content="Biomed International is a trusted manufacturer of Chondroitin Sulfate Sodium and Collagen. Serving pharmaceutical, nutraceutical, and food supplement industries globally since 2014." />
        <meta property="og:image" content="https://images.theconversation.com/files/675612/original/file-20250620-56-novrkv.jpg?ixlib=rb-4.1.0&rect=300%2C0%2C5340%2C2567&q=45&auto=format&w=668&h=324&fit=crop" />
        <meta property="og:url" content="https://bio-med.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Biomed International | About Us & Our Commitment" />
        <meta name="twitter:description" content="Biomed International is a trusted manufacturer of Chondroitin Sulfate Sodium and Collagen. Serving pharmaceutical, nutraceutical, and food supplement industries globally since 2014." />
    </Helmet>




        <AboutHerosection/>
        <Aboutsection1/>
        <Aboutsection2/>
        <Aboutsection3/>
        <Aboutsection4/>
    </>
  )
}

import React from 'react'
import Productsectionhero from './Productsectionhero'
import Infrastructure3 from '../../InfrastructurePage/Infrastructure3'
import Productsection12 from '../ProductSection1/Productsection12'
import Productsection21 from './Productsection21'
import ProductSection22 from './ProductSection22'
import { Helmet } from 'react-helmet'

export default function ProductSection2() {
  return (
    <>

    <Helmet>
        <title>Structure of Collagen | Biomed International</title>
        <meta name="description" content="Learn about the chemical structure, formula, and key capabilities of Collagen and Biomed International's manufacturing processes." />
        <meta property="og:title" content="Structure of Collagen | Biomed International" />
        <meta property="og:description" content="Biomed International’s advanced manufacturing facilities and research for collagen and related supplements." />
        <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      
    <Productsectionhero/>
    <Infrastructure3/>
    <Productsection21/>
     <Productsection12/>
     <ProductSection22/>

    </>
  )
}

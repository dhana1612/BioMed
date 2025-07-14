import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from '../Compontents/Main/Main'
import { Home } from '../Compontents/Home'
import InfrastructurePage from '../Compontents/InfrastructurePage/InfrastructurePage'
import Aboutus from '../Compontents/Aboutus/Aboutus'
import Homesection from '../Compontents/Home/Homesection'
import Productsection1 from '../Compontents/Product/ProductSection1/Productsection1'
import ProductSection2 from '../Compontents/Product/ProductSection2/ProductSection2'
import Contact from '../Compontents/Contact/Contact'
import MetaTags from '../Core/Metatags'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <MetaTags/>
    <Routes>
         <Route element={<Main/>}>
          <Route path="/" element={<Homesection/>} />
           <Route path="/infrastructure" element={<InfrastructurePage/>} />
           <Route path="/about-us" element={<Aboutus/>} />
           <Route path="/product/chondroitin-sulfate-sodium" element={<Productsection1/>} />
           <Route path="/product/collagen" element={<ProductSection2/>} />
           <Route path="/contact" element={<Contact/>} />
         </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter


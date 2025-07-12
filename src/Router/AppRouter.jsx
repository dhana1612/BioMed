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

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
         <Route element={<Main/>}>
          <Route path="/" element={<Homesection/>} />
           <Route path="/Infrastructure" element={<InfrastructurePage/>} />
           <Route path="/About Us" element={<Aboutus/>} />
           <Route path="/Product/Chrondroitin Sulfate sodium" element={<Productsection1/>} />
           <Route path="/Product/Collagen" element={<ProductSection2/>} />
           <Route path="/Contact" element={<Contact/>} />
         </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter


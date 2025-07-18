import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from '../../Core/Header/Header'
import { Footer } from '../../Core/Footer/Footer'
import ScrollToTopButton from '../ScrollToTopButton '

export const Main = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet></Outlet>
    </main>
     <ScrollToTopButton/>
    <Footer/>
    </>
  )
}

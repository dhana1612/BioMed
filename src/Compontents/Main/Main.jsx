import React from 'react'
import { Outlet } from 'react-router-dom'
import  Header  from '../../Core/Header/Header'
import { Footer } from '../../Core/Footer/Footer'

export const Main = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet></Outlet>
    </main>
    <Footer/>
    </>
  )
}

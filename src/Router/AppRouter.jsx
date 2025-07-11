import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from '../Compontents/Main/Main'
import { Home } from '../Compontents/Home'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
         <Route element={<Main/>}>
          <Route path="/" element={<Home/>} />
         </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter


import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'

function layout() {
  return (
  <>

   <Header />
   <Outlet />
   <About/>
   <Contact/>
   <User/>
   <Footer />

  </>
  )
}

export default layout
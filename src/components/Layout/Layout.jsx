import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer"
import Routers from "../../routers/Routers"
/* import Home_div from '../Home_Div/Home_div' */


const Layout = () => {
  return (
    <>
      <Navbar/>
       
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout

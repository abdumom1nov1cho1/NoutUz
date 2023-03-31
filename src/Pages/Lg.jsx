import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Navbar2 from '../Components/Navbar2Page/Navbar2'
import Navtel from '../Components/Navtel/Navtel'
import LgText from "../Components/Lg/LgText"


const Lg = () => {
  return (
    <div>
        <Navtel/>
        <Navbar/>
        <Navbar2/>
        <LgText/>
    </div>
  )
}

export default Lg
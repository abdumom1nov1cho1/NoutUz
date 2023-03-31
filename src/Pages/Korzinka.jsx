import React from 'react'
import KorzinkaText from '../Components/KorzinkaText/KorzinkaText'
import Navbar from '../Components/Navbar/Navbar'
import Navbar2 from '../Components/Navbar2Page/Navbar2'
import Navtel from '../Components/Navtel/Navtel'

const Korzinka = () => {
  return (
    <div>
        <Navtel/>
        <Navbar/>
        <Navbar2/>
        <KorzinkaText/>
    </div>
  )
}

export default Korzinka
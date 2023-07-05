import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const config = useSelector(state=>state.configuration?.configuration)

  let mainColor = config.mainColor
 
  return (
    <header style={{backgroundColor: `${mainColor}`}} className='flex justify-between p-5 items-center'>
      <img src={config.logo} alt="" className='max-h-8'/>
      <nav >
        <ul className='flex gap-3 text-white'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/product'>Product</NavLink></li>
          </ul> 
      </nav>
    </header>
  )
}

export default Navbar
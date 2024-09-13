import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'

export default function Header() {
  return (
    <div className='header'>
      <Navbar />
      <Landing />
    </div>
  )
}

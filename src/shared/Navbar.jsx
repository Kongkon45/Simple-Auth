import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-blue-500 flex justify-center items-center gap-10 h-12'>
            <Link className='text-white font-bold text-2xl ' to="/">Home</Link>
            <Link className='text-white font-bold text-2xl ' to="/about">About</Link>
            <Link className='text-white font-bold text-2xl ' to="/login">Login</Link>
        </nav>
    </div>
  )
}

export default Navbar
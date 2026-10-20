import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-5 h-15 bg-gray-900 text-white'>
        <div className="logo font-bold text-2xl">GetMeaChai!</div>
        <ul className='flex gap-5 justify-between'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sing Up</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar
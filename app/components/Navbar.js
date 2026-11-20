import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-5 h-15 bg-gray-900 text-white'>
        <div className="logo font-bold text-xl flex items-center ">
          <img src="tea.gif" alt="" width={40}/>
          <span>GetMeaChai!</span>
          </div>
        {/* <ul className='flex gap-5 justify-between'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sing Up</li>
            <li>Login</li>
        </ul> */}
        <Link href="/login">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"
          >
            Login
          </button>
        </Link>
    </nav>
  )
}

export default Navbar
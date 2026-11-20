"use client"
import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className='flex justify-between items-center px-5 h-15 bg-gray-900 text-white'>
      <Link href="/" className="logo font-bold text-xl flex items-center">
        <img src="/tea.gif" alt="logo" width={40} />
        <span>GetMeaChai!</span>
      </Link>

      <div className="flex items-center gap-4">
        {session ? (
          <>
            <span>Signed in as {session.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2.5"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  
  return (
    <nav className="flex justify-between items-center px-5 h-15 bg-gray-900 text-white">
      <Link href="/" className="logo font-bold text-xl flex items-center">
        <img src="/tea.gif" alt="logo" width={40} />
        <span>GetMeaChai!</span>
      </Link>

      <div className="flex items-center gap-4">
        {session && (
          <div className="relative group">
            {/* Dropdown button */}
            <button
              type="button"
              className="inline-flex items-center gap-2  hover:bg-gray-800 px-4 py-2.5 rounded-xl transition"
            >
              Welcome {session.user.email}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              className="absolute right-0 top-full pt-2 w-48 invisible opacity-0 translate-y-2
      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-200 z-50"
            >
              <ul className="border border-gray-700 rounded-xl shadow-xl p-2">
                <li>
                  <Link
                    href="/deshboard"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    href="/myPage"
                    className="block px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    Your Page
                  </Link>
                </li>

                <li>
                  <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!session && (
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

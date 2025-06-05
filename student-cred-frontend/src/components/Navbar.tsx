
'use client';

import Link from "next/link";
import { useState } from "react";

import React from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="hidden md:flex space-x-6">
                    <Link href='/' className="hover:text-gray-200" >Home</Link>
                    <Link href='/students/list' className="hover:text-gray-200" >Student List</Link>
                    <Link href='/students/add' className="hover:text-gray-200" >New Student</Link>
                </div>
                <button className="md:hidden flex items-center" onClick={toggleMenu}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>
        {isOpen && (
            <div className="md:hidden bg-blue-600" >
                <Link href='/' onClick={toggleMenu}   className="block px-4 py-2 hover:bg-blue-700">Home</Link>
                <Link href='/students/list' onClick={toggleMenu}   className="block px-4 py-2 hover:bg-blue-700">Students List</Link>
                <Link href='/students/add' onClick={toggleMenu}   className="block px-4 py-2 hover:bg-blue-700">Create Student</Link>
            </div>
        )}
        </nav>
    )
}

export default Navbar

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Akademi Trading Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/courses" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Courses
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/login" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Register
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/courses" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Courses
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Contact
            </Link>
            <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Login
            </Link>
            <Link href="/register" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 
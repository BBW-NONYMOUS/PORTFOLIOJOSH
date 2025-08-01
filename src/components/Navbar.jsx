import React, { useEffect, useState} from 'react'

// CommonJS
// const AOS = required('aos');

// Module AOS
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        AOS.init({duration: 1000})
    })

      const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
     <div className="bg-slate-900 w-full fixed top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <h2 className="font-mono text-2xl sm:text-3xl text-white" data-aos="fade-right">JosHua</h2>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex justify-between items-center space-x-8 text-lg text-white">
                        <li><a href="#" className="hover:text-green-300 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">About Me</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">Project</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors">Contact</a></li>
                    </ul>

                    {/* Sign Up Button (Desktop) */}
                    <div className="hidden md:block">
                        <a
                            href="#"
                            className="inline-block w-[120px] sm:w-[130px] py-2 bg-green-300 text-white font-bold text-center rounded-xl hover:bg-green-400 transition-colors border border-gray-600"
                            data-aos="fade-left"
                        >
                            Sign Up
                        </a>
                    </div>

                    {/* Hamburger Button (Mobile) */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                            data-aos="fade-left"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                                />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-900 transition-all duration-300`}>
                    <ul className="flex flex-col items-center space-y-4 py-4 text-lg text-white">
                        <li><a href="#" className="hover:text-green-300 transition-colors" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors" onClick={toggleMenu}>About Me</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors" onClick={toggleMenu}>Project</a></li>
                        <li><a href="#" className="hover:text-green-300 transition-colors" onClick={toggleMenu}>Contact</a></li>
                        <li>
                            <a
                                href="#"
                                className="inline-block w-[120px] py-2 bg-green-300 text-white font-bold text-center rounded-xl hover:bg-green-400 transition-colors border border-gray-600"
                                onClick={toggleMenu}
                            >
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

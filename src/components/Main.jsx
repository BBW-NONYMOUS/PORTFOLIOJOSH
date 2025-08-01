import React, { useEffect } from 'react'
import AOS from 'aos'
import Profile from '../assets/images/joshua.png'

export default function Main() {


    useEffect(()=>{
        AOS.init({duration:1000,
            delay: 2,
            once: true
        })
    })
  return (
      <div className="pt-20 sm:pt-24 lg:pt-32">
            <div className="relative container mx-auto px-4 sm:px-6 py-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 overflow-hidden" data-aos="fade-up">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 leading-tight" data-aos="fade-up">
                        Future Developer
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 leading-relaxed text-justify md:text-left">
                      My name is Joshua Legada, a professional with a quite strong background in 
                      software development, graphic design,
                       I am passionate about delivering innovative solutions and driving growth through technology and design.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img 
                        src = {Profile} // Adjusted path for static assets
                        alt="Profile"
                        className="w-3/4 sm:w-2/3 md:w-4/5 lg:w-3/4 h-auto rounded-full shadow-xl shadow-slate-500 mt-4 md:mt-7"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    />
                </div>
            </div>
        </div>
  )
}

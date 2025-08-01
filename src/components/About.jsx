import React, { useEffect } from "react";
import AOS from 'aos'
import NodeJs from '../assets/images/Nodejs.png'
import ReactJs from '../assets/images/ReactJs.png'
import Tailwind from '../assets/images/Tailwind.png'
import MongoDb from '../assets/images/MongoDb.png'
import Mysql from '../assets/images/Mysql.png'
import Html from '../assets/images/Html.png'

// import Mongodb from '../assets'



export default function About() {
  const cards = [
    {
      title: "NodeJs",
      description: "BackEnd",
      image: NodeJs,
    },
    {
      title: "ReactJs",
      description: "FrontEnd / UI",
      image: ReactJs,
    },
    {
      title: "Tailwind",
      description: "Tailwind is unapologetically modern",
      image: Tailwind,
    },
    {
      title: "MongoDB",
      description: "Non SQL / Non Structure Query Language",
      image: MongoDb,
    },
    {
      title: "Mysql Workbench",
      description: "Structure Query Language",
      image: Mysql,
    },
    {
      title: "Html",
      description: "Structure Element",
      image: Html,
    },
  ];


  useEffect(()=>{
    AOS.init({duration: 3000,
      once: false
    })
  })

  return (
    <div id="About" className="relative w-full my-10 h-full border mt-28 rounded-md bg-slate-200">
      <div className="mt-8">
        <div className="text-center ">
          <h1 className="font-extrabold text-4xl ">About Me</h1>
        </div>

        {/* Card About */}
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 ">{card.description}</p>
                  <button className="mt-4 bg-blue-500 font-medium text-white px-4 py-2 rounded hover:bg-green-400 transition duration-200">
                    <a href="#">Learn More</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

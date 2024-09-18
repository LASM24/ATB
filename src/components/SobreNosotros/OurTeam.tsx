'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import personasData from "../../api/sobreNosotros/equipoTrabajo.json"

interface Persona {
  id: number;
  "name?": string;
  "url?": string;
  "info?": string;
  "role?"?: string;  // Added this line to include the role property
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const personas: Persona[] = personasData

  const nextPerson = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % personas.length)
  }

  const prevPerson = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + personas.length) % personas.length)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-100 to-pink-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-amber-800 relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Nuestro Equipo
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500"></span>
        </motion.h2>

        <div className="flex justify-center items-center">
          <button 
            onClick={prevPerson} 
            className="p-2 rounded-full bg-amber-200 text-amber-800 hover:bg-amber-300 transition-colors"
            aria-label="Previous team member"
          >
            <ChevronLeft size={24} />
          </button>

          <motion.div 
            className="w-64 h-80 mx-4 perspective"
            key={currentIndex}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="relative w-full h-full transition-transform duration-500 transform-style-3d hover:rotate-y-180">
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-yellow-50 to-pink-50 rounded-lg shadow-xl p-4 flex flex-col items-center justify-center">
                <Image
                  src={personas[currentIndex]["url?"] || "/placeholder.svg"}
                  alt={personas[currentIndex]["name?"] || "Team member"}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{personas[currentIndex]["name?"] || "Team Member"}</h3>
                <p className="text-gray-600 text-sm">{personas[currentIndex]["role?"] || "Team Role"}</p>
              </div>
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-tl from-yellow-50 to-pink-50 rounded-lg shadow-xl p-4 flex flex-col items-center justify-center rotate-y-180">
                <p className="text-amber-800 text-center">{personas[currentIndex]["info?"] || "No information available"}</p>
              </div>
            </div>
          </motion.div>

          <button 
            onClick={nextPerson} 
            className="p-2 rounded-full bg-amber-200 text-amber-800 hover:bg-amber-300 transition-colors"
            aria-label="Next team member"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          {personas.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-amber-500' : 'bg-amber-200'
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
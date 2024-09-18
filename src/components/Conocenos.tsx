'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll } from 'framer-motion'
import { TreePalm } from 'lucide-react'; // Aquí tu logo

const verbs = ['innovar', 'crecer', 'transformar', 'liderar']

interface ConocenosProps {
  conocenosRef?: React.RefObject<HTMLDivElement>; // Agrega la prop `conocenosRef` aquí
}

export function Conocenos({ conocenosRef }: ConocenosProps) {
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerbIndex((prevIndex) => (prevIndex + 1) % verbs.length)
    }, 2000) // Intervalo de 2 segundos

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const logoScroll = () => {
      if (conocenosRef?.current) {
        conocenosRef.current.style.transform = `translateX(${-scrollYProgress.get() * 100}px)`
      }
    }
    return scrollYProgress.onChange(logoScroll)
  }, [scrollYProgress, conocenosRef])

  return (
    <section ref={conocenosRef} className="py-12 md:py-28 bg-gradient-to-r from-yellow-100 to-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-[60px] md:pt-0">
          
          {/* Ajuste del logo */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-3/4 md:w-1/4 flex justify-center md:justify-end"
          >
            <TreePalm size={150} className="text-[#556b2f]" /> {/* Ajuste del tamaño del logo */}
          </motion.div>

          {/* Ajuste del texto */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-3/4 space-y-6 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#4a3c31]">
              Nuestra empresa se dedica a impulsar negocios para{' '}
              <motion.span 
                key={currentVerbIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}  // Duración de la transición
                className="text-[#556b2f] inline-block"
              >
                {verbs[currentVerbIndex]}  {/* Verbo actual */}
              </motion.span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

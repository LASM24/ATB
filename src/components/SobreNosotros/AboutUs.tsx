'use client'

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Plane, Heart, Globe, Users } from "lucide-react"
import textosData from "../../api/sobreNosotros/SobreNosotros.json"

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
}

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const iconAnimation = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export function AboutUs() {
  const { texts } = textosData
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const icons = [
    { Icon: Plane, color: "text-blue-500" },
    { Icon: Heart, color: "text-red-500" },
    { Icon: Globe, color: "text-green-500" },
    { Icon: Users, color: "text-purple-500" }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-100 to-pink-100">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        ref={ref}
      >
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-amber-800 relative"
          variants={slideIn}
        >
          Sobre Nosotros
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {texts.map((texto, index) => (
            <motion.div 
              key={texto.id} 
              className={`bg-white bg-opacity-60 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center ${index === 2 ? 'md:col-span-2 mx-auto max-w-[600px]' : ''}`}
              variants={slideIn}
              custom={index}
            >
              <motion.div
                className="mb-4"
                variants={iconAnimation}
              >
                {React.createElement(icons[index % icons.length].Icon, { 
                  size: 48, 
                  className: `${icons[index % icons.length].color}`
                })}
              </motion.div>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                {texto.texto1}
                {texto.texto2 && <><br /><br />{texto.texto2}</>}
                {texto.texto3 && <><br /><br />{texto.texto3}</>}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          variants={fadeIn}
        >
          <h3 className="text-3xl font-semibold text-amber-800 mb-4">Nuestros Valores</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {['Pasión', 'Innovación', 'Sostenibilidad', 'Comunidad'].map((valor, index) => (
              <motion.div 
                key={valor}
                className="flex flex-col items-center"
                variants={iconAnimation}
                custom={index}
              >
                {React.createElement(icons[index].Icon, { 
                  size: 36, 
                  className: `${icons[index].color} mb-2`
                })}
                <span className="text-lg font-medium text-gray-700">{valor}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
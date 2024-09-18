'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Star } from 'lucide-react'

interface ServiceItemProps {
  title: string
  description: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  const icons = [Sun, Moon, Star]
  const Icon = icons[Math.floor(Math.random() * icons.length)]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden group rounded-lg border border-gray-200 shadow-md bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative z-10 p-6 space-y-4"
      >
        <div className="flex justify-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Star className="w-6 h-6 text-yellow-500 fill-current" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ServiceItem

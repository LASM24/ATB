"use client";

import React, { useRef, useState, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { X, MapPin, Clock, Users, Check } from "lucide-react";

import destinosBD from "../api/destinos/imgs.json";

interface Destino {
  id: number;
  name: string;
  image: string;
  descripcion: string;
  link: string;
  duracion: string;
  grupoMaximo: number;
  ubicacion: string;
  precio: number;
}

interface DestinosProps {
  destinosRef?: RefObject<HTMLDivElement>;
}

export const Destinos: React.FC<DestinosProps> = ({ destinosRef }) => {
  const [selectedDestino, setSelectedDestino] = useState<Destino | null>(null);

  return (
    <section
      ref={destinosRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#f3f4f6] flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-yellow-100 to-pink-100 animate-fadeIn" />
      
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
        <div className="relative z-30 w-full h-[60vh]">
          <Cards destinos={destinosBD} onSelectDestino={setSelectedDestino} />
        </div>
        
        <h2 className="text-[20vw] font-black text-[#1f2937] md:text-[200px] text-center mt-8 mb-5">
          DESTINOS<span className="text-indigo-500">.</span>
        </h2>
      </div>

      <EnhancedTourPackageDialog
        isOpen={!!selectedDestino}
        onClose={() => setSelectedDestino(null)}
        paquete={selectedDestino!}
        allPaquetes={destinosBD}
      />
    </section>
  );
};

const Cards = ({ destinos, onSelectDestino }: { destinos: Destino[], onSelectDestino: (destino: Destino) => void }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div 
      className="relative w-full h-full"
      ref={containerRef}
    >
      {destinos.map((destino) => (
        <Card
          key={destino.id}
          containerRef={containerRef}
          destino={destino}
          rotate={`${Math.floor(Math.random() * 20) - 10}deg`}
          top={`${Math.floor(Math.random() * 60)}%`}
          left={`${Math.floor(Math.random() * 80)}%`}
          className="w-36 md:w-56 "
          onClick={() => onSelectDestino(destino)}
        />
      ))}
    </div>
  );
};

// ... (El resto del código permanece igual)


const Card = ({
  containerRef,
  destino,
  top,
  left,
  rotate,
  className,
  onClick,
}: any) => {
  const [zIndex, setZIndex] = useState<number>(100); // Default zIndex to 1

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = Math.max(
      ...Array.from(els).map(
        (el) => parseInt(window.getComputedStyle(el).zIndex) || 100
      )
    );
    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex, // Ensure zIndex is applied correctly
      }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200 p-1 pb-4 cursor-pointer",
        className
      )}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      onClick={onClick}
    >
      <Image
        src={destino.image}
        alt={destino.name}
        width={224}
        height={224}
        style={{ objectFit: "cover" }}
      />
      <p className="mt-2 text-center font-semibold">{destino.name}</p>
    </motion.div>
  );
};

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  paquete: Destino;
  allPaquetes: Destino[];
}

const EnhancedTourPackageDialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  paquete,
  allPaquetes,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-white w-full max-w-7xl rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
              <div className="relative h-96 lg:h-full">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={paquete.image}
                    alt={paquete.name}
                    layout="fill"
                    style={{ objectFit: "cover" }}
                    className="brightness-75"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:text-yellow-300 transition-colors"
                  aria-label="Cerrar diálogo"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {paquete.name}
                  </h2>
                  <div className="flex items-center text-yellow-300 space-x-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{paquete.ubicacion}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{paquete.duracion}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>Max. {paquete.grupoMaximo} personas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 bg-gradient-to-br from-yellow-50 to-pink-50 overflow-y-auto max-h-[calc(100vh-2rem)]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Comparación de Paquetes
              </h3>
              <div className="space-y-6">
                {allPaquetes.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pkg.id * 0.1 }}
                    className={`p-4 rounded-lg ${
                      pkg.id === paquete.id
                        ? "bg-yellow-100 border-2 border-yellow-400"
                        : "bg-white"
                    }`}
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {pkg.name}
                    </h4>
                    <p className="text-gray-600 mb-2">{pkg.descripcion}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-yellow-600">
                        ${pkg.precio}
                      </span>
                      {pkg.id === paquete.id ? (
                        <span className="text-green-500 font-semibold flex items-center">
                          <Check size={20} className="mr-1" /> Seleccionado
                        </span>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors"
                          onClick={() => {
                            onClose();
                            // Aquí podrías agregar lógica para cambiar el paquete seleccionado
                          }}
                        >
                          Seleccionar
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Lo que incluye:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Guía turístico profesional</li>
                  <li>Entradas a atracciones principales</li>
                  <li>Transporte cómodo y seguro</li>
                  <li>Experiencias culturales únicas</li>
                </ul>
              </div>
              <div className="mt-8 flex justify-center">
                <motion.a
                  href={paquete.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reservar Ahora
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

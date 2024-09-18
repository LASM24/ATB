import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlane as Plane, FaBriefcase as Briefcase } from "react-icons/fa"; // Importación de iconos
import { StatCard } from "./StatCard";
import ServiceItem from "./ServiceItem";
import { FAQItem } from "./FAQItem";

interface TabContentProps {
  activeTab: string;
}

const tabData = [
  { id: "stats", label: "Estadísticas", icon: Plane },
  { id: "services", label: "Servicios", icon: Briefcase },
  { id: "faq", label: "FAQ", icon: Plane }, // Cambia el icono si es necesario
];

export const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const [selectedTab, setSelectedTab] = useState<string>(activeTab);

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <div className=" bg-gradient-to-r from-yellow-100 to-pink-100 pb-15	">
      {/* Button for mobile devices */}
      <div className="sm:hidden">
        <select
          className="w-full p-2.5 text-gray-900 bg-white border border-yellow-500 rounded-md shadow-sm outline-none appearance-none focus:border-yellow-600"
          onChange={(e) => handleTabClick(e.target.value)}
          value={selectedTab}
        >
          {tabData.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs for desktop */}
      <ul className="hidden bg-white text-sm font-medium text-center text-gray-900 divide-x divide-gray-300 rounded-lg sm:flex">
        {tabData.map((tab) => (
          <li key={tab.id} className="w-full">
            <button
              onClick={() => handleTabClick(tab.id)}
              className={`inline-flex items-center justify-center w-full p-4 border rounded-lg ${
                selectedTab === tab.id
                  ? "text-yellow-600 bg-white border-yellow-500"
                  : "text-gray-900 border-transparent hover:text-yellow-600 hover:bg-yellow-50 hover:border-yellow-500"
              } focus:outline-none transition-colors`}
              aria-controls={tab.id}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Display tab content */}
      {selectedTab === "stats" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard icon={Plane} value="100+" label="Destinos" />
            <StatCard
              icon={Briefcase}
              value="10K+"
              label="Clientes satisfechos"
            />
            <StatCard icon={Plane} value="50+" label="Aerolíneas asociadas" />
          </div>
        </motion.div>
      )}

      {selectedTab === "services" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg  shadow-lg"
        >
        
              <ServiceItem
                title="Paquetes todo incluido personalizados"
                description="Diseñamos paquetes de viaje personalizados que incluyen todo lo que necesitas para una experiencia perfecta."
              />
              <ServiceItem
                title="Atención al cliente 24/7"
                description="Estamos disponibles para ayudarte en cualquier momento del día, antes, durante y después de tu viaje."
              />
              <ServiceItem
                title="Asesoría personalizada en viajes"
                description="Nuestros asesores te ayudarán a planificar cada detalle de tu viaje, adaptándolo a tus necesidades y preferencias."
              />
           
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Contáctanos para más detalles
            </a>
          </div>
        </motion.div>
      )}

      {selectedTab === "faq" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FAQItem
            question="¿Qué paquetes ofrecen?"
            answer="Ofrecemos paquetes todo incluido que incluyen vuelos, hoteles y actividades."
          />
          <FAQItem
            question="¿Cómo puedo personalizar mi viaje?"
            answer="Puedes elegir entre diferentes opciones de alojamiento, actividades y transporte para diseñar tu viaje ideal."
          />
          <FAQItem
            question="¿Qué métodos de pago aceptan?"
            answer="Aceptamos tarjetas de crédito, débito y pagos a través de plataformas digitales como PayPal."
          />
        </motion.div>
      )}
    </div>
  );
};

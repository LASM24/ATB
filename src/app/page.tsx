"use client";

import React, { useRef } from "react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header/Header"; // Ruta asegurada
import { Conocenos } from "../components/Conocenos";
import { Destinos } from "../components/Destinos";
import { SobreNosotros } from "../components/SobreNosotros";
import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import { TabContent } from '../components/info/TabContent'; // Ruta asegurada

export default function Page() {
  const conocenosRef = useRef<HTMLDivElement>(null);
  const destinosRef = useRef<HTMLDivElement>(null);
  const sobreNosotrosRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeTab = "stats"; 

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        conocenosRef={conocenosRef}
        destinosRef={destinosRef}
        sobreNosotrosRef={sobreNosotrosRef}
        contactoRef={contactoRef}
        headerRef={headerRef}
      />
      <div style={{ marginTop: "-95px" }}>
        <Header
          scrollToSection={scrollToSection}
          destinosRef={destinosRef}
          headerRef={headerRef}
          conocenosRef={conocenosRef}
          sobreNosotrosRef={sobreNosotrosRef}
          contactoRef={contactoRef}
        />
        <Conocenos conocenosRef={conocenosRef} />
        <TabContent activeTab={activeTab} />
        <Destinos destinosRef={destinosRef} />
        <SobreNosotros sobreNosotrosRef={sobreNosotrosRef} />
        <Contacto contactoRef={contactoRef} />
        <Footer />
        <WhatsappButton
          onClick={() => {
            window.open("https://wa.me/1234567890", "_blank");
          }}
        />
      </div>
    </div>
  );
}

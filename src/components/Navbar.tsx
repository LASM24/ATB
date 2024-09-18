import React, { useState, useEffect } from "react";
import { TreePalm } from "lucide-react";

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  conocenosRef: React.RefObject<HTMLDivElement>;
  destinosRef: React.RefObject<HTMLDivElement>;
  sobreNosotrosRef: React.RefObject<HTMLDivElement>;
  contactoRef: React.RefObject<HTMLDivElement>;
  headerRef?: React.RefObject<HTMLDivElement>;
}

export function Navbar({
  scrollToSection,
  conocenosRef,
  destinosRef,
  sobreNosotrosRef,
  contactoRef,
  headerRef,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const scrollPosition = window.scrollY;

      if (
        conocenosRef.current &&
        scrollPosition >= conocenosRef.current.offsetTop &&
        (!destinosRef.current || scrollPosition < destinosRef.current.offsetTop)
      ) {
        setActiveSection("conocenos");
      } else if (
        destinosRef.current &&
        scrollPosition >= destinosRef.current.offsetTop &&
        (!sobreNosotrosRef.current ||
          scrollPosition < sobreNosotrosRef.current.offsetTop)
      ) {
        setActiveSection("destinos");
      } else if (
        sobreNosotrosRef.current &&
        scrollPosition >= sobreNosotrosRef.current.offsetTop &&
        (!contactoRef.current || scrollPosition < contactoRef.current.offsetTop)
      ) {
        setActiveSection("sobreNosotros");
      } else if (
        contactoRef.current &&
        scrollPosition >= contactoRef.current.offsetTop
      ) {
        setActiveSection("contacto");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [conocenosRef, destinosRef, sobreNosotrosRef, contactoRef]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex flex-1 items-center justify-between">
          {/* Logo y responsive */}
          <div className="flex-1 flex justify-center md:justify-start">
            <a className="flex items-center space-x-2" href="/">
              <TreePalm
                className={`h-6 w-6 transition-colors duration-100 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
              <span
                className={`font-bold text-xl transition-colors duration-100 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                ATB
              </span>
            </a>
          </div>
          {/* Nav buttons */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => headerRef && scrollToSection(headerRef)}
              className={`relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-yellow-400 before:rounded-full before:transition-all before:duration-300 hover:before:w-full ${
                activeSection === "inicio"
                  ? "font-bold text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection(conocenosRef)}
              className={`relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-yellow-400 before:rounded-full before:transition-all before:duration-300 hover:before:w-full ${
                activeSection === "conocenos"
                  ? "font-bold text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Conócenos
            </button>
            <button
              onClick={() => scrollToSection(destinosRef)}
              className={`relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-yellow-400 before:rounded-full before:transition-all before:duration-300 hover:before:w-full ${
                activeSection === "destinos"
                  ? "font-bold text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Nuestros Destinos
            </button>
            <button
              onClick={() => scrollToSection(sobreNosotrosRef)}
              className={`relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-yellow-400 before:rounded-full before:transition-all before:duration-300 hover:before:w-full ${
                activeSection === "sobreNosotros"
                  ? "font-bold text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection(contactoRef)}
              className={`relative transition-colors duration-300 before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-0.5 before:bg-yellow-400 before:rounded-full before:transition-all before:duration-300 hover:before:w-full ${
                activeSection === "contacto"
                  ? "font-bold text-yellow-400"
                  : isScrolled
                  ? "text-black hover:text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Contacto
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { TreePalm, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="ft py-8 bg-amber-800 text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <TreePalm className="h-6 w-6 text-white" />
          <span className="font-bold text-xl">ATB</span>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-gray-300 mt-4 md:mt-0">&copy; 2024 ATB. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

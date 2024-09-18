// src/components/WhatsappButton.tsx

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"; 

interface WhatsappButtonProps {
  onClick?: () => void;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8">
      <Button 
        onClick={onClick} 
        className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center shadow-lg"
      >
        <MessageCircle size={24} className="md:size-32 lg:size-36" />
      </Button>
    </div>
  );
};

export default WhatsappButton;

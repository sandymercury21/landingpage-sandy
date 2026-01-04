
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const waNumber = "628326717759";
  const message = encodeURIComponent("Halo Sandy, saya tertarik untuk mendiskusikan proyek web development.");
  const waUrl = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <a 
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all z-40 transform hover:scale-110 active:scale-95 flex items-center gap-2 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
        Chat via WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;

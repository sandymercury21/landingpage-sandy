
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              Sandy Irawan, M.Kom
            </p>
            <p className="text-slate-400 max-w-xs text-sm">
              Fullstack Developer, Lecturer, & Drummer. Membangun infrastruktur digital Indonesia sejak 2012.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">Tentang</a>
            <a href="#portfolio" className="text-slate-400 hover:text-white transition-colors">Proyek</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Kontak</a>
          </div>
          
          <div className="text-slate-400 text-sm">
            &copy; {currentYear} Sandy Irawan, S.Kom, M.Kom. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

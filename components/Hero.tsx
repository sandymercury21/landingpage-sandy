
import React from 'react';
import { ArrowRight, Code, ShieldCheck, Zap, Layers, MessageCircle, Database, BookOpen, Music } from 'lucide-react';

const Hero: React.FC = () => {
  const waUrl = "https://wa.me/628326717759?text=Halo%20Sandy%2C%20saya%20tertarik%20untuk%20bekerja%20sama.";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 animate-fade-in">
              <ShieldCheck size={16} className="mr-2" />
              Senior Developer Sejak 2012
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Sandy Irawan, <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                S.Kom, M.Kom
              </span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                <Code size={14} /> Fullstack Developer
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                <BookOpen size={14} /> Lecturer
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                <Music size={14} /> Drummer
              </span>
            </div>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-xl text-slate-600 mb-10 leading-relaxed">
              Membangun infrastruktur digital yang handal mulai dari sistem antrian perbankan nasional, 
              platform akademik kampus, hingga implementasi Machine Learning dengan Python.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50 transform hover:-translate-y-1"
              >
                Hire Me Now <MessageCircle className="ml-2" size={20} />
              </a>
              <a 
                href="#portfolio" 
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Lihat Portofolio <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>

          <div className="relative group max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Sandy Irawan, S.Kom, M.Kom" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-xl font-bold">Sandy Irawan, M.Kom</p>
                <p className="text-sm opacity-80">Fullstack Dev | Lecturer | Drummer</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce hidden sm:block">
              <BookOpen size={32} className="text-blue-600" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-pulse hidden sm:block">
              <Music size={32} className="text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

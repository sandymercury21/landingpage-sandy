
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Short */}
        <section id="about" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]"></div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl font-bold mb-6">Dedikasi & Akademisi</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  "Sebagai lulusan M.Kom, saya tidak hanya membangun aplikasi, tetapi juga mendalami riset teknologi. 
                  Dari pengelolaan sistem rumah sakit nasional hingga pengajaran di kampus, saya memadukan teori akademis 
                  dengan implementasi industri yang tangguh."
                </p>
                <div className="flex gap-12">
                  <div>
                    <p className="text-4xl font-bold text-blue-400">12+</p>
                    <p className="text-slate-400 text-sm">Tahun Dedikasi</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-indigo-400">Master</p>
                    <p className="text-slate-400 text-sm">Ilmu Komputer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;

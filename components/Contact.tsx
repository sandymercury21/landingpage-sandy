
import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const waNumber = "+628326717759";
  const email = "sandymercury21@gmail.com";
  const waUrl = "https://wa.me/628326717759?text=Halo%20Sandy%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20saya.";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ayo Berkolaborasi</h2>
            <p className="text-slate-600 text-lg mb-8">
              Butuh sistem antrian custom, aplikasi pemerintahan, atau solusi perbankan yang stabil? 
              Saya siap membantu mewujudkan infrastruktur digital perusahaan Anda dengan pengalaman matang sejak 2012.
            </p>

            <div className="space-y-6 mb-12">
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-4 group hover:bg-slate-50 p-3 rounded-2xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-bold text-slate-700">{email}</p>
                </div>
              </a>
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group hover:bg-slate-50 p-3 rounded-2xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <p className="font-bold text-slate-700">{waNumber}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Lokasi</p>
                  <p className="font-bold text-slate-700">Jawa Tengah, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all hover:bg-blue-50">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan Cepat</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="email@anda.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subjek Proyek</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Misal: Aplikasi Antrian Bank" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Pesan</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Detail kebutuhan Anda..."></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                Kirim via Email
              </button>
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> Chat WhatsApp Langsung
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

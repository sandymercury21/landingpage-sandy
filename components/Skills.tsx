
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Teknologi & Keahlian</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Berbagai teknologi yang saya gunakan untuk membangun sistem yang tangguh, 
            mulai dari aplikasi desktop legacy hingga aplikasi web modern berbasis cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mb-2">
                <div 
                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-400 text-right">{skill.level}% Proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

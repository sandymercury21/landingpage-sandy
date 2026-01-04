
import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Cpu, 
  Layout, 
  Smartphone,
  Server,
  Cloud,
  Terminal,
  BrainCircuit,
  BarChart3
} from 'lucide-react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aplikasi Antrian Bank Jateng',
    category: 'Banking',
    description: 'Sistem manajemen antrian real-time untuk efisiensi layanan nasabah di berbagai cabang Bank Jateng.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Real-time']
  },
  {
    id: '2',
    title: 'Aplikasi Antrian Bank BRI',
    category: 'Banking',
    description: 'Implementasi sistem antrian skala nasional untuk mengoptimalkan alur pelayanan Bank BRI.',
    tags: ['PHP', 'PostgreSQL', 'Socket.io']
  },
  {
    id: '3',
    title: 'Aplikasi Antrian Bank Mandiri',
    category: 'Banking',
    description: 'Solusi manajemen antrian modern untuk meningkatkan kepuasan nasabah Bank Mandiri.',
    tags: ['React JS', 'Supabase', 'Node.js']
  },
  {
    id: '11',
    title: 'Website Sistem Kampus Terpadu',
    category: 'Government',
    description: 'Platform akademik untuk manajemen perkuliahan, nilai, dan administrasi mahasiswa.',
    tags: ['React JS', 'PostgreSQL', 'Fullstack']
  },
  {
    id: '12',
    title: 'Portal Organisasi Islam',
    category: 'General',
    description: 'Website informasi, dakwah, dan manajemen anggota untuk organisasi keagamaan.',
    tags: ['HTML', 'PHP', 'Bootstrap']
  },
  {
    id: '13',
    title: 'Sistem Informasi Sekolah',
    category: 'General',
    description: 'Manajemen data guru, siswa, dan sistem absensi digital untuk sekolah menengah.',
    tags: ['PHP', 'MySQL', 'Bootstrap']
  },
  {
    id: '14',
    title: 'Company Profile Perusahaan Outsourcing',
    category: 'General',
    description: 'Landing page profesional dengan sistem manajemen rekrutmen tenaga kerja.',
    tags: ['React JS', 'Tailwind', 'Node.js']
  },
  {
    id: '15',
    title: 'Website Konsultan & Audit',
    category: 'General',
    description: 'Platform branding dan portfolio layanan konsultasi bisnis dan audit keuangan.',
    tags: ['JavaScript', 'CSS', 'PHP']
  },
  {
    id: '9',
    title: 'Aplikasi Produksi Kayu (Pabrik)',
    category: 'Industrial',
    description: 'Sistem pelacakan log dan manajemen produksi industri kayu dari hulu ke hilir.',
    tags: ['PHP', 'MySQL', 'Custom ERP']
  },
  {
    id: '4',
    title: 'Sistem Informasi Rumah Sakit & Klinik',
    category: 'Healthcare',
    description: 'Platform komprehensif untuk manajemen rekam medis dan pendaftaran pasien rawat jalan.',
    tags: ['Delphi', 'PostgreSQL', 'Report Builder']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python (ML/AI)', icon: <BrainCircuit size={20} />, level: 85 },
  { name: 'Statistik & Deep Learning', icon: <BarChart3 size={20} />, level: 80 },
  { name: 'React JS', icon: <Layers size={20} />, level: 95 },
  { name: 'PHP', icon: <Server size={20} />, level: 90 },
  { name: 'JavaScript', icon: <Globe size={20} />, level: 92 },
  { name: 'Embarcadero Delphi', icon: <Cpu size={20} />, level: 85 },
  { name: 'PostgreSQL/MySQL', icon: <Database size={20} />, level: 95 },
  { name: 'Supabase', icon: <Cloud size={20} />, level: 85 },
];

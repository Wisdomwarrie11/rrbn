
import { NewsItem, Radiographer } from './types';

export const RRBN_CONTACT = {
  address: "Federal Secretariat Complex, Phase 1, Annex III, Block 5B, 4th Floor Central Business District, Abuja",
  phone: "+23492914928",
  email: "info@rrbn.gov.ng"
};

export const HERO_CAROUSEL = [
  { url: "mri.jpeg", title: "Magnetic Resonance Imaging (MRI)" },
  { url: "CT.jpeg", title: "Computed Tomography (CT)" },
  { url: "ultrasound.jpeg", title: "Diagnostic Ultrasound" },
  { url: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1920", title: "Digital X-Ray Systems" }
];

export const QUICK_FACTS = [
  { title: "Statutory Regulation", text: "Established by Decree 42 of 1987, now CAP R1 LFN 2004, to regulate Radiography practice in Nigeria." },
  { title: "Public Registry", text: "Empowered to maintain an official register of all qualified Radiographers in Nigeria." },
  { title: "Education & Standards", text: "Directing professional education standards at both undergraduate and graduate levels." },
  { title: "Clinical Excellence", text: "Radiography is fundamental to 80% of clinical decisions in modern healthcare." }
];

export const REGISTRAR_DETAILS = {
  name: "PROF. MARK CHUKWUDI OKEJI",
  title: "Registrar/Chief Executive",
  welcome: "You are welcome to the new official website of the Radiographers Registration Board of Nigeria (RRBN). The RRBN is a category B parastatal of the Federal Ministry of Health. It was established by decree 42 of 1987 now CAP R1 LFN2004 to regulate the practice of Radiography in Nigeria. To be able to do this, the RRBN is empowered to keep a register of all Radiographers in Nigeria.",
  vision: "To position Radiography at the top of health profession in Nigeria.",
  mission: [
    "Provision of policies for qualitative academic and professional education at undergraduate and graduate levels.",
    "Constant provision and revision of policy frame works for quality services and ethical standards for the practice of the profession.",
    "Entrenchment of measures and programs that is capable of building and sustaining the professional pride and ego of the Radiographer at the highest level."
  ]
};

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'New Standards for Digital Mammography Released',
    excerpt: 'The RRBN has officially published the 2024 updated guidelines for digital mammography practices across Nigeria.',
    date: 'Oct 24, 2024',
    category: 'Policy',
    image: 'https://images.unsplash.com/photo-1579154235602-3c2c2446acc4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Mandatory CPD Training: Q4 Schedule',
    excerpt: 'All registered radiographers are required to complete at least 15 units of CPD training this quarter.',
    date: 'Oct 20, 2024',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_RADIOGRAPHERS: Radiographer[] = [
  { id: '1', name: 'Dr. Chinedu Okafor', registrationNumber: 'RRBN/RAD/2021/0045', specialty: 'Medical Imaging', state: 'Lagos', status: 'Active' },
  { id: '2', name: 'Mrs. Amina Bello', registrationNumber: 'RRBN/RAD/2018/1129', specialty: 'Therapy Radiography', state: 'Kano', status: 'Active' }
];

export const SYSTEM_INSTRUCTION = `You are the RRBN (Radiographers Registration Board of Nigeria) Virtual Assistant. 
You help radiographers with registration, ethics, standards, and CPD queries. 
Be professional and mention the Radiographers Act of Nigeria (CAP R1 LFN 2004) where relevant.`;

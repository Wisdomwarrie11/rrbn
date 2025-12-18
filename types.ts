
export enum View {
  HOME = 'home',
  REGISTRATION = 'registration',
  DIRECTORY = 'directory',
  TRAINING = 'training',
  NEWS = 'news',
  RESOURCES = 'resources',
  PORTAL = 'portal',
  DEPARTMENTS = 'departments',
  ABOUT = 'about',
  CONTACT = 'contact'
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Radiographer {
  id: string;
  name: string;
  registrationNumber: string;
  specialty: string;
  state: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface QuickFact {
  title: string;
  description: string;
  icon: string;
}

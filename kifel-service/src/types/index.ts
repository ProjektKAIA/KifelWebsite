export interface Service {
  slug: string;
  title: string;
  category: 'reinigung' | 'sicherheit';
  description: string;
  seoDescription: string;
  icon: string;
  image?: string;
  features: string[];
  longDescription: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  categories: string[];
  seoDescription: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  owner: string;
  address: {
    street: string;
    zip: string;
    city: string;
  };
  phone: string;
  mobile: string;
  email: string;
  website: string;
  register: {
    court: string;
    number: string;
  };
  taxNumber: string;
  social: {
    facebook: string;
    instagram: string;
  };
}

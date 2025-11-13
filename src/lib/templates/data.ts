export interface Template {
  id: string
  name: string
  description: string
  category: string
  thumbnail: string
  features: string[]
  colors: {
    primary: string
    secondary: string
  }
}

export interface TemplateCategory {
  id: string
  name: string
  description: string
}

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: 'business',
    name: 'Business Professional',
    description: 'Sophisticated templates for professional services',
  },
  {
    id: 'creative',
    name: 'Creative Portfolio',
    description: 'Stunning designs for artists and designers',
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Food',
    description: 'Delicious templates for food businesses',
  },
  {
    id: 'wellness',
    name: 'Health & Wellness',
    description: 'Calming designs for wellness professionals',
  },
]

export const TEMPLATES: Template[] = [
  // Business Professional
  {
    id: 'law-firm',
    name: 'Law Firm Professional',
    description: 'Authoritative design for legal practices with trust-building elements',
    category: 'business',
    thumbnail: '/templates/law-firm.jpg',
    features: ['Attorney Profiles', 'Practice Areas', 'Case Studies', 'Contact Form'],
    colors: {
      primary: '#1e3a8a',
      secondary: '#94a3b8',
    },
  },
  {
    id: 'consulting',
    name: 'Business Consulting',
    description: 'Modern template showcasing expertise and client success stories',
    category: 'business',
    thumbnail: '/templates/consulting.jpg',
    features: ['Service Showcase', 'Team Bios', 'Testimonials', 'Blog'],
    colors: {
      primary: '#2563eb',
      secondary: '#10b981',
    },
  },
  {
    id: 'accounting',
    name: 'Accounting Services',
    description: 'Clean, trustworthy design for financial professionals',
    category: 'business',
    thumbnail: '/templates/accounting.jpg',
    features: ['Service List', 'Calculator Tools', 'Resources', 'Appointment Booking'],
    colors: {
      primary: '#0f766e',
      secondary: '#fbbf24',
    },
  },

  // Creative Portfolio
  {
    id: 'photographer',
    name: 'Photography Portfolio',
    description: 'Image-focused design with elegant galleries',
    category: 'creative',
    thumbnail: '/templates/photographer.jpg',
    features: ['Full-screen Gallery', 'Lightbox', 'Categories', 'Booking System'],
    colors: {
      primary: '#171717',
      secondary: '#a3a3a3',
    },
  },
  {
    id: 'designer',
    name: 'Creative Designer',
    description: 'Bold, modern layout for showcasing design work',
    category: 'creative',
    thumbnail: '/templates/designer.jpg',
    features: ['Project Grid', 'Case Studies', 'Process Timeline', 'Contact'],
    colors: {
      primary: '#7c3aed',
      secondary: '#ec4899',
    },
  },
  {
    id: 'artist',
    name: 'Artist Showcase',
    description: 'Minimalist template highlighting artwork',
    category: 'creative',
    thumbnail: '/templates/artist.jpg',
    features: ['Artwork Gallery', 'Exhibition Dates', 'Biography', 'Shop'],
    colors: {
      primary: '#dc2626',
      secondary: '#f59e0b',
    },
  },

  // Restaurant & Food
  {
    id: 'bistro',
    name: 'Modern Bistro',
    description: 'Elegant template with menu integration',
    category: 'restaurant',
    thumbnail: '/templates/bistro.jpg',
    features: ['Digital Menu', 'Reservations', 'Location Map', 'Special Events'],
    colors: {
      primary: '#92400e',
      secondary: '#fbbf24',
    },
  },
  {
    id: 'food-truck',
    name: 'Food Truck',
    description: 'Fun, vibrant design with location tracking',
    category: 'restaurant',
    thumbnail: '/templates/food-truck.jpg',
    features: ['Live Location', 'Menu Board', 'Social Feed', 'Catering Info'],
    colors: {
      primary: '#ea580c',
      secondary: '#facc15',
    },
  },
  {
    id: 'catering',
    name: 'Catering Service',
    description: 'Professional template for event catering',
    category: 'restaurant',
    thumbnail: '/templates/catering.jpg',
    features: ['Package Options', 'Event Gallery', 'Quote Request', 'Reviews'],
    colors: {
      primary: '#be123c',
      secondary: '#f43f5e',
    },
  },

  // Health & Wellness
  {
    id: 'yoga-studio',
    name: 'Yoga Studio',
    description: 'Peaceful design with class schedules',
    category: 'wellness',
    thumbnail: '/templates/yoga.jpg',
    features: ['Class Schedule', 'Instructor Bios', 'Pricing Plans', 'Member Portal'],
    colors: {
      primary: '#059669',
      secondary: '#84cc16',
    },
  },
  {
    id: 'medical-practice',
    name: 'Medical Practice',
    description: 'Professional healthcare template with HIPAA considerations',
    category: 'wellness',
    thumbnail: '/templates/medical.jpg',
    features: ['Services', 'Doctor Profiles', 'Patient Forms', 'Insurance Info'],
    colors: {
      primary: '#0284c7',
      secondary: '#06b6d4',
    },
  },
  {
    id: 'spa',
    name: 'Luxury Spa',
    description: 'Serene template for wellness centers',
    category: 'wellness',
    thumbnail: '/templates/spa.jpg',
    features: ['Treatment Menu', 'Online Booking', 'Gift Cards', 'Membership'],
    colors: {
      primary: '#7e22ce',
      secondary: '#c084fc',
    },
  },
]

export const MOCK_BUSINESS_DATA = {
  companyName: 'Mountain Peak Consulting',
  tagline: 'Elevating Your Business to New Heights',
  phone: '555-MOUNTAIN-PEAK',
  email: 'info@mountainpeak.com',
  address: '123 Summit Drive, Denver, CO 80202',
}

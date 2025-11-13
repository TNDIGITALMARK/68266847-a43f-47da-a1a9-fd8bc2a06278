# Website Builder Platform

A professional no-code website creation platform that enables users to build, customize, and publish beautiful websites in minutes.

## 🎯 Core Features

### 1. Landing Page (`/`)
- **Hero Section**: Compelling value proposition with gradient text effects
- **Features Showcase**: Three key features (Drag & Drop, Templates, Publishing)
- **How It Works**: Three-step process explanation
- **CTA Section**: Call-to-action with gradient background
- **Responsive Footer**: Multi-column layout with navigation links

### 2. Website Builder Dashboard (`/builder`)
- **Left Sidebar**: Component library with drag-to-add functionality
  - Layout components (Section, Grid)
  - Content components (Heading, Text, Button)
  - Media components (Image, Gallery)
  - Form components (Contact Form, Input)
- **Main Canvas**: Visual editing area with:
  - Grid background for alignment
  - Real-time element positioning
  - Click-to-select functionality
  - Visual selection indicators
- **Top Toolbar**:
  - Auto-save status indicator (saved/saving/unsaved)
  - Undo/Redo buttons
  - Desktop/Mobile preview toggle
  - Publish button
- **Right Properties Panel**:
  - Content editing for text elements
  - Position controls (X, Y coordinates)
  - Styling options (colors, fonts, sizes)
  - Context-sensitive controls based on element type

### 3. Template Gallery (`/templates`)
- **Category Filtering**: Business, Creative, Restaurant, Wellness
- **12+ Professional Templates**:
  - Law Firm Professional
  - Business Consulting
  - Accounting Services
  - Photography Portfolio
  - Creative Designer
  - Artist Showcase
  - Modern Bistro
  - Food Truck
  - Catering Service
  - Yoga Studio
  - Medical Practice
  - Luxury Spa
- **Template Preview Modal**:
  - Desktop/Mobile view toggle
  - Feature highlights
  - Color palette display
  - One-click customization

### 4. Published Website Example (`/preview/[id]`)
- **Professional Consulting Site Demo**:
  - Sticky navigation with mobile menu
  - Hero section with gradient background
  - Services showcase with icon cards
  - About section with feature list
  - Contact section with form and info
  - Responsive footer
- **Mobile-Optimized**: Responsive design with breakpoints at 768px and 1024px

## 🎨 Design System

### Color Palette
- **Primary**: Deep Blue (#2563eb / hsl(217 91% 60%)) - Trust and professionalism
- **Secondary**: Bright Green (#10b981 / hsl(160 84% 39%)) - Growth and success
- **Background**: Light Gray (#f8fafc / hsl(220 14% 99%)) - Clean canvas
- **Foreground**: Dark Slate (#334155 / hsl(215 25% 27%)) - Readable text
- **Muted**: Light grays for subtle backgrounds and borders
- **Accent**: Light blue tints for hover states

### Typography
- **Font Family**: Inter (weights: 400, 500, 600, 700)
- **Base Size**: 16px (desktop), 14px (mobile)
- **Heading Scale**:
  - h1: 32px (2rem) - Bold hero titles
  - h2: 28px (1.75rem) - Section headings
  - h3: 24px (1.5rem) - Subsections
  - h4: 20px (1.25rem) - Card titles
  - h5: 18px (1.125rem) - Small headings
  - h6: 16px (1rem) - Labels
- **Line Height**: 1.6 for body text, 1.3 for headings

### Component Styling
- **Border Radius**: 8px (--radius: 0.5rem)
- **Shadows**: Subtle shadows for depth (sm, md, lg)
- **Transitions**: 150ms cubic-bezier for smooth interactions
- **Touch Targets**: Minimum 44px height for mobile accessibility

## 📂 Project Structure

```
src/
├── app/
│   ├── builder/
│   │   └── page.tsx          # Website builder dashboard
│   ├── templates/
│   │   └── page.tsx          # Template gallery
│   ├── preview/
│   │   └── [id]/page.tsx     # Published website example
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with providers
│   └── globals.css           # Design system & global styles
├── components/
│   ├── builder/
│   │   ├── builder-canvas.tsx            # Main editing canvas
│   │   ├── builder-sidebar.tsx           # Component library
│   │   ├── builder-toolbar.tsx           # Top action bar
│   │   └── builder-properties-panel.tsx  # Element properties
│   ├── templates/
│   │   ├── template-card.tsx             # Template preview card
│   │   └── template-preview-modal.tsx    # Full template preview
│   └── ui/                   # 48 shadcn/ui components
└── lib/
    └── templates/
        └── data.ts           # Template definitions & mock data
```

## 🚀 Key Implementation Details

### Auto-Save System
- Saves every 30 seconds automatically
- Visual indicator shows save status
- Prevents data loss during editing

### Responsive Design
- **Desktop**: Full three-column layout (sidebar, canvas, properties)
- **Mobile**: Simplified single-column view
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Touch-Friendly**: 44px minimum touch targets

### Component Library
Organized by category with visual icons:
- **Layout**: Structure and containers
- **Content**: Text, buttons, headings
- **Media**: Images and galleries
- **Forms**: Contact forms and inputs

### Template System
Each template includes:
- Unique ID and descriptive name
- Category classification
- Feature list (4+ key features)
- Primary and secondary color palette
- Thumbnail for gallery display

### Mock Business Data
Pre-populated data for demonstrations:
- Company: Mountain Peak Consulting
- Tagline: "Elevating Your Business to New Heights"
- Contact: Phone, email, address
- Hours: Mon-Fri 9AM-6PM

## 🎯 User Flow

1. **Discovery**: Land on homepage → See features and benefits
2. **Exploration**: Browse template gallery → Preview templates
3. **Creation**: Choose template or start blank → Customize in builder
4. **Publishing**: Click publish → Get live URL → Share website

## 🔧 Technical Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **UI Library**: Radix UI + shadcn/ui
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Typography**: Google Fonts (Inter)
- **State**: React hooks (useState, useEffect)

## 📱 Mobile Optimization

- Responsive typography (14px base on mobile)
- Touch-friendly buttons (min 44px)
- Collapsible mobile navigation
- Simplified mobile editor interface
- Swipe-friendly interactions

## ✨ Polish & Interactions

- Smooth transitions (150ms cubic-bezier)
- Hover effects on all interactive elements
- Focus states for accessibility
- Loading states with pulse animations
- Visual feedback for all actions
- Custom scrollbar styling

## 🎨 Custom CSS Variables

```css
/* Builder-specific colors */
--builder-canvas: Canvas background with grid
--builder-panel: Side panel surfaces
--builder-hover: Hover state for components
--builder-selected: Selected element highlight
--builder-grid: Grid line color
```

## 🚀 Future Expansion Paths

### Planned Features
- E-commerce integration (products, cart, checkout)
- Advanced SEO tools (meta tags, sitemaps)
- Team collaboration (multi-user editing)
- Custom domain mapping
- Analytics integration
- A/B testing tools

### Monetization Options
- Freemium model (free basic, paid premium)
- Premium templates marketplace
- Professional design services
- White-label for agencies
- Enterprise solutions

## 📊 Success Metrics

- Time to first website: < 5 minutes
- Template customization: < 10 minutes
- Mobile responsiveness: 100% templates
- User satisfaction: Target 98%+

## 🎉 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit the application
open http://localhost:4006
```

## 📄 Key Pages

- `/` - Marketing landing page
- `/builder` - Website builder dashboard
- `/templates` - Template gallery
- `/preview/demo` - Example published site

---

Built with passion for empowering creators to bring their ideas online 🚀

"use client"

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MOCK_BUSINESS_DATA } from '@/lib/templates/data'

export default function PreviewPage({ params }: { params: { id: string } }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold">{MOCK_BUSINESS_DATA.companyName}</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-border">
              <a href="#services" className="block py-2 text-sm font-medium">
                Services
              </a>
              <a href="#about" className="block py-2 text-sm font-medium">
                About
              </a>
              <a href="#contact" className="block py-2 text-sm font-medium">
                Contact
              </a>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {MOCK_BUSINESS_DATA.tagline}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Professional consulting services that drive real results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Planning',
                description: 'Develop clear roadmaps for sustainable growth and competitive advantage',
                icon: '📊',
              },
              {
                title: 'Operations Optimization',
                description: 'Streamline processes and improve efficiency across your organization',
                icon: '⚙️',
              },
              {
                title: 'Digital Transformation',
                description: 'Leverage technology to modernize and scale your business operations',
                icon: '🚀',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                20+ Years of Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We've helped hundreds of businesses achieve their goals through strategic consulting
                and hands-on implementation support.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white text-sm flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-sm text-muted-foreground">
                      Successfully completed 500+ projects with 98% client satisfaction
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white text-sm flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Industry veterans with deep expertise across multiple sectors
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white text-sm flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tailored Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Custom strategies designed specifically for your business goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg h-96 flex items-center justify-center text-white text-6xl font-bold">
              20+
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to take your business to the next level? Let's talk.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">{MOCK_BUSINESS_DATA.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">{MOCK_BUSINESS_DATA.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <p className="text-muted-foreground">{MOCK_BUSINESS_DATA.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="text-muted-foreground">Mon-Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-lg p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary h-32 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 {MOCK_BUSINESS_DATA.companyName}. All rights reserved.</p>
            <p className="mt-2">
              Built with Website Builder • <a href="#" className="text-primary hover:underline">Privacy Policy</a> • <a href="#" className="text-primary hover:underline">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

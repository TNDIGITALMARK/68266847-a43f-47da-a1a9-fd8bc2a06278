"use client"

import { Sparkles, Zap, Layout, Eye, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Website Builder</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/templates">
              <Button variant="ghost">Templates</Button>
            </Link>
            <Link href="/builder">
              <Button className="bg-primary hover:bg-primary/90">
                Start Building
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              Create Your Website in Minutes
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Beautiful Websites
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Without Code
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Professional website creation platform that transforms ideas into reality.
              Drag, drop, and publish - get online in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/builder">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Building Free
                </Button>
              </Link>
              <Link href="/templates">
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  <Layout className="w-5 h-5 mr-2" />
                  Browse Templates
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Professional templates • Instant publishing
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for creators who want professional results without technical complexity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Drag & Drop Builder</h3>
              <p className="text-muted-foreground mb-6">
                Intuitive visual editor with real-time preview. No coding required - just click, drag, and create.
              </p>
              <ul className="space-y-2">
                {['Real-time updates', 'Snap guides', 'Undo/redo system'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <Layout className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Professional Templates</h3>
              <p className="text-muted-foreground mb-6">
                12+ industry-specific templates designed by professionals. Start with quality, customize to perfection.
              </p>
              <ul className="space-y-2">
                {['One-click application', 'Fully customizable', 'Mobile responsive'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Instant Publishing</h3>
              <p className="text-muted-foreground mb-6">
                Go live in seconds with one-click publishing. Get a live URL instantly to share with the world.
              </p>
              <ul className="space-y-2">
                {['Auto-save every 30s', 'Live preview', 'Mobile testing'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Three Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground">
              From zero to published website in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Choose Template',
                description: 'Pick from 12+ professional templates or start from scratch with a blank canvas',
              },
              {
                step: '02',
                title: 'Customize Design',
                description: 'Drag and drop components, edit text, upload images, and adjust colors to match your brand',
              },
              {
                step: '03',
                title: 'Publish Instantly',
                description: 'One click to publish. Get a live URL immediately and share your website with the world',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {idx < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-8 w-6 h-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Join thousands of creators who have brought their ideas to life.
              No credit card required to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/builder">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg h-14 px-8">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Building Now
                </Button>
              </Link>
              <Link href="/preview/demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg h-14 px-8">
                  <Eye className="w-5 h-5 mr-2" />
                  View Example Site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Website Builder</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Create beautiful websites without code. Professional results in minutes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/templates" className="hover:text-primary">Templates</a></li>
                <li><a href="/builder" className="hover:text-primary">Builder</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Documentation</a></li>
                <li><a href="#" className="hover:text-primary">Tutorials</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Website Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

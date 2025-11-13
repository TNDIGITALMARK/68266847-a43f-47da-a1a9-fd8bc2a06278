"use client"

import { useState } from 'react'
import { Eye, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TemplateCard } from '@/components/templates/template-card'
import { TemplatePreviewModal } from '@/components/templates/template-preview-modal'
import { TEMPLATE_CATEGORIES, TEMPLATES } from '@/lib/templates/data'
import Link from 'next/link'

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null)

  const filteredTemplates = selectedCategory === 'all'
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Template Gallery</h1>
              <p className="text-muted-foreground">
                Choose from professionally designed templates and customize to match your brand
              </p>
            </div>
            <Link href="/builder">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Sparkles className="w-4 h-4 mr-2" />
                Start from Scratch
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              size="sm"
            >
              All Templates
            </Button>
            {TEMPLATE_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Template Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={() => setPreviewTemplate(template.id)}
            />
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <TemplatePreviewModal
          template={TEMPLATES.find(t => t.id === previewTemplate)!}
          onClose={() => setPreviewTemplate(null)}
        />
      )}
    </div>
  )
}

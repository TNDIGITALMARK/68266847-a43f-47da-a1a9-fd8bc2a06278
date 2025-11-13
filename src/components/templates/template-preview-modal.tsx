"use client"

import { X, Sparkles, Monitor, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Template } from '@/lib/templates/data'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface TemplatePreviewModalProps {
  template: Template
  onClose: () => void
}

export function TemplatePreviewModal({ template, onClose }: TemplatePreviewModalProps) {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')

  const handleUseTemplate = () => {
    router.push(`/builder?template=${template.id}`)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold">{template.name}</h2>
            <p className="text-sm text-muted-foreground">{template.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('desktop')}
            >
              <Monitor className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('mobile')}
            >
              <Smartphone className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-auto bg-muted p-8">
          <div
            className={`mx-auto bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
              viewMode === 'mobile' ? 'max-w-sm' : 'w-full'
            }`}
          >
            {/* Mock Website Preview */}
            <div
              className="h-96 flex items-center justify-center text-white"
              style={{
                background: `linear-gradient(135deg, ${template.colors.primary} 0%, ${template.colors.secondary} 100%)`,
              }}
            >
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">{template.name}</h1>
                <p className="text-xl opacity-90">Live Preview</p>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {template.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">About This Template</h3>
                <p className="text-muted-foreground">{template.description}</p>
              </div>

              <div className="pt-4 border-t">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleUseTemplate}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Customize This Template
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border flex items-center justify-between">
          <div className="flex gap-2">
            <div
              className="w-8 h-8 rounded border border-border"
              style={{ backgroundColor: template.colors.primary }}
            />
            <div
              className="w-8 h-8 rounded border border-border"
              style={{ backgroundColor: template.colors.secondary }}
            />
          </div>
          <Button onClick={handleUseTemplate} className="bg-secondary hover:bg-secondary/90">
            <Sparkles className="w-4 h-4 mr-2" />
            Use This Template
          </Button>
        </div>
      </div>
    </div>
  )
}

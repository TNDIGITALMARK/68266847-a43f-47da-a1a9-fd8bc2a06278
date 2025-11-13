"use client"

import { Eye, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Template } from '@/lib/templates/data'
import { useRouter } from 'next/navigation'

interface TemplateCardProps {
  template: Template
  onPreview: () => void
}

export function TemplateCard({ template, onPreview }: TemplateCardProps) {
  const router = useRouter()

  const handleUseTemplate = () => {
    router.push(`/builder?template=${template.id}`)
  }

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Template Preview */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-bold"
          style={{
            background: `linear-gradient(135deg, ${template.colors.primary} 0%, ${template.colors.secondary} 100%)`,
          }}
        >
          {template.name.split(' ')[0]}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={onPreview}
            className="bg-white text-black hover:bg-white/90"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            size="sm"
            onClick={handleUseTemplate}
            className="bg-primary hover:bg-primary/90"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Use Template
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full capitalize">
            {template.category}
          </span>
        </div>
      </div>

      {/* Template Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="px-2 py-1 bg-muted text-xs rounded"
            >
              {feature}
            </span>
          ))}
          {template.features.length > 3 && (
            <span className="px-2 py-1 bg-muted text-xs rounded">
              +{template.features.length - 3} more
            </span>
          )}
        </div>

        {/* Color Palette */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Colors:</span>
          <div className="flex gap-1">
            <div
              className="w-6 h-6 rounded border border-border"
              style={{ backgroundColor: template.colors.primary }}
              title={template.colors.primary}
            />
            <div
              className="w-6 h-6 rounded border border-border"
              style={{ backgroundColor: template.colors.secondary }}
              title={template.colors.secondary}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

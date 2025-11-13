"use client"

import { Layout, Type, Image as ImageIcon, Grid, Mail, Menu, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

interface BuilderSidebarProps {
  onAddElement: (type: string) => void
}

export function BuilderSidebar({ onAddElement }: BuilderSidebarProps) {
  const componentCategories = [
    {
      name: 'Layout',
      icon: Layout,
      items: [
        { id: 'section', name: 'Section', icon: Square, description: 'Container block' },
        { id: 'grid', name: 'Grid', icon: Grid, description: '12-column grid' },
      ]
    },
    {
      name: 'Content',
      icon: Type,
      items: [
        { id: 'heading', name: 'Heading', icon: Type, description: 'Title text' },
        { id: 'text', name: 'Text', icon: Type, description: 'Paragraph' },
        { id: 'button', name: 'Button', icon: Square, description: 'Call to action' },
      ]
    },
    {
      name: 'Media',
      icon: ImageIcon,
      items: [
        { id: 'image', name: 'Image', icon: ImageIcon, description: 'Upload image' },
        { id: 'gallery', name: 'Gallery', icon: Grid, description: 'Image grid' },
      ]
    },
    {
      name: 'Forms',
      icon: Mail,
      items: [
        { id: 'contact-form', name: 'Contact Form', icon: Mail, description: 'Email form' },
        { id: 'input', name: 'Input Field', icon: Square, description: 'Text input' },
      ]
    },
  ]

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Components</h2>
        <p className="text-sm text-muted-foreground">Drag to add to canvas</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {componentCategories.map((category) => (
            <div key={category.name}>
              <div className="flex items-center gap-2 mb-3">
                <category.icon className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-2">
                {category.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onAddElement(item.id)}
                    className="w-full p-3 text-left rounded-lg border border-border bg-background hover:bg-accent hover:border-primary/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

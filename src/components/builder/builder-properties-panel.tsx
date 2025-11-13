"use client"

import { Settings, Palette, Type, Layout } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Separator } from '@/components/ui/separator'

interface BuilderPropertiesPanelProps {
  selectedElement: string | null
  elements: any[]
  onUpdateElement: (id: string, updates: any) => void
}

export function BuilderPropertiesPanel({
  selectedElement,
  elements,
  onUpdateElement,
}: BuilderPropertiesPanelProps) {
  const element = elements.find(el => el.id === selectedElement)

  if (!element) {
    return (
      <div className="w-80 bg-card border-l border-border flex items-center justify-center">
        <div className="text-center p-6 space-y-2">
          <Settings className="w-12 h-12 mx-auto text-muted-foreground" />
          <h3 className="font-medium">No Element Selected</h3>
          <p className="text-sm text-muted-foreground">
            Click on an element in the canvas to edit its properties
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-80 bg-card border-l border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Properties</h2>
        <p className="text-sm text-muted-foreground capitalize">{element.type} Element</p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Content */}
          {(element.type === 'heading' || element.type === 'text' || element.type === 'button') && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Type className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-medium">Content</h3>
              </div>
              <div>
                <Label htmlFor="content">Text</Label>
                <Input
                  id="content"
                  value={element.content || ''}
                  onChange={(e) => onUpdateElement(element.id, { content: e.target.value })}
                  placeholder="Enter text..."
                />
              </div>
            </div>
          )}

          <Separator />

          {/* Position */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-medium">Position</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="pos-x">X Position</Label>
                <Input
                  id="pos-x"
                  type="number"
                  value={element.position.x}
                  onChange={(e) =>
                    onUpdateElement(element.id, {
                      position: { ...element.position, x: parseInt(e.target.value) || 0 }
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="pos-y">Y Position</Label>
                <Input
                  id="pos-y"
                  type="number"
                  value={element.position.y}
                  onChange={(e) =>
                    onUpdateElement(element.id, {
                      position: { ...element.position, y: parseInt(e.target.value) || 0 }
                    })
                  }
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Styling */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-medium">Styling</h3>
            </div>

            {(element.type === 'heading' || element.type === 'text') && (
              <>
                <div>
                  <Label htmlFor="font-size">Font Size (px)</Label>
                  <Input
                    id="font-size"
                    type="number"
                    placeholder="16"
                    value={element.styles?.fontSize?.replace('px', '') || ''}
                    onChange={(e) =>
                      onUpdateElement(element.id, {
                        styles: { ...element.styles, fontSize: `${e.target.value}px` }
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="text-color">Text Color</Label>
                  <Input
                    id="text-color"
                    type="color"
                    value={element.styles?.color || '#334155'}
                    onChange={(e) =>
                      onUpdateElement(element.id, {
                        styles: { ...element.styles, color: e.target.value }
                      })
                    }
                  />
                </div>
              </>
            )}

            {element.type === 'button' && (
              <>
                <div>
                  <Label htmlFor="bg-color">Background Color</Label>
                  <Input
                    id="bg-color"
                    type="color"
                    value={element.styles?.backgroundColor || '#2563eb'}
                    onChange={(e) =>
                      onUpdateElement(element.id, {
                        styles: { ...element.styles, backgroundColor: e.target.value }
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="text-color">Text Color</Label>
                  <Input
                    id="text-color"
                    type="color"
                    value={element.styles?.color || '#ffffff'}
                    onChange={(e) =>
                      onUpdateElement(element.id, {
                        styles: { ...element.styles, color: e.target.value }
                      })
                    }
                  />
                </div>
              </>
            )}

            {element.type === 'section' && (
              <div>
                <Label htmlFor="bg-color">Background Color</Label>
                <Input
                  id="bg-color"
                  type="color"
                  value={element.styles?.backgroundColor || '#ffffff'}
                  onChange={(e) =>
                    onUpdateElement(element.id, {
                      styles: { ...element.styles, backgroundColor: e.target.value }
                    })
                  }
                />
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

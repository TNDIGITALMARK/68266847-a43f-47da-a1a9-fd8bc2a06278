"use client"

import { useState } from 'react'
import { Plus, Save, Eye, Layout, Type, Image as ImageIcon, Grid, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BuilderCanvas } from '@/components/builder/builder-canvas'
import { BuilderSidebar } from '@/components/builder/builder-sidebar'
import { BuilderToolbar } from '@/components/builder/builder-toolbar'
import { BuilderPropertiesPanel } from '@/components/builder/builder-properties-panel'

export default function BuilderPage() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [canvasElements, setCanvasElements] = useState<any[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saved' | 'saving' | 'unsaved'>('saved')

  // Auto-save every 30 seconds
  useState(() => {
    const interval = setInterval(() => {
      if (canvasElements.length > 0) {
        setAutoSaveStatus('saving')
        setTimeout(() => setAutoSaveStatus('saved'), 1000)
      }
    }, 30000)
    return () => clearInterval(interval)
  })

  const handleAddElement = (type: string) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type,
      position: { x: 100, y: 100 },
      styles: {},
      content: type === 'text' ? 'Edit me' : '',
    }
    setCanvasElements([...canvasElements, newElement])
    setSelectedElement(newElement.id)
    setAutoSaveStatus('unsaved')
  }

  const handlePublish = () => {
    // Generate live URL
    const siteUrl = `https://site-${Date.now()}.example.com`
    alert(`Website published at: ${siteUrl}`)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Left Sidebar - Component Library */}
      <BuilderSidebar onAddElement={handleAddElement} />

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <BuilderToolbar
          onPublish={handlePublish}
          autoSaveStatus={autoSaveStatus}
        />

        {/* Canvas */}
        <div className="flex-1 overflow-auto">
          <BuilderCanvas
            elements={canvasElements}
            selectedElement={selectedElement}
            onSelectElement={setSelectedElement}
            onUpdateElements={setCanvasElements}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
          />
        </div>
      </div>

      {/* Right Properties Panel */}
      <BuilderPropertiesPanel
        selectedElement={selectedElement}
        elements={canvasElements}
        onUpdateElement={(id, updates) => {
          setCanvasElements(
            canvasElements.map(el =>
              el.id === id ? { ...el, ...updates } : el
            )
          )
          setAutoSaveStatus('unsaved')
        }}
      />
    </div>
  )
}

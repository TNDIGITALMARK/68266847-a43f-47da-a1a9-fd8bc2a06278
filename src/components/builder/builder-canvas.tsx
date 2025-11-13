"use client"

import { useRef } from 'react'

interface BuilderCanvasProps {
  elements: any[]
  selectedElement: string | null
  onSelectElement: (id: string | null) => void
  onUpdateElements: (elements: any[]) => void
  isDragging: boolean
  setIsDragging: (dragging: boolean) => void
}

export function BuilderCanvas({
  elements,
  selectedElement,
  onSelectElement,
  onUpdateElements,
  isDragging,
  setIsDragging,
}: BuilderCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleElementClick = (e: React.MouseEvent, elementId: string) => {
    e.stopPropagation()
    onSelectElement(elementId)
  }

  const renderElement = (element: any) => {
    const isSelected = element.id === selectedElement

    const baseClasses = `
      absolute cursor-pointer transition-all duration-200
      ${isSelected ? 'ring-2 ring-primary ring-offset-2' : 'hover:ring-2 hover:ring-primary/50'}
    `

    const style = {
      left: element.position.x,
      top: element.position.y,
      ...element.styles,
    }

    switch (element.type) {
      case 'heading':
        return (
          <h2
            key={element.id}
            className={`${baseClasses} text-2xl font-semibold p-4`}
            style={style}
            onClick={(e) => handleElementClick(e, element.id)}
          >
            {element.content || 'Heading'}
          </h2>
        )

      case 'text':
        return (
          <p
            key={element.id}
            className={`${baseClasses} p-4 max-w-md`}
            style={style}
            onClick={(e) => handleElementClick(e, element.id)}
          >
            {element.content || 'Add your text here...'}
          </p>
        )

      case 'button':
        return (
          <button
            key={element.id}
            className={`${baseClasses} px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90`}
            style={style}
            onClick={(e) => handleElementClick(e, element.id)}
          >
            {element.content || 'Click Me'}
          </button>
        )

      case 'section':
        return (
          <div
            key={element.id}
            className={`${baseClasses} min-w-[300px] min-h-[200px] border-2 border-dashed border-border bg-card/50 rounded-lg`}
            style={style}
            onClick={(e) => handleElementClick(e, element.id)}
          >
            <div className="p-4 text-sm text-muted-foreground">Section Container</div>
          </div>
        )

      case 'image':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-64 h-48 bg-muted rounded-lg flex items-center justify-center`}
            style={style}
            onClick={(e) => handleElementClick(e, element.id)}
          >
            <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )

      case 'contact-form':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-96 bg-card border border-border rounded-lg p-6`}
            style={style}
            onClick={(e) => handleElementClick(e, element.id)}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Name" className="w-full px-3 py-2 border border-input rounded" disabled />
              <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-input rounded" disabled />
              <textarea placeholder="Message" className="w-full px-3 py-2 border border-input rounded h-24" disabled />
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded" disabled>
                Send Message
              </button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div
      ref={canvasRef}
      className="relative min-h-[calc(100vh-3.5rem)] bg-[hsl(var(--builder-canvas))] overflow-auto"
      style={{
        backgroundImage: 'radial-gradient(hsl(var(--builder-grid)) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
      onClick={() => onSelectElement(null)}
    >
      {/* Canvas Info */}
      {elements.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-4xl">✨</div>
            <h3 className="text-xl font-semibold">Start Building Your Website</h3>
            <p className="text-muted-foreground max-w-sm">
              Click on components from the left sidebar to add them to your canvas, or choose a template to get started quickly.
            </p>
          </div>
        </div>
      )}

      {/* Render Elements */}
      {elements.map(renderElement)}
    </div>
  )
}

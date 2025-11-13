"use client"

import { Save, Eye, Undo, Redo, Monitor, Smartphone, Upload, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

interface BuilderToolbarProps {
  onPublish: () => void
  autoSaveStatus: 'saved' | 'saving' | 'unsaved'
}

export function BuilderToolbar({ onPublish, autoSaveStatus }: BuilderToolbarProps) {
  return (
    <div className="h-14 border-b border-border bg-card px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-lg font-semibold">
          Website Builder
        </Link>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" disabled>
            <Undo className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" disabled>
            <Redo className="w-4 h-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="text-sm text-muted-foreground">
          {autoSaveStatus === 'saved' && (
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              Saved
            </span>
          )}
          {autoSaveStatus === 'saving' && (
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Saving...
            </span>
          )}
          {autoSaveStatus === 'unsaved' && (
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              Unsaved changes
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Monitor className="w-4 h-4 mr-2" />
          Desktop
        </Button>
        <Button variant="ghost" size="sm">
          <Smartphone className="w-4 h-4 mr-2" />
          Mobile
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <Link href="/templates">
          <Button variant="outline" size="sm">
            Templates
          </Button>
        </Link>

        <Button variant="default" size="sm" onClick={onPublish} className="bg-secondary hover:bg-secondary/90">
          <Upload className="w-4 h-4 mr-2" />
          Publish
        </Button>
      </div>
    </div>
  )
}

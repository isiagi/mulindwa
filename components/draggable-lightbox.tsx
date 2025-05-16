"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface DraggableLightboxProps {
  isOpen: boolean
  onClose: () => void
  image: {
    src: string
    alt: string
    title: string
    description: string
    category: string
  }
  categoryName: string | undefined
}

export default function DraggableLightbox({ isOpen, onClose, image, categoryName }: DraggableLightboxProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const lightboxRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close
  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleBackdropClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleBackdropClick)
    }
  }, [isOpen, onClose])

  // Handle escape key to close
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  // Set initial position with proper top margin when modal opens
  useEffect(() => {
    if (isOpen) {
      // Position the lightbox with a top margin of 5% of viewport height
      setPosition({
        x: 0,
        y: window.innerHeight * 0.05,
      })
    }
  }, [isOpen])

  // Mouse event handlers for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch event handlers for mobile dragging
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center p-4 md:p-8 overflow-auto">
      <div
        ref={lightboxRef}
        className={`relative max-w-4xl w-full bg-white rounded-lg overflow-hidden my-8 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
        <div className="relative aspect-video w-full">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
        </div>
        <div className="p-4 md:p-6 bg-white">
          <h3 className="text-xl md:text-2xl font-bold text-[#8c3420]">{image.title}</h3>
          <p className="mt-2 text-gray-700">{image.description}</p>
          <div className="mt-2">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-[#f8f4e3] text-[#8c3420] rounded-full">
              {categoryName}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

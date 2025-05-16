"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type AnimationVariant =
  | "fade-in"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  threshold?: number
  duration?: number
  once?: boolean
}

export default function AnimateOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  threshold = 0.1,
  duration = 500,
  once = true,
}: AnimateOnScrollProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    freezeOnceVisible: once,
  })

  // Base styles for all animations
  const baseStyles = "transition-all will-change-transform"

  // Animation variants
  const variants: Record<AnimationVariant, string> = {
    "fade-in": "opacity-0 [&.animate]:opacity-100",
    "fade-up": "opacity-0 translate-y-8 [&.animate]:opacity-100 [&.animate]:translate-y-0",
    "fade-down": "opacity-0 -translate-y-8 [&.animate]:opacity-100 [&.animate]:translate-y-0",
    "fade-left": "opacity-0 translate-x-8 [&.animate]:opacity-100 [&.animate]:translate-x-0",
    "fade-right": "opacity-0 -translate-x-8 [&.animate]:opacity-100 [&.animate]:translate-x-0",
    "zoom-in": "opacity-0 scale-95 [&.animate]:opacity-100 [&.animate]:scale-100",
    "zoom-out": "opacity-0 scale-105 [&.animate]:opacity-100 [&.animate]:scale-100",
    "slide-up": "translate-y-16 [&.animate]:translate-y-0",
    "slide-down": "-translate-y-16 [&.animate]:translate-y-0",
    "slide-left": "translate-x-16 [&.animate]:translate-x-0",
    "slide-right": "-translate-x-16 [&.animate]:translate-x-0",
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(baseStyles, variants[variant], isIntersecting && "animate", className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

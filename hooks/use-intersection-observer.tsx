"use client"

import { useState, useEffect, useRef } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting

        // Update state only if element is intersecting or if we don't freeze on visible
        if (isElementIntersecting || !freezeOnceVisible || !hasIntersected) {
          setIsIntersecting(isElementIntersecting)

          // If element has intersected and we want to freeze, mark it as intersected
          if (isElementIntersecting && freezeOnceVisible) {
            setHasIntersected(true)
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, freezeOnceVisible, hasIntersected])

  // If we want to freeze the animation once visible and it has been intersected,
  // always return true regardless of current intersection state
  const returnValue = freezeOnceVisible && hasIntersected ? true : isIntersecting

  return { ref, isIntersecting: returnValue }
}

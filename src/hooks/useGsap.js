import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const EASE = {
  smooth: 'power3.out',
  snap: 'power4.out',
  elastic: 'elastic.out(1, 0.5)',
  expo: 'expo.out',
  circ: 'circ.out',
  slowMo: 'power2.inOut',
  custom1: 'cubic-bezier(0.76, 0, 0.24, 1)',
}

/**
 * useReveal — Non-uniform scroll reveals with varied timing
 */
export function useReveal(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // rv-up — snappy upward reveal
      gsap.utils.toArray('.rv-up').forEach((el, i) => {
        const randomDelay = (i % 3) * 0.02
        const randomDuration = 0.3 + (i % 4) * 0.04
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: randomDuration,
          delay: randomDelay,
          ease: i % 2 === 0 ? EASE.snap : EASE.smooth,
          scrollTrigger: {
            trigger: el,
            start: 'top 96%',
            toggleActions: 'play none none none',
          },
        })
      })

      // rv-up-soft — gentle upward reveal
      gsap.utils.toArray('.rv-up-soft').forEach((el) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: EASE.smooth,
          scrollTrigger: {
            trigger: el,
            start: 'top 96%',
            toggleActions: 'play none none none',
          },
        })
      })

      // rv-left
      gsap.utils.toArray('.rv-left').forEach((el) => {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 0.45,
          ease: EASE.snap,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

      // rv-right
      gsap.utils.toArray('.rv-right').forEach((el) => {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 0.45,
          ease: EASE.snap,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

      // rv-scale
      gsap.utils.toArray('.rv-scale').forEach((el) => {
        gsap.to(el, {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: EASE.smooth,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

      // rv-rotate — with rotation
      gsap.utils.toArray('.rv-rotate').forEach((el) => {
        gsap.to(el, {
          rotate: 0,
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: EASE.snap,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Clip-path reveals — fast and responsive
      gsap.utils.toArray('.rv-clip-up').forEach((el) => {
        gsap.to(el, {
          clipPath: 'inset(0 0 0 0)',
          duration: 0.5,
          ease: EASE.slowMo,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.rv-clip-left').forEach((el) => {
        gsap.to(el, {
          clipPath: 'inset(0 0 0 0)',
          duration: 0.45,
          ease: EASE.slowMo,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.rv-clip-right').forEach((el) => {
        gsap.to(el, {
          clipPath: 'inset(0 0 0 0)',
          duration: 0.45,
          ease: EASE.slowMo,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.rv-clip-center').forEach((el) => {
        gsap.to(el, {
          clipPath: 'inset(0 0 0 0)',
          duration: 0.5,
          ease: EASE.slowMo,
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Parallax images — varied scrub speeds
      gsap.utils.toArray('.parallax-img').forEach((el, i) => {
        const yAmount = -10 - (i % 3) * 5
        gsap.to(el, {
          yPercent: yAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6 + (i % 3) * 0.2,
          },
        })
      })

      // Horizontal parallax elements
      gsap.utils.toArray('.parallax-x').forEach((el) => {
        const direction = el.dataset.direction === 'right' ? 1 : -1
        gsap.to(el, {
          xPercent: direction * 10,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      // Counter-rotate on scroll
      gsap.utils.toArray('.scroll-rotate').forEach((el) => {
        gsap.to(el, {
          rotate: -3,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

    }, containerRef)

    return () => ctx.revert()
  }, deps)

  return containerRef
}

/**
 * useHeroParallax — Hero background zoom + parallax
 */
export function useHeroParallax() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const img = heroRef.current?.querySelector('.hero-bg')
      if (!img) return

      gsap.to(img, {
        scale: 1.18,
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return heroRef
}

/**
 * useSplitText — SplitType character animation
 */
export function useSplitText(selector, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const elements = ref.current.querySelectorAll(selector)
    if (elements.length === 0) return

    const splits = []
    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        const split = new SplitType(el, {
          types: options.types || 'chars',
          tagName: 'span',
        })
        splits.push(split)

        const targets = options.types === 'words' ? split.words : split.chars
        if (!targets || targets.length === 0) return

        gsap.from(targets, {
          y: options.y ?? '100%',
          opacity: 0,
          rotate: options.rotate ?? 5,
          duration: options.duration ? options.duration * 0.55 : 0.4,
          stagger: options.stagger ?? { each: 0.015, from: 'start' },
          ease: options.ease ?? EASE.snap,
          scrollTrigger: options.scrollTrigger ?? {
            trigger: el,
            start: options.start ?? 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, ref)

    return () => {
      ctx.revert()
      splits.forEach(s => s.revert())
    }
  }, [])

  return ref
}

/**
 * useStagger — staggers children with custom timing
 */
export function useStagger(selector, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(selector)
      if (elements.length === 0) return

      gsap.from(elements, {
        y: options.y ?? 60,
        opacity: 0,
        duration: options.duration ?? 0.5,
        stagger: options.stagger ?? { each: 0.06, from: 'start' },
        ease: options.ease ?? EASE.smooth,
        scrollTrigger: {
          trigger: ref.current,
          start: options.start ?? 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * useScrollProgress — scroll progress bar
 */
export function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress')
    if (!bar) return

    const ctx = gsap.context(() => {
      gsap.to(bar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2,
        },
      })
    })

    return () => ctx.revert()
  }, [])
}

export { gsap, ScrollTrigger, EASE }

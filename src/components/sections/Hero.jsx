import { useEffect, useRef } from 'react'
import { Play, Star } from 'lucide-react'
import { gsap } from 'gsap'
import Button from '../ui/Button'
import Preheading from '../ui/Preheading'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Tagline Reveal
      gsap.fromTo(
        '.hero-tagline',
        { opacity: 0, y: 15, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' }
      )

      // 2. Character-by-Character Masked Reveal for Headline
      gsap.fromTo(
        '.char-inner',
        { y: '120%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.9,
          stagger: 0.015,
          ease: 'power4.out',
          delay: 0.2
        }
      )

      // 3. Subtitle & Buttons Staggered Fade Up
      gsap.fromTo(
        ['.hero-sub', '.hero-ctas', '.hero-badges'],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.6
        }
      )

      // 4. Hero Image Smooth Scale & Reveal
      gsap.fromTo(
        '.hero-image-wrapper',
        { opacity: 0, scale: 0.92, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.4
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Interactive Hover Animation on Individual Characters
  const handleCharMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -6,
      scale: 1.15,
      color: '#38bdf8',
      duration: 0.2,
      ease: 'power2.out'
    })
  }

  const handleCharMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      color: '',
      duration: 0.3,
      ease: 'power2.inOut'
    })
  }

  // FIXED: Splits text by word first to prevent mid-word breaking (whitespace-nowrap), 
  // then renders individual characters for GSAP animations.
  const renderMaskedText = (text, isAccent = false) => {
    const words = text.split(' ')
    return words.map((word, wordIdx) => {
      if (!word) return null
      return (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIdx) => (
            <span
              key={charIdx}
              className="inline-block overflow-hidden align-top pb-2 pt-1"
            >
              <span
                onMouseEnter={handleCharMouseEnter}
                onMouseLeave={handleCharMouseLeave}
                className={`inline-block char-inner cursor-pointer transition-colors duration-200 ${isAccent ? 'text-accent text-shimmer' : ''
                  }`}
              >
                {char}
              </span>
            </span>
          ))}
          {/* Add a space after each word */}
          <span className="inline-block">&nbsp;</span>
        </span>
      )
    })
  }

  const scrollToElement = (e, id) => {
    e.preventDefault()

    const element = document.getElementById(id)
    if (!element) return

    const start = window.pageYOffset
    const end = element.getBoundingClientRect().top + window.pageYOffset - 80
    const duration = 350

    let startTime = null

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      window.scrollTo({
        top: start + (end - start) * easeInOutCubic(progress),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-brand-dark via-brand to-brand-dark px-6 pb-20 pt-36 text-white md:px-8 md:pb-32 lg:pt-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.1),rgba(16,61,77,0.05))]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">

          {/* Badge Tagline */}
          <p className="hero-tagline mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            <Preheading className="text-white"></Preheading>Pushing the limits
          </p>

          {/* Masked Headline with unbreakable word wrappers */}
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl font-display leading-[1.15]">
            {renderMaskedText('We Build')}
            {renderMaskedText('Digital Experiences', true)}
            {renderMaskedText('That Convert')}
            {renderMaskedText('Visitors Into Customers.', true)}
          </h1>

          {/* Subtitle */}
          <p className="hero-sub mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            500+ brands trust Digitalis Global for web development, e-commerce, SEO and performance marketing from Sydney to London.
          </p>

          {/* CTA Buttons - Forced into a Row on Mobile */}
          <div className="hero-ctas mt-10 flex w-full flex-row flex-wrap items-center justify-center gap-3 sm:w-auto sm:justify-start">
            <Button
              as="a"
              href="#contact"
              onClick={(e) => scrollToElement(e, 'contact')}
              variant="primary"
              className="flex-1 min-w-[200px] sm:flex-initial pl-6 pr-2 py-3 gap-4 text-center justify-center sm:justify-between"
            >
              Get a Free Strategy Call
            </Button>
            <Button
              as="a"
              href="#services"
              variant="outline"
              className="flex-1 min-w-[140px] sm:flex-initial text-center justify-center px-4"
            >
              Get a Free Website Audit
            </Button>
          </div>

          {/* Social Proof Badges */}
          <div className="hero-badges mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 lg:justify-start">
            <span className="rounded-full border border-white/20 px-3 py-2 transition-transform duration-300 hover:scale-105 hover:border-white/50">
              500+ Projects Delivered
            </span>
            <span className="rounded-full border border-white/20 px-3 py-2 transition-transform duration-300 hover:scale-105 hover:border-white/50">
              Australia, Germany & UK
            </span>
            <a
              href="https://www.google.com/search?q=digitalisglobal"
              className="rounded-full border border-accent/50 px-3 py-2 text-accent hover:border-accent transition-all duration-300 hover:scale-105 hover:bg-accent/10"
            >
              ⭐ Rated 5/5 on Google
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper relative z-10 hidden lg:block">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/hero/hero.webp"
              alt="Digitalis Global team delivering digital marketing and web development results"
              className="h-full w-full object-cover"
              width={900}
              height={900}
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
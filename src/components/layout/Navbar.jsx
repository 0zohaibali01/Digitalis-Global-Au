import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import {
    ArrowRight,
    ChevronDown,
    Menu,
    X,
    Globe,
    Megaphone,
    PenTool,
    ShoppingCart,
    Search,
    MonitorSmartphone,
    Clapperboard,
    Sparkles,
} from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Button from '../ui/Button'
import useUIStore from '../../store/useUIStore'

const links = [
    { label: 'About', href: '/au/about' },
    { label: 'Services', href: '/au/services', hasSubmenu: true },
    { label: 'Case Studies', href: '/au/case-studies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
    {
        label: 'Web Development',
        slug: 'web-development',
        icon: MonitorSmartphone,
        color: 'from-sky-500 to-blue-700',
    },
    {
        label: 'Google Ads & PPC',
        slug: 'google-ads-and-ppc',
        icon: Megaphone,
        color: 'from-fuchsia-500 to-purple-700',
    },
    {
        label: 'Branding & Creative',
        slug: 'branding-and-creative',
        icon: PenTool,
        color: 'from-amber-500 to-orange-700',
    },
    {
        label: 'E-Commerce Development',
        slug: 'e-commerce-development',
        icon: ShoppingCart,
        color: 'from-blue-500 to-indigo-700',
    },
    {
        label: 'SEO & Technical SEO',
        slug: 'seo-and-technical-seo',
        icon: Search,
        color: 'from-teal-500 to-emerald-700',
    },
    {
        label: 'Content Marketing',
        slug: 'content-marketing',
        icon: Globe,
        color: 'from-rose-500 to-red-700',
    },
    {
        label: 'Conversion Rate Optimisation',
        slug: 'conversion-rate-optimisation',
        icon: Clapperboard,
        color: 'from-violet-500 to-indigo-700',
    },
]

const navLinkClasses =
    'rounded-lg border border-transparent px-4 py-2 transition-all duration-500 hover:border-accent/40 hover:bg-accent/10 hover:text-white hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]'

export default function Navbar() {
    const isOpen = useUIStore((state) => state.isMobileMenuOpen)
    const openMobileMenu = useUIStore((state) => state.openMobileMenu)
    const closeMobileMenu = useUIStore((state) => state.closeMobileMenu)

    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 100)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
            setMobileServicesOpen(false)
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const handleAnchorClick = (e, targetId) => {
        const target = document.getElementById(targetId)
        if (!target) return // If element isn't on current page, allow default route navigation

        e.preventDefault()
        closeMobileMenu()

        const navbarHeight = isScrolled ? 80 : 100
        const start = window.pageYOffset
        const end =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight

        const duration = 400
        let startTime = null

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            window.scrollTo({
                top: start + (end - start) * easeOutCubic(progress),
            })

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }

    const triggerClasses =
        'group relative inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent data-[state=open]:border-accent/40 data-[state=open]:bg-accent/10 data-[state=open]:text-white data-[state=open]:shadow-[0_0_16px_rgba(56,189,248,0.35)] ' +
        navLinkClasses

    const contentClasses =
        'w-[min(90vw,720px)] rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl z-[999] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2 data-[state=open]:duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=closed]:duration-150'

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 flex justify-center px-6 md:px-8 transition-all duration-1000 ${
                isScrolled ? 'pt-3' : 'pt-0'
            }`}
            style={{
                transitionTimingFunction: 'cubic-bezier(0.22, 1.2, 0.36, 1)',
            }}
        >
            <div
                className={`relative w-full max-w-7xl transition-all duration-1000 ${
                    isScrolled
                        ? 'rounded-2xl border border-white/10 bg-brand/80 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl'
                        : 'border-b border-white/10 bg-transparent backdrop-blur-none shadow-none'
                }`}
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.22, 1.2, 0.36, 1)',
                }}
            >
                {/* Thin glowing top edge when scrolled */}
                <span
                    className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent transition-opacity duration-500 ${
                        isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Inner Flex Header */}
                <div
                    className={`mx-auto flex items-center justify-between transition-all duration-1000 ease-out ${
                        isScrolled ? 'h-16 px-4 sm:px-6' : 'h-24 px-0'
                    }`}
                >
                    {/* Desktop Logo */}
                    <a href="/au" className="flex items-center shrink-0">
                        <img
                            src="/images/logo.webp"
                            alt="Digitalis Global"
                            className="h-28 lg:h-36 w-auto object-contain transition-all duration-300 lg:-ml-2 lg:scale-105"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="ml-auto hidden items-center gap-6 lg:flex">
                        <nav className="flex items-center gap-2 text-sm font-medium text-white/90">
                            <a href="/au/about" className={navLinkClasses}>
                                About
                            </a>

                            {/* Desktop Services Dropdown */}
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger className={triggerClasses}>
                                    Services
                                    <ChevronDown className="h-4 w-4 transition-transform duration-500 group-data-[state=open]:rotate-180" />
                                </DropdownMenu.Trigger>

                                <DropdownMenu.Portal>
                                    <DropdownMenu.Content
                                        sideOffset={16}
                                        align="center"
                                        className={contentClasses}
                                    >
                                        <div className="mb-5 border-l-4 border-accent pl-4">
                                            <h3 className="text-xl font-bold text-brand font-display">
                                                Our Services
                                            </h3>
                                            <p className="mt-1 text-sm text-neutral-500">
                                                Ideas turned into execution. Explore our capabilities.
                                            </p>
                                        </div>

                                        <div className="grid gap-3 sm:grid-cols-2">
                                            {serviceLinks.map((service) => {
                                                const Icon = service.icon
                                                const badgeClasses =
                                                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ' +
                                                    service.color +
                                                    ' text-white'

                                                return (
                                                    <DropdownMenu.Item
                                                        key={service.label}
                                                        asChild
                                                        className="outline-none"
                                                    >
                                                        <a
                                                            href={'/au/services/' + service.slug}
                                                            className="group/item flex items-center gap-4 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-50"
                                                        >
                                                            <span className={badgeClasses}>
                                                                <Icon className="h-5 w-5" />
                                                            </span>

                                                            <span className="flex-1 text-sm font-semibold text-neutral-900">
                                                                {service.label}
                                                            </span>

                                                            <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-accent" />
                                                        </a>
                                                    </DropdownMenu.Item>
                                                )
                                            })}
                                        </div>

                                        <div className="mt-6 border-t border-slate-100 pt-6">
                                            <Button
                                                as="a"
                                                href="/au/services"
                                                variant="primary"
                                                icon={<ArrowRight className="h-4 w-4 stroke-[2.5]" />}
                                                className="w-full justify-between px-5 py-3.5 text-sm"
                                            >
                                                View All Services
                                            </Button>
                                        </div>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Root>

                            <a href="/au/case-studies" className={navLinkClasses}>
                                Case Studies
                            </a>

                            <a
                                href="#pricing"
                                className={navLinkClasses}
                                onClick={(e) => handleAnchorClick(e, 'pricing')}
                            >
                                Pricing
                            </a>

                            <a
                                href="#contact"
                                className={navLinkClasses}
                                onClick={(e) => handleAnchorClick(e, 'contact')}
                            >
                                Contact
                            </a>
                        </nav>

                        <Button
                            as="a"
                            href="#contact"
                            variant="primary"
                            onClick={(e) => handleAnchorClick(e, 'contact')}
                            className="h-12 pl-6 pr-2 gap-4 text-sm"
                        >
                            Book a Free Strategy Call
                        </Button>
                    </div>

                    {/* Mobile Hamburger Trigger */}
                    <button
                        type="button"
                        aria-label="Open navigation menu"
                        className="ml-auto rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all hover:bg-white/10 active:scale-95 lg:hidden"
                        onClick={openMobileMenu}
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Navigation Modal */}
            {isOpen &&
                createPortal(
                    <div className="fixed inset-0 z-[999] flex justify-end lg:hidden">
                        {/* Dimmed Overlay Backdrop */}
                        <div
                            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                            onClick={closeMobileMenu}
                        />

                        {/* Animated Drawer Panel */}
                        <div className="relative z-10 flex h-full w-full max-w-xs sm:max-w-sm flex-col justify-between overflow-y-auto border-l border-white/10 bg-brand-dark/95 p-6 shadow-2xl backdrop-blur-2xl transition-transform animate-in slide-in-from-right duration-300">

                            {/* Drawer Header */}
                            <div>
                                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                                    <a
                                        href="/au"
                                        onClick={closeMobileMenu}
                                        className="flex items-center"
                                    >
                                        <img
                                            src="/images/logo.webp"
                                            alt="Digitalis Global"
                                            className="h-24 sm:h-28 w-auto object-contain"
                                        />
                                    </a>

                                    <button
                                        type="button"
                                        aria-label="Close navigation menu"
                                        className="rounded-full border border-white/20 bg-white/5 p-2.5 text-white transition-all hover:bg-white/10 active:scale-95"
                                        onClick={closeMobileMenu}
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Mobile Navigation Links */}
                                <nav className="mt-8 flex flex-col gap-2">
                                    {links.map((link, idx) => {
                                        if (link.hasSubmenu) {
                                            return (
                                                <div key={link.label} className="flex flex-col">
                                                    {/* Services Header Toggle */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                        style={{
                                                            animationDelay: `${idx * 60}ms`,
                                                        }}
                                                        className="group flex items-center justify-between rounded-xl border-l-2 border-transparent px-4 py-3.5 text-lg font-semibold text-white/90 transition-all duration-300 hover:border-accent hover:bg-white/[0.06] hover:text-white animate-in fade-in slide-in-from-right-4 duration-300"
                                                    >
                                                        <span className="text-left font-display tracking-wide">
                                                            {link.label}
                                                        </span>
                                                        <ChevronDown
                                                            className={`h-5 w-5 text-white/40 transition-transform duration-300 ${
                                                                mobileServicesOpen ? 'rotate-180 text-cyan-400' : ''
                                                            }`}
                                                        />
                                                    </button>

                                                    {/* Expanded Mobile Services Accordion */}
                                                    {mobileServicesOpen && (
                                                        <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3 animate-in fade-in slide-in-from-top-2 duration-200">
                                                            {serviceLinks.map((s) => (
                                                                <a
                                                                    key={s.slug}
                                                                    href={'/au/services/' + s.slug}
                                                                    onClick={closeMobileMenu}
                                                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                                                                >
                                                                    {s.label}
                                                                </a>
                                                            ))}

                                                            {/* Main View All Services Page Direct Link */}
                                                            <div className="pt-2">
                                                                <a
                                                                    href="/au/services"
                                                                    onClick={closeMobileMenu}
                                                                    className="flex items-center justify-between rounded-lg bg-cyan-400/10 border border-cyan-400/20 px-3 py-2.5 text-sm font-semibold text-cyan-400 hover:bg-cyan-400/20 transition-all"
                                                                >
                                                                    <span>View All Services</span>
                                                                    <ArrowRight className="h-4 w-4" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        }

                                        const isAnchor = link.href.startsWith('#')

                                        return (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                style={{
                                                    animationDelay: `${idx * 60}ms`,
                                                }}
                                                className="group flex items-center justify-between rounded-xl border-l-2 border-transparent px-4 py-3.5 text-lg font-semibold text-white/90 transition-all duration-300 hover:border-accent hover:bg-white/[0.06] hover:text-white animate-in fade-in slide-in-from-right-4 duration-300"
                                                onClick={(e) => {
                                                    if (isAnchor) {
                                                        handleAnchorClick(e, link.href.replace('#', ''))
                                                    } else {
                                                        closeMobileMenu()
                                                    }
                                                }}
                                            >
                                                <span className="text-left font-display tracking-wide">
                                                    {link.label}
                                                </span>
                                                <ArrowRight className="h-4 w-4 text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                                            </a>
                                        )
                                    })}
                                </nav>
                            </div>

                            {/* Drawer Footer CTA */}
                            <div className="mt-8 border-t border-white/10 pt-6">
                                <div className="mb-4 flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/10 px-3.5 py-2.5 text-xs font-semibold text-accent">
                                    <Sparkles className="h-4 w-4 shrink-0" />
                                    <span>Ready to elevate your digital presence?</span>
                                </div>

                                <Button
                                    as="a"
                                    href="#contact"
                                    variant="primary"
                                    icon={<ArrowRight className="h-4 w-4 stroke-[2.5]" />}
                                    className="w-full justify-between px-5 py-3.5 text-sm"
                                    onClick={(e) => handleAnchorClick(e, 'contact')}
                                >
                                    Book a Strategy Call
                                </Button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </header>
    )
}
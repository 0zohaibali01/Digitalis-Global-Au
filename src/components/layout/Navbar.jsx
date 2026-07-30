import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
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
    Zap
} from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Button from '../ui/Button'
import useUIStore from '../../store/useUIStore'

const links = [
    { label: 'About', href: '/au/about' },
    { label: 'Services', href: '/au/services', hasSubmenu: true },
    { label: 'Case Studies', href: '/au/case-studies' },
    { label: 'Pricing', href: '/au/pricing' },
    { label: 'Contact', href: '/au/contact' },
]

const serviceLinks = [
    {
        label: 'Web Development',
        slug: 'web-development',
        desc: 'Custom high-performance web apps & platforms',
        icon: MonitorSmartphone,
        color: 'bg-sky-50 text-sky-600 border-sky-200 group-hover/card:bg-sky-500 group-hover/card:text-white',
    },
    {
        label: 'Google Ads & PPC',
        slug: 'google-ads-and-ppc',
        desc: 'High-ROI paid search & campaign management',
        icon: Megaphone,
        color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200 group-hover/card:bg-fuchsia-500 group-hover/card:text-white',
    },
    {
        label: 'Branding & Creative',
        slug: 'branding-and-creative',
        desc: 'Visual identities that command attention',
        icon: PenTool,
        color: 'bg-amber-50 text-amber-600 border-amber-200 group-hover/card:bg-amber-500 group-hover/card:text-white',
    },
    {
        label: 'E-Commerce Development',
        slug: 'e-commerce-development',
        desc: 'Scalable online stores engineered to convert',
        icon: ShoppingCart,
        color: 'bg-indigo-50 text-indigo-600 border-indigo-200 group-hover/card:bg-indigo-500 group-hover/card:text-white',
    },
    {
        label: 'SEO & Technical SEO',
        slug: 'seo-and-technical-seo',
        desc: 'Dominate rankings with data-driven strategy',
        icon: Search,
        color: 'bg-teal-50 text-teal-600 border-teal-200 group-hover/card:bg-teal-500 group-hover/card:text-white',
    },
    {
        label: 'Content Marketing',
        slug: 'content-marketing',
        desc: 'Engaging content that drives organic revenue',
        icon: Globe,
        color: 'bg-rose-50 text-rose-600 border-rose-200 group-hover/card:bg-rose-500 group-hover/card:text-white',
    },
    {
        label: 'Conversion Rate Optimisation',
        slug: 'conversion-rate-optimisation',
        desc: 'Turn traffic into qualified leads & sales',
        icon: Clapperboard,
        color: 'bg-violet-50 text-violet-600 border-violet-200 group-hover/card:bg-violet-500 group-hover/card:text-white',
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

    const navigate = useNavigate()

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


    const triggerClasses =
        'group relative inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent data-[state=open]:border-accent/40 data-[state=open]:bg-accent/10 data-[state=open]:text-white data-[state=open]:shadow-[0_0_16px_rgba(56,189,248,0.35)] ' +
        navLinkClasses

    const contentClasses =
        'relative w-[min(92vw,800px)] rounded-3xl border border-white/20 bg-white p-6 text-slate-900 shadow-[0_25px_70px_rgba(0,0,0,0.6)] z-[999] overflow-hidden ' +
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-6 data-[state=open]:duration-300 ' +
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-4 data-[state=closed]:duration-200'

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 flex justify-center px-6 md:px-8 transition-all duration-1000 ${isScrolled ? 'pt-3' : 'pt-0'
                }`}
            style={{
                transitionTimingFunction: 'cubic-bezier(0.22, 1.2, 0.36, 1)',
            }}
        >
            <div
                className={`relative w-full max-w-7xl transition-all duration-1000 ${isScrolled
                    ? 'rounded-2xl border border-white/10 bg-brand/80 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl'
                    : 'border-b border-white/10 bg-transparent backdrop-blur-none shadow-none'
                    }`}
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.22, 1.2, 0.36, 1)',
                }}
            >
                {/* Thin glowing top edge when scrolled */}
                <span
                    className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Inner Flex Header */}
                <div
                    className={`mx-auto flex items-center justify-between transition-all duration-1000 ease-out ${isScrolled ? 'h-16 px-4 sm:px-6' : 'h-24 px-0'
                        }`}
                >
                    {/* Desktop & Mobile Logo */}
                    <Link to="/au" className="flex items-center shrink-0">
                        {/* ADDED: h-10 sm:h-12 for mobile to prevent logo from breaking layout */}
                        <div className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto lg:-ml-2 lg:scale-105 transition-all duration-300 flex items-center">
                            <img
                                src="/images/logo.webp"
                                alt="Digitalis Global"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="ml-auto hidden items-center gap-6 lg:flex">
                        <nav className="flex items-center gap-2 text-sm font-medium text-white/90">
                            <Link to="/au/about" className={navLinkClasses}>
                                About
                            </Link>

                            {/* Desktop Services Dropdown */}
                            <DropdownMenu.Root modal={false}>
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
                                        {/* Top Gradient Stripe */}
                                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500" />

                                        {/* Header */}
                                        <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4 pt-1">
                                            <div>
                                                <h3 className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
                                                    Our Digital Services
                                                </h3>
                                                <p className="mt-0.5 text-xs text-slate-500 font-medium">
                                                    Select a capability to explore case studies & pricing
                                                </p>
                                            </div>

                                            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 border border-slate-200">
                                                <Zap className="h-3.5 w-3.5 text-cyan-600" />
                                                7 Capabilities
                                            </span>
                                        </div>

                                        {/* Service Grid */}
                                        <div className="grid gap-2.5 sm:grid-cols-2">
                                            {serviceLinks.map((service, index) => {
                                                const Icon = service.icon

                                                return (
                                                    <DropdownMenu.Item
                                                        key={service.label}
                                                        asChild
                                                        className="outline-none"
                                                    >
                                                        <Link
                                                            to={'/au/services/' + service.slug}
                                                            style={{
                                                                animationDelay: `${index * 35}ms`,
                                                            }}
                                                            className="group/card flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-300"
                                                        >
                                                            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${service.color}`}>
                                                                <Icon className="h-5 w-5" />
                                                            </span>

                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-center justify-between">
                                                                    <p className="text-sm font-bold text-slate-900 group-hover/card:text-cyan-600 transition-colors">
                                                                        {service.label}
                                                                    </p>
                                                                    <ArrowRight className="h-4 w-4 shrink-0 opacity-0 -translate-x-2 text-cyan-600 transition-all duration-300 group-hover/card:opacity-100 group-hover/card:translate-x-0" />
                                                                </div>
                                                                <p className="mt-0.5 text-xs text-slate-500 line-clamp-1">
                                                                    {service.desc}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </DropdownMenu.Item>
                                                )
                                            })}
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 pt-4">
                                            <p className="text-xs text-slate-500 font-medium">
                                                Looking for a custom end-to-end growth strategy?
                                            </p>

                                            <DropdownMenu.Item asChild className="outline-none">
                                                <Button
                                                    as={Link}
                                                    to="/au/services"
                                                    variant="primary"
                                                    className="gap-4 px-6 py-3.5 text-xs font-bold tracking-wider uppercase"
                                                >
                                                    <span className='py-4'>View All Services</span>
                                                </Button>
                                            </DropdownMenu.Item>
                                        </div>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Root>

                            <Link to="/au/case-studies" className={navLinkClasses}>
                                Case Studies
                            </Link>

                            <Link to="/au/pricing" className={navLinkClasses}>
                                Pricing
                            </Link>


                        </nav>

                        <Button
                            as={Link}
                            to="/au/contact"
                            variant="primary"
                            className="h-12 pl-6 pr-2 gap-4 text-sm"
                        >
                            Book a Free Strategy Call
                        </Button>
                    </div>

                    {/* Mobile Hamburger Trigger */}
                    <button
                        type="button"
                        aria-label="Open navigation menu"
                        className="ml-auto shrink-0 rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all hover:bg-white/10 active:scale-95 lg:hidden"
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
                                    <Link
                                        to="/au"
                                        onClick={closeMobileMenu}
                                        className="flex items-center shrink-0"
                                    >
                                        <img
                                            src="/images/logo.webp"
                                            alt="Digitalis Global"
                                            // ADDED: changed from h-24 sm:h-28 down to h-10 sm:h-12 so it fits inline with the X button properly
                                            className="h-20 sm:h-12 w-auto object-contain"
                                        />
                                    </Link>

                                    <button
                                        type="button"
                                        aria-label="Close navigation menu"
                                        className="rounded-full shrink-0 border border-white/20 bg-white/5 p-2.5 text-white transition-all hover:bg-white/10 active:scale-95"
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
                                                            className={`h-5 w-5 text-white/40 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-cyan-400' : ''
                                                                }`}
                                                        />
                                                    </button>

                                                    {/* Expanded Mobile Services Accordion */}
                                                    {mobileServicesOpen && (
                                                        <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3 animate-in fade-in slide-in-from-top-2 duration-200">
                                                            {serviceLinks.map((s) => (
                                                                <Link
                                                                    key={s.slug}
                                                                    to={'/au/services/' + s.slug}
                                                                    onClick={closeMobileMenu}
                                                                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                                                                >
                                                                    {s.label}
                                                                </Link>
                                                            ))}

                                                            <div className="pt-2">
                                                                <Link
                                                                    to="/au/services"
                                                                    onClick={closeMobileMenu}
                                                                    className="flex items-center justify-between rounded-lg bg-cyan-400/10 border border-cyan-400/20 px-3 py-2.5 text-sm font-semibold text-cyan-400 hover:bg-cyan-400/20 transition-all"
                                                                >
                                                                    <span>View All Services</span>
                                                                    <ArrowRight className="h-4 w-4" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        }

                                        return (
                                            <Link
                                                key={link.label}
                                                to={link.href}
                                                style={{
                                                    animationDelay: `${idx * 60}ms`,
                                                }}
                                                className="group flex items-center justify-between rounded-xl border-l-2 border-transparent px-4 py-3.5 text-lg font-semibold text-white/90 transition-all duration-300 hover:border-accent hover:bg-white/[0.06] hover:text-white animate-in fade-in slide-in-from-right-4 duration-300"
                                                onClick={closeMobileMenu}
                                            >
                                                <span className="text-left font-display tracking-wide">
                                                    {link.label}
                                                </span>
                                                <ArrowRight className="h-4 w-4 text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                                            </Link>
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
                                    as={Link}
                                    to="/au/contact"
                                    variant="primary"
                                    className="w-full justify-between px-5 py-3.5 text-sm"
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
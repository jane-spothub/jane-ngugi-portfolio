'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {router} from "next/client";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false)
        }
        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [])

    const scrollToSection = (sectionId: string) => {
        // If we're not on the homepage, navigate to homepage with hash
        if (pathname !== '/') {
            router.push(`/#${sectionId}`)
            return
        }

        // If we're on homepage, scroll to section
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        setIsMenuOpen(false)
    }

    // Navigation items - mix of routes and sections
    const navItems = [
        {
            name: 'Home',
            type: 'route' as const,
            href: '/',
            description: 'Welcome page'
        },
        {
            name: 'Skills',
            type: 'section' as const,
            id: 'skills',
            description: 'My expertise'
        },
        {
            name: 'Projects',
            type: 'section' as const,
            id: 'projects',
            description: 'My work portfolio'
        },
        {
            name: 'Contact',
            type: 'section' as const,
            id: 'contact',
            description: 'Get in touch'
        }
    ]

    const navVariants: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const menuItemVariants: Variants = {
        hidden: { x: -20, opacity: 0 },
        visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
        hover: {
            scale: 1.1,
            color: "#fb923c",
            transition: {
                duration: 0.2
            }
        }
    }

    const mobileMenuVariants: Variants = {
        closed: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const mobileMenuItemVariants: Variants = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    }

    const iconVariants: Variants = {
        hidden: { rotate: -90, opacity: 0 },
        visible: { rotate: 0, opacity: 1 },
        exit: { rotate: 90, opacity: 0 }
    }

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    return (
        <>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'glass-effect shadow-2xl backdrop-blur-xl'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="cursor-pointer"
                            >
                                <h1 className="text-2xl font-black gradient-text tracking-tight">
                                    JW
                                </h1>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-2">
                            {navItems.map((item, index) => (
                                item.type === 'route' ? (
                                    <Link
                                        key={item.name}
                                        href={item.href!}
                                        className="relative px-6 py-2 text-gray-300 font-semibold rounded-full transition-colors duration-300 group"
                                    >
                                        <motion.span
                                            custom={index}
                                            variants={menuItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                            className="block"
                                        >
                                            {item.name}
                                        </motion.span>
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-600 group-hover:w-full transition-all duration-300"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: '100%' }}
                                        />
                                    </Link>
                                ) : (
                                    <motion.button
                                        key={item.name}
                                        custom={index}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                        onClick={() => scrollToSection(item.id!)}
                                        className="relative px-6 py-2 text-gray-300 font-semibold rounded-full transition-colors duration-300 group"
                                    >
                                        {item.name}
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-600 group-hover:w-full transition-all duration-300"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: '100%' }}
                                        />
                                    </motion.button>
                                )
                            ))}

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 20px rgba(251, 146, 60, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="ml-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 orange-glow"
                            >
                                Hire Me
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden p-2 rounded-lg glass-effect border border-orange-500/30"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.2 }}
                                    >
                                        <XMarkIcon className="w-6 h-6 text-orange-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        variants={iconVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Bars3Icon className="w-6 h-6 text-orange-400" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <div className="fixed inset-0 z-60 md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="absolute top-0 right-0 h-full w-80 max-w-full bg-gray-900/95 backdrop-blur-xl shadow-2xl border-l border-orange-500/20"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="p-6 border-b border-orange-500/20">
                                    <div className="flex items-center justify-between mb-4">
                                        <Link
                                            href="/"
                                            className="flex items-center space-x-3 group"
                                            onClick={handleLinkClick}
                                        >
                                            <h1 className="text-2xl font-black gradient-text tracking-tight">
                                                JW
                                            </h1>
                                        </Link>
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                            className="p-2 rounded-lg hover:bg-orange-500/10 transition-colors"
                                            aria-label="Close menu"
                                        >
                                            <XMarkIcon className="w-6 h-6 text-orange-400" />
                                        </button>
                                    </div>
                                </div>

                                {/* Navigation Links */}
                                <div className="flex-1 overflow-y-auto p-6 space-y-2">
                                    {navItems.map((item, index) => (
                                        item.type === 'route' ? (
                                            <Link
                                                key={item.name}
                                                href={item.href!}
                                                onClick={handleLinkClick}
                                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-500/10 transition-all duration-300 group border border-transparent hover:border-orange-500/30"
                                            >
                                                <div className="flex-1">
                                                    <div className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-sm text-gray-400 group-hover:text-gray-300">
                                                        {item.description}
                                                    </div>
                                                </div>
                                                <span className="text-orange-400 group-hover:translate-x-1 transition-transform">
                                                    →
                                                </span>
                                            </Link>
                                        ) : (
                                            <motion.button
                                                key={item.name}
                                                variants={mobileMenuItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => scrollToSection(item.id!)}
                                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-orange-500/10 transition-all duration-300 group border border-transparent hover:border-orange-500/30 w-full text-left"
                                                whileHover={{ x: 10 }}
                                            >
                                                <div className="flex-1">
                                                    <div className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-sm text-gray-400 group-hover:text-gray-300">
                                                        {item.description}
                                                    </div>
                                                </div>
                                                <span className="text-orange-400 group-hover:translate-x-1 transition-transform">
                                                    →
                                                </span>
                                            </motion.button>
                                        )
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className="p-6 border-t border-orange-500/20">
                                    <motion.button
                                        onClick={() => scrollToSection('contact')}
                                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-xl transition-all duration-300 orange-glow flex items-center justify-center gap-3"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Let&#39;s Work Together
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
'use client'
import { motion, Variants } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }

    const scrollIndicatorAnimation = {
        y: [0, 12, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Main Title */}
                    <motion.div variants={itemVariants}>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
                            <span className="gradient-text block">JANE</span>
                            <span className="gradient-text block">NGUGI</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-6">
                            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent font-semibold">
                                Game Developer
                            </span>
                            <span className="text-gray-400 mx-4">|</span>
                            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent font-semibold">
                                Digital Designer
                            </span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.div variants={itemVariants}>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                            Crafting <span className="text-orange-400 font-semibold">interactive experiences</span> and{' '}
                            <span className="text-red-400 font-semibold">bold visual content</span> that bridges{' '}
                            <span className="gradient-text font-semibold">creativity</span> with{' '}
                            <span className="gradient-text font-semibold">technology</span>
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(251, 146, 60, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl orange-glow"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('projects')
                            }}
                        >
                            🎮 View My Work
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(251, 146, 60, 0.2)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-effect hover:bg-orange-500/20 border-orange-500/30 text-orange-300 px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-xl"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('contact')
                            }}
                        >
                            💬 Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-12"
                    >
                        {[
                            { number: "10+", label: "Projects" },
                            { number: "3+", label: "Years Exp" },
                            { number: "100%", label: "Creative" },
                            { number: "∞", label: "Passion" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                whileHover={{ scale: 1.1 }}
                                className="text-center"
                            >
                                <div className="text-2xl md:text-3xl font-bold gradient-text">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={floatingAnimation}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                onClick={() => scrollToSection('skills')}
            >
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-gray-400 text-sm font-light">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
                        <motion.div
                            animate={scrollIndicatorAnimation}
                            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
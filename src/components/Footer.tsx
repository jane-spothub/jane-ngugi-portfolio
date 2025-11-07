'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, CodeBracketIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-gray-900 border-t border-orange-500/20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2"
                    >
                        <h3 className="text-2xl font-black gradient-text mb-4">
                            JANE NGUGI
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                            Game Developer & Digital Designer crafting interactive experiences
                            and bold visual content that bridges creativity with technology.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {[
                                {
                                    name: 'GitHub',
                                    url: 'https://github.com/jane-spothub',
                                    icon: CodeBracketIcon
                                },
                                {
                                    name: 'Email',
                                    url: 'mailto:warucho@gmail.com',
                                    icon: EnvelopeIcon
                                },
                                // Add more social links as needed
                            ].map((social, index) => {
                                const IconComponent = social.icon
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            scale: 1.1,
                                            y: -2
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 bg-orange-500/10 text-orange-300 rounded-xl hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                                        title={social.name}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <motion.a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-orange-400 transition-colors duration-300 block py-1"
                                        whileHover={{ x: 5 }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const element = document.getElementById(item.toLowerCase())
                                            element?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                    >
                                        {item}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-3">
                            {[
                                'Game Development',
                                'Web Applications',
                                'UI/UX Design',
                                'Brand Identity',
                                'Interactive Experiences'
                            ].map((service) => (
                                <li key={service}>
                                    <span className="text-gray-400 text-sm block py-1">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-orange-500/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; {currentYear} Jane Ngugi. All rights reserved.
                    </div>

                    <motion.div
                        className="flex items-center gap-2 text-gray-400 text-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span>Made with</span>
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                        >
                            <HeartIcon className="w-4 h-4 text-red-500" />
                        </motion.div>
                        <span>using Next.js & Tailwind CSS</span>
                    </motion.div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-8"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 glass-effect border border-orange-500/30 text-orange-300 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm"
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById('contact')
                            element?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        <EnvelopeIcon className="w-4 h-4" />
                        Start a Project
                    </motion.a>
                </motion.div>
            </div>
        </footer>
    )
}
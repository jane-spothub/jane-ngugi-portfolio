'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

const contactVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants: Variants = {
    hidden: {
        y: 30,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

const fadeInUpVariants: Variants = {
    hidden: {
        y: 40,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

const contactInfo = [
    {
        icon: EnvelopeIcon,
        title: "Email",
        value: "warucho@gmail.com",
        link: "mailto:warucho@gmail.com",
        description: "Send me an email anytime"
    },
    {
        icon: PhoneIcon,
        title: "Phone",
        value: "+254 791 847 766",
        link: "tel:+254791847766",
        description: "Mon - Fri, 9AM - 6PM"
    },
    {
        icon: MapPinIcon,
        title: "Location",
        value: "Nairobi, Kenya",
        link: "#",
        description: "Available for remote work worldwide"
    }
]

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            // Create FormData object for traditional form submission
            const formDataToSend = new FormData()
            formDataToSend.append('name', formData.name)
            formDataToSend.append('email', formData.email)
            formDataToSend.append('subject', formData.subject)
            formDataToSend.append('message', formData.message)
            formDataToSend.append('_replyto', formData.email) // For reply-to functionality

            const response = await fetch('https://formspree.io/f/mqagrrae', {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setIsSubmitted(true)
                setFormData({ name: '', email: '', subject: '', message: '' })

                // Reset form after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false)
                }, 5000)
            } else {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Failed to send message')
            }
        } catch (err) {
            setError('Failed to send message. Please try again or email me directly.')
            console.error('Form submission error:', err)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        // Clear error when user starts typing again
        if (error) setError('')
    }

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUpVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
                        whileInView={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Let&#39;s Create Something Amazing
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Ready to bring your next project to life? Let&#39;s discuss how we can work together
                        to create something extraordinary.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={contactVariants}
                        className="lg:col-span-1"
                    >
                        <motion.h3
                            className="text-2xl font-bold text-white mb-8"
                            variants={itemVariants}
                        >
                            Get In Touch
                        </motion.h3>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => {
                                const IconComponent = item.icon
                                return (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        variants={itemVariants}
                                        whileHover={{
                                            x: 5,
                                            scale: 1.02
                                        }}
                                        className="flex items-start gap-4 p-4 rounded-xl glass-effect border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-orange-400 font-medium text-lg">
                                                {item.value}
                                            </p>
                                            <p className="text-gray-400 text-sm mt-1">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.a>
                                )
                            })}
                        </div>

                        {/* Social Links */}
                        {/*<motion.div*/}
                        {/*    variants={itemVariants}*/}
                        {/*    className="mt-8 p-6 rounded-xl glass-effect border border-orange-500/20"*/}
                        {/*>*/}
                        {/*    <h4 className="font-semibold text-white mb-4">Follow My Work</h4>*/}
                        {/*    <div className="flex space-x-4">*/}
                        {/*        {[*/}
                        {/*            { name: 'GitHub', url: 'https://github.com/jane-spothub' },*/}
                        {/*            { name: 'LinkedIn', url: '#' },*/}
                        {/*            { name: 'Twitter', url: '#' },*/}
                        {/*            { name: 'Dribbble', url: '#' }*/}
                        {/*        ].map((platform, index) => (*/}
                        {/*            <motion.a*/}
                        {/*                key={platform.name}*/}
                        {/*                href={platform.url}*/}
                        {/*                target="_blank"*/}
                        {/*                rel="noopener noreferrer"*/}
                        {/*                whileHover={{*/}
                        {/*                    scale: 1.1,*/}
                        {/*                    y: -2*/}
                        {/*                }}*/}
                        {/*                whileTap={{ scale: 0.95 }}*/}
                        {/*                className="p-3 bg-orange-500/10 text-orange-300 rounded-lg hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"*/}
                        {/*            >*/}
                        {/*                <span className="text-sm font-medium">{platform.name}</span>*/}
                        {/*            </motion.a>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*</motion.div>*/}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={contactVariants}
                        className="lg:col-span-2"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="glass-effect p-8 rounded-2xl border border-orange-500/20 shadow-xl"
                        >
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <PaperAirplaneIcon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-400 text-lg">
                                        Thank you for reaching out. I&#39;ll get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    <motion.h3
                                        className="text-2xl font-bold text-white mb-2"
                                        variants={itemVariants}
                                    >
                                        Send a Message
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-400 mb-8"
                                        variants={itemVariants}
                                    >
                                        Fill out the form below and I&#39;ll get back to you as soon as possible.
                                    </motion.p>

                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                                        >
                                            {error}
                                        </motion.div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-500 transition-all duration-300 backdrop-blur-sm"
                                                    placeholder="Enter your full name"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </motion.div>
                                            <motion.div variants={itemVariants}>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-500 transition-all duration-300 backdrop-blur-sm"
                                                    placeholder="Enter your email address"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </motion.div>
                                        </div>

                                        <motion.div variants={itemVariants}>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-500 transition-all duration-300 backdrop-blur-sm"
                                                placeholder="What's this about?"
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-500 transition-all duration-300 resize-none backdrop-blur-sm"
                                                placeholder="Tell me about your project, timeline, and budget..."
                                                required
                                                disabled={isSubmitting}
                                            ></textarea>
                                        </motion.div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: isSubmitting ? 1 : 1.02,
                                                boxShadow: isSubmitting ? "none" : "0 10px 30px rgba(251, 146, 60, 0.3)"
                                            }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <PaperAirplaneIcon className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
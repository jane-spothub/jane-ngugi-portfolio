'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projects = [
    {
        title: "Casino Spin Game",
        description: "Spin Corner is an immersive spinning wheel casino game featuring real-time physics simulations, dynamic gradient animations, and responsive touch controls. Built with React and TypeScript, this game demonstrates advanced Canvas rendering techniques and smooth 60fps animations for authentic casino gaming experience.",
        tech: ["React", "Canvas", "TypeScript", "Physics Engine", "Animation"],
        category: "🎮 Game Development",
        githubUrl: "https://github.com/jane-spothub/spin-corner",
        liveUrl: "https://spincorner.netlify.app/",
        featured: true
    },
    {
        title: "Casino Slot Game",
        description: "Safari Fortunes is a wildlife-themed slot machine game showcasing animated animal symbols, dynamic payline calculations, and authentic slot mechanics. Features include particle effects on wins, progressive jackpots, and mobile-optimized touch controls. The game highlights advanced game state management and visual feedback systems.",
        tech: ["React", "Canvas", "TypeScript", "Game Design", "Particle Systems"],
        category: "🎮 Game Development",
        githubUrl: "https://github.com/jane-spothub/safari-fortunes",
        liveUrl: "https://fortunesafari.netlify.app/",
        featured: true
    },
    {
        title: "Casino Gaming Platform",
        description: "A comprehensive casino gaming platform featuring multiple games, user authentication, and real-time leaderboards. Built with Next.js for optimal SEO and performance, this full-stack application includes admin dashboards, payment processing simulations, and responsive design for both desktop and mobile gaming experiences.",
        tech: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "Authentication"],
        category: "💻 Full Stack",
        githubUrl: "https://github.com/jane-spothub/casino-platform",
        liveUrl: "https://casino-mvp-hazel.vercel.app/",
        featured: true
    },
    {
        title: "Interactive Campaign Website",
        description: "An engaging political campaign website featuring interactive data visualizations, animated infographics, and dynamic content loading. Showcases advanced frontend techniques with smooth scroll animations, interactive maps, and real-time content updates to create an immersive user experience for political engagement.",
        tech: ["React", "TypeScript", "Data Visualization", "Animation", "UI/UX"],
        category: "🌐 Interactive Web",
        githubUrl: "https://github.com/jane-spothub/nyaga-campaign",
        liveUrl: "https://nyaga-campaign-po1i.vercel.app/",
        featured: false
    },
    {
        title: "AI Wellness Coach Platform",
        description: "Glow Plan is an AI-powered wellness platform that generates personalized daily plans for skin health, hormonal balance, and weight management. Features include AI-generated routines, progress tracking, and interactive wellness assessments. Built with modern web technologies for seamless user experience.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "AI Integration", "Health Tech"],
        category: "🤖 AI & Wellness",
        githubUrl: "https://github.com/jane-spothub/glow-plan",
        liveUrl: "https://gloplan-landing.vercel.app/",
        featured: false
    }
    // {
    //     title: "E-commerce Analytics Dashboard",
    //     description: "A real-time analytics dashboard for e-commerce businesses featuring interactive charts, sales metrics, and customer behavior insights. Demonstrates data visualization expertise with responsive charts, real-time updates, and comprehensive business intelligence features.",
    //     tech: ["React", "D3.js", "TypeScript", "Data Visualization", "Analytics"],
    //     category: "📊 Data Visualization",
    //     githubUrl: "https://github.com/jane-spothub/ecommerce-analytics",
    //     liveUrl: "#",
    //     featured: false
    // }
]

// const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2
//         }
//     }
// }

const itemVariants: Variants = {
    hidden: {
        y: 30,
        opacity: 0,
        scale: 0.9
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier equivalent of easeOut
        }
    }
}

// Simple hover animation without complex transition typing
const cardHoverAnimation = {
    y: -8,
    scale: 1.02
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

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const techBadgeVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4
        }
    }
}

export default function Projects() {
    const featuredProjects = projects.filter(project => project.featured)
    const otherProjects = projects.filter(project => !project.featured)

    return (
        <section id="projects" className="py-20 bg-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUpVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
                        whileInView={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        My Projects
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        A collection of my work in game development, web applications, and creative coding
                    </motion.p>
                </motion.div>

                {/* Featured Projects */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="mb-20"
                >
                    <motion.h3
                        className="text-2xl font-semibold text-orange-400 mb-12 text-center"
                        variants={fadeInUpVariants}
                    >
                        Featured Projects
                    </motion.h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                whileHover={cardHoverAnimation}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                custom={index}
                                className="group cursor-pointer"
                            >
                                <div className="glass-effect rounded-2xl overflow-hidden border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/10">
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <motion.span
                                                className="text-sm text-orange-400 font-semibold px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {project.category}
                                            </motion.span>
                                            <div className="flex space-x-3">
                                                {/*<motion.a*/}
                                                {/*    href={project.githubUrl}*/}
                                                {/*    target="_blank"*/}
                                                {/*    rel="noopener noreferrer"*/}
                                                {/*    className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-500/10"*/}
                                                {/*    whileHover={{ scale: 1.1 }}*/}
                                                {/*    whileTap={{ scale: 0.9 }}*/}
                                                {/*>*/}
                                                {/*    <CodeBracketIcon className="w-5 h-5" />*/}
                                                {/*</motion.a>*/}
                                                {project.liveUrl && (
                                                    <motion.a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-500/10"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                                    </motion.a>
                                                )}
                                            </div>
                                        </div>

                                        <motion.h3
                                            className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-400 mb-6 leading-relaxed text-lg"
                                            whileHover={{ x: 2 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {project.description}
                                        </motion.p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    variants={techBadgeVariants}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    transition={{ delay: techIndex * 0.1 }}
                                                    className="bg-orange-500/10 text-orange-300 px-3 py-2 rounded-full text-sm border border-orange-500/20 hover:bg-orange-500/20 transition-colors cursor-default"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Other Projects */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    <motion.h3
                        className="text-2xl font-semibold text-orange-400 mb-12 text-center"
                        variants={fadeInUpVariants}
                    >
                        Other Projects
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                whileHover={cardHoverAnimation}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                custom={index}
                                className="group"
                            >
                                <div className="glass-effect rounded-xl p-6 border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col shadow-md hover:shadow-lg hover:shadow-orange-500/5">
                                    <div className="flex justify-between items-start mb-4">
                                        <motion.span
                                            className="text-xs text-orange-400 font-semibold px-2 py-1 rounded-full bg-orange-500/10 border border-orange-500/20"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {project.category}
                                        </motion.span>

                                        {project.liveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-500/10"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                            </motion.a>
                                        )}
                                    </div>

                                    <motion.h4
                                        className="font-bold text-white mb-3 group-hover:text-orange-300 transition-colors text-lg"
                                        whileHover={{ x: 3 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {project.title}
                                    </motion.h4>
                                    <motion.p
                                        className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed"
                                        whileHover={{ x: 2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {project.description}
                                    </motion.p>

                                    <div className="flex flex-wrap gap-1 mt-auto">
                                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                variants={techBadgeVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                transition={{ delay: techIndex * 0.1 }}
                                                className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs hover:bg-gray-600 transition-colors cursor-default"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* GitHub CTA */}
                {/*<motion.div*/}
                {/*    initial="hidden"*/}
                {/*    whileInView="visible"*/}
                {/*    viewport={{ once: true }}*/}
                {/*    variants={fadeInUpVariants}*/}
                {/*    className="text-center mt-20"*/}
                {/*>*/}
                {/*    /!*<motion.p*!/*/}
                {/*    /!*    className="text-gray-400 mb-8 text-lg"*!/*/}
                {/*    /!*    initial={{ opacity: 0 }}*!/*/}
                {/*    /!*    whileInView={{ opacity: 1 }}*!/*/}
                {/*    /!*    viewport={{ once: true }}*!/*/}
                {/*    /!*    transition={{ duration: 0.6, delay: 0.2 }}*!/*/}
                {/*    /!*>*!/*/}
                {/*    /!*    Want to explore more of my code and projects?*!/*/}
                {/*    /!*</motion.p>*!/*/}
                {/*    /!*<motion.a*!/*/}
                {/*    /!*    href="https://github.com/jane-spothub"*!/*/}
                {/*    /!*    target="_blank"*!/*/}
                {/*    /!*    rel="noopener noreferrer"*!/*/}
                {/*    /!*    whileHover={{*!/*/}
                {/*    /!*        scale: 1.05,*!/*/}
                {/*    /!*    }}*!/*/}
                {/*    /!*    whileTap={{ scale: 0.95 }}*!/*/}
                {/*    /!*    className="inline-flex items-center gap-3 glass-effect border border-orange-500/30 text-orange-300 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/10"*!/*/}
                {/*    /!*>*!/*/}
                {/*    /!*    <motion.div*!/*/}
                {/*    /!*        animate={{ rotate: [0, 10, -10, 0] }}*!/*/}
                {/*    /!*        transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}*!/*/}
                {/*    /!*    >*!/*/}
                {/*    /!*        <CodeBracketIcon className="w-6 h-6" />*!/*/}
                {/*    /!*    </motion.div>*!/*/}
                {/*    /!*    View All Projects on GitHub*!/*/}
                {/*    /!*</motion.a>*!/*/}
                {/*</motion.div>*/}
            </div>
        </section>
    )
}
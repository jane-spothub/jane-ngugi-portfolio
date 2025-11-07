'use client'

import { motion, Variants } from 'framer-motion'
import { CodeBracketIcon, PaintBrushIcon, ServerIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const skills = [
    {
        category: "🎮 Game & Web Development",
        items: ["React", "TypeScript", "Canvas", "Next.js", "Interactive Experiences", "Three.js", "WebGL", "PWA"],
        description: "Creating immersive browser-based games and interactive web experiences with modern frameworks and cutting-edge web technologies.",
        icon: CodeBracketIcon,
        color: "from-orange-400 to-amber-500"
    },
    {
        category: "⚙️ Backend Engineering",
        items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "REST APIs", "GraphQL", "Docker", "AWS"],
        description: "Building scalable, high-performance server architectures and APIs that power seamless user experiences.",
        icon: ServerIcon,
        color: "from-red-500 to-orange-600"
    },
    {
        category: "🎨 Graphic Design",
        items: ["Brand Identity", "Marketing Visuals", "Social Media Graphics", "Office Branding", "UI/UX Design", "Adobe Creative Suite", "Figma", "Illustrator"],
        description: "Crafting compelling visual identities and marketing materials that communicate brand stories effectively.",
        icon: PaintBrushIcon,
        color: "from-amber-400 to-orange-500"
    },
    {
        category: "🌐 Full Creative Workflow",
        items: ["UI/UX Design", "Deployment", "Visual Assets", "Technical Implementation", "Project Management", "Agile Methodology", "CI/CD", "Performance Optimization"],
        description: "Managing projects from concept to deployment, ensuring technical excellence meets creative vision.",
        icon: RocketLaunchIcon,
        color: "from-orange-500 to-red-600"
    }
]

const containerVariants: Variants = {
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
        y: 40,
        opacity: 0,
        scale: 0.9
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

const skillTagVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 10
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
}

const fadeInUpVariants: Variants = {
    hidden: {
        y: 30,
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

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUpVariants}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
                        whileInView={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        What I Specialize In
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Blending technical expertise with creative vision to deliver exceptional digital experiences
                        that combine performance, aesthetics, and user engagement.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {skills.map((skillGroup, index) => {
                        const IconComponent = skillGroup.icon
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                                className="group cursor-pointer"
                            >
                                <div className="glass-effect p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 h-full">
                                    {/* Header with Icon */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div
                                            className={`p-3 rounded-xl bg-gradient-to-r ${skillGroup.color}  shadow-lg`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                                            {skillGroup.category}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <motion.p
                                        className="text-gray-400 mb-6 leading-relaxed text-lg"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        {skillGroup.description}
                                    </motion.p>

                                    {/* Skills Tags */}
                                    <motion.div
                                        className="flex flex-wrap gap-3"
                                        layout
                                    >
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skillIndex}
                                                variants={skillTagVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: skillIndex * 0.1,
                                                    duration: 0.4
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    y: -2
                                                }}
                                                className={`bg-gradient-to-r text-white ${skillGroup.color} bg-opacity-10 text-orange-300 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 backdrop-blur-sm`}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { number: "10+", label: "Projects Completed", color: "from-orange-400 to-amber-500" },
                        { number: "3+", label: "Years Experience", color: "from-red-500 to-orange-600" },
                        { number: "100%", label: "Client Satisfaction", color: "from-amber-400 to-orange-500" },
                        { number: "∞", label: "Creative Passion", color: "from-orange-500 to-red-600" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 rounded-2xl glass-effect border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
                        >
                            <motion.div
                                className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                                whileInView={{ scale: 1.1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-gray-400 text-sm font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    className="text-center mt-16"
                >
                    <motion.p
                        className="text-gray-400 mb-8 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Ready to bring your next project to life?
                    </motion.p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-orange-500/25"
                    >
                        <RocketLaunchIcon className="w-5 h-5" />
                        Let's Work Together
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}
export interface Project {
    title: string
    description: string
    tech: string[]
    category: string
    image?: string
    link?: string
}

export interface SkillGroup {
    category: string
    items: string[]
}
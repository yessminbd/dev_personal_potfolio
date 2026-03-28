import { ExternalLink, FolderGit2, Sparkles, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import itbs_express from "../assets/itbs_express.png"
import stylike from "../assets/stylike.png"
import webgenius from "../assets/webgenius.png"
import mealora from "../assets/mealora.png"

const projectsData = [
    {
        title: "IT Express – Food Ordering App",
        description:
            "A fast-food mobile ordering app built with Flutter, offering a smooth and intuitive experience for browsing meals by category, placing orders, and tracking them in real time. Includes a full admin dashboard to manage products and update order statuses seamlessly.",
        technologies: ["Flutter", "Dart", "Firebase", "Cloudinary", "Android Studio"],
        image: itbs_express,
        link: "https://github.com/yessminbd/itbs__express",
        accent: "var(--color-highlight)",
    },
    {
        title: "Stylike – Clothing E-Commerce",
        description:
            "Full-stack MERN e-commerce platform for clothing, featuring cart management, order processing, and payments (Stripe & cash on delivery). Includes a secure admin dashboard, JWT authentication, Cloudinary image storage, and deployment on Render.",
        technologies: ["React (Vite)", "Node.js", "MongoDB Atlas", "Express.js", "TailwindCSS", "Stripe", "Cloudinary", "JWT"],
        image: stylike,
        link: "https://stylike-frontend.onrender.com/",
        accent: "var(--color-primary)",
    },
    {
        title: "Mealora – Tunisian Cuisine Showcase",
        description:
            "Modern showcase website dedicated to Tunisian cuisine, highlighting traditional dishes through an elegant and responsive interface. Features smooth navigation, immersive visuals, and SEO optimization. Deployed on Vercel.",
        technologies: ["React", "TailwindCSS", "Vercel"],
        image: mealora,
        link: "https://mealora.vercel.app/",
        accent: "var(--color-highlight)",
    },
    {
        title: "Web Genius Solutions – Agency Website",
        description:
            "Professional web & mobile development agency site with a strong focus on modern, elegant, and fully responsive front-end interfaces. Offers custom solutions tailored to business needs with an optimized UX across all devices.",
        technologies: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
        image: webgenius,
        link: "https://webgenius-beta.vercel.app/webgenius/home",
        accent: "var(--color-primary)",
    },
    
]

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [imgErrors, setImgErrors] = useState<Set<number>>(new Set())

    const handleImgError = (index: number) => {
        setImgErrors(prev => new Set(prev).add(index))
    }

    return (
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                        animation: 'blob-move 10s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] rounded-full opacity-12"
                    style={{
                        background: 'radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)',
                        animation: 'blob-move 12s ease-in-out infinite reverse',
                    }}
                />
                {/* Subtle grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="projects-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-primary)" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#projects-grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-8 sm:px-12 lg:px-24 xl:px-32 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-24 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        Portfolio
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Projects That Make an{' '}
                        <span className="text-primary">Impact</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                        A selection of my recent work — crafted with passion, precision, and modern technologies.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-highlight mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Projects grid */}
                <div className="space-y-16 md:space-y-24">
                    {projectsData.map((project, index) => {
                        const isEven = index % 2 === 0
                        const isHovered = hoveredIndex === index
                        const hasImgError = imgErrors.has(index)

                        return (
                            <div
                                key={index}
                                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in ${isEven ? '' : 'lg:direction-rtl'}`}
                                style={{ animationDelay: `${index * 150}ms` }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Image */}
                                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="relative group rounded-2xl overflow-hidden">
                                        {/* Glowing border on hover */}
                                        <div
                                            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${project.accent}, color-mix(in srgb, ${project.accent} 40%, var(--color-highlight)))`,
                                            }}
                                        />
                                        <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50">
                                            {!hasImgError ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                                                    onError={() => handleImgError(index)}
                                                />
                                            ) : (
                                                <div
                                                    className="w-full h-64 md:h-80 flex flex-col items-center justify-center gap-4"
                                                    style={{
                                                        background: `linear-gradient(135deg, color-mix(in srgb, ${project.accent} 8%, var(--color-surface)), var(--color-surface))`,
                                                    }}
                                                >
                                                    <FolderGit2
                                                        className="w-12 h-12 opacity-30"
                                                        style={{ color: project.accent }}
                                                    />
                                                    <span className="text-xs uppercase tracking-widest text-muted-foreground/50 font-semibold">
                                                        Preview Coming Soon
                                                    </span>
                                                </div>
                                            )}

                                            {/* Hover overlay */}
                                            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />

                                            {/* Floating link button */}
                                            {project.link && project.link !== '#' && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:scale-110"
                                                >
                                                    <ExternalLink className="w-4 h-4 text-foreground" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5`}>
                                    {/* Project number */}
                                    <span
                                        className="text-6xl md:text-7xl font-serif font-bold opacity-10 select-none leading-none transition-opacity duration-500"
                                        style={{
                                            color: project.accent,
                                            opacity: isHovered ? 0.25 : 0.08,
                                        }}
                                    >
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug -mt-4">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {project.technologies.map((tech, j) => (
                                            <span
                                                key={j}
                                                className="px-3 py-1 rounded-full text-xs font-semibold glass border border-border/30 text-muted-foreground hover:text-foreground hover:border-border transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View project link */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest pt-2 group/link transition-colors duration-300"
                                        style={{ color: project.accent }}
                                    >
                                        View Project
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
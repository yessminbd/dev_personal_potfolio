import { GraduationCap, BookOpen, School, ExternalLink, Calendar, MapPin } from 'lucide-react'

const educationData = [
    {
        degree: "Engineering Degree",
        institution: "IT Business School",
        location: "Nabeul",
        period: "2025 – Present",
        icon: GraduationCap,
        link: "https://itbs.tn/",
        color: "var(--color-primary)",
        accentBg: "bg-primary/10",
        accentText: "text-primary",
        current: true,
    },
    {
        degree: "Bachelor's Degree in Computer Science Applied to Management",
        institution: "Faculty of Economic Sciences and Management of Sfax",
        location: "Sfax",
        period: "2021 – 2024",
        icon: BookOpen,
        link: "https://fsegs.rnu.tn/",
        color: "var(--color-highlight)",
        accentBg: "bg-highlight/10",
        accentText: "text-highlight",
        current: false,
    },
    {
        degree: "Baccalaureate in Experimental Sciences",
        institution: "Mahmoud Messaadi High School",
        location: "Nabeul",
        period: "2017 – 2021",
        icon: School,
        link: null,
        color: "var(--color-secondary-foreground)",
        accentBg: "bg-secondary-foreground/10",
        accentText: "text-secondary-foreground",
        current: false,
    },
]

const Education = () => {
    return (
        <section id="education" className="py-20 md:py-32 relative overflow-hidden">
            {/* Subtle background blobs */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                        animation: 'blob-move 10s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)',
                        animation: 'blob-move 12s ease-in-out infinite reverse',
                    }}
                />
            </div>

            <div className="container mx-auto px-8 sm:px-12 lg:px-24 xl:px-32 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-24 animate-fade-in">
                    <h2 className="text-4xl md:text-4xl font-serif font-bold uppercase tracking-widest text-foreground">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-secondary-foreground mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical line */}
                    <div
                        className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                        style={{
                            background: 'linear-gradient(to bottom, transparent, var(--color-primary), var(--color-highlight), var(--color-secondary-foreground), transparent)',
                        }}
                    />

                    <div className="space-y-12 md:space-y-16">
                        {educationData.map((edu, index) => (
                            <div
                                key={index}
                                className="relative pl-16 md:pl-24 animate-fade-in group"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Timeline node */}
                                <div
                                    className="absolute left-0 md:left-2 top-2 w-12 h-12 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                    style={{
                                        background: `linear-gradient(135deg, ${edu.color}, color-mix(in srgb, ${edu.color} 60%, white))`,
                                        animation: `float-dot 5s ease-in-out infinite ${index * 0.8}s`,
                                    }}
                                >
                                    <edu.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                </div>

                                {/* Connecting pulse for current education */}
                                {edu.current && (
                                    <div
                                        className="absolute left-0 md:left-2 top-2 w-12 h-12 md:w-12 md:h-12 rounded-xl opacity-30 animate-ping"
                                        style={{ background: edu.color }}
                                    />
                                )}

                                {/* Card */}
                                <div className="glass rounded-2xl p-6 md:p-8 border border-white/5 group-hover:-translate-y-1 group-hover:shadow-xl transition-all duration-500">
                                    {/* Period badge */}
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${edu.accentBg} ${edu.accentText}`}
                                        >
                                            <Calendar className="w-3 h-3" />
                                            {edu.period}
                                        </span>
                                        {edu.current && (
                                            <span className="relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                                </span>
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    {/* Degree title */}
                                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 leading-snug">
                                        {edu.degree}
                                    </h3>

                                    {/* Institution row */}
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                        {edu.link ? (
                                            <a
                                                href={edu.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-1.5 font-semibold text-sm ${edu.accentText} hover:underline underline-offset-4 transition-colors`}
                                            >
                                                {edu.institution}
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        ) : (
                                            <span className="font-semibold text-sm text-muted-foreground">
                                                {edu.institution}
                                            </span>
                                        )}

                                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                            <MapPin className="w-3 h-3" />
                                            {edu.location}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
import { Code2, Lightbulb, Rocket, Users, Sparkles } from "lucide-react"
import { useState } from "react"

const highlights = [
    {
        icon: Code2,
        label: "Clean Code",
        description: "Writing clean, readable, and maintainable code that stands the test of time.",
        color: "var(--color-primary)",
        gradient: "from-primary/20 to-primary/5",
    },
    {
        icon: Rocket,
        label: "Performance",
        description: "Optimizing every component for blazing fast speed and efficiency.",
        color: "var(--color-highlight)",
        gradient: "from-highlight/20 to-highlight/5",
    },
    {
        icon: Users,
        label: "Collaboration",
        description: "Working effectively in agile teams to deliver exceptional products.",
        color: "var(--color-primary)",
        gradient: "from-emerald-400/20 to-emerald-400/5",
    },
    {
        icon: Lightbulb,
        label: "Innovation",
        description: "Bringing creative ideas and modern solutions to every project.",
        color: "var(--color-highlight)",
        gradient: "from-highlight/20 to-highlight/5",
    },
]

const stats = [
    { value: "3+", label: "Years Learning" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Technologies" },
]

const About = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-12"
                    style={{
                        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                        animation: 'blob-move 10s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute bottom-0 -left-48 w-[400px] h-[400px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)',
                        animation: 'blob-move 12s ease-in-out infinite reverse',
                    }}
                />
            </div>

            <div className="container mx-auto px-8 sm:px-12 lg:px-24 xl:px-32 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-24 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        Get to know me
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-highlight mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left column — Bio */}
                    <div className="lg:col-span-7 space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                            <span className="text-primary">Building</span> the future of the web,
                            <span className="block text-base text-muted-foreground font-serif italic font-normal mt-2">
                                one component at a time.
                            </span>
                        </h3>

                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I'm a passionate software engineering student with a strong foundation in
                                computer science and a proven track record of delivering high-quality software
                                solutions. I am a quick learner and a team player with excellent
                                problem-solving skills.
                            </p>
                            <p>
                                I specialize in <span className="text-foreground font-semibold">React</span>,{' '}
                                <span className="text-foreground font-semibold">Next.js</span> and{' '}
                                <span className="text-foreground font-semibold">TypeScript</span>, building
                                scalable and maintainable web applications. My goal is to leverage my technical
                                skills to create innovative solutions that solve real-world problems.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies and
                                contributing to open source projects.
                            </p>
                        </div>

                        {/* Stats row */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="group flex items-center gap-3 animate-fade-in"
                                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                                >
                                    <span className="text-3xl md:text-4xl font-bold text-primary font-serif">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold leading-tight">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column — Mission card */}
                    <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="relative group">
                            {/* Glowing border effect */}
                            <div
                                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-highlight))',
                                }}
                            />
                            <div className="relative glass-strong rounded-2xl p-8 lg:p-10">
                                {/* Quote icon */}
                                <div className="mb-6">
                                    <svg
                                        className="w-10 h-10 text-primary/30"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="text-lg text-foreground leading-relaxed font-medium italic mb-6">
                                    My mission is to create digital experiences that are not only functional
                                    but also beautiful and intuitive. I believe that technology should be used
                                    to solve real-world problems and make people's lives easier.
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-px bg-gradient-to-r from-primary to-highlight"></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                        Yassmine
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlight Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 md:mt-28">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="relative group rounded-2xl p-6 transition-all duration-500 animate-fade-in cursor-default"
                            style={{ animationDelay: `${(index + 4) * 100}ms` }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card background */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className="absolute inset-0 rounded-2xl glass border border-white/5" />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                                    style={{
                                        background: hoveredCard === index
                                            ? `linear-gradient(135deg, ${item.color}, color-mix(in srgb, ${item.color} 60%, white))`
                                            : 'var(--color-secondary)',
                                        transition: 'background 0.5s ease, transform 0.5s ease',
                                    }}
                                >
                                    <item.icon
                                        className="w-5 h-5 transition-colors duration-500"
                                        style={{
                                            color: hoveredCard === index ? 'white' : 'var(--color-secondary-foreground)',
                                        }}
                                        strokeWidth={2.2}
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-2">{item.label}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>

                                {/* Hover arrow */}
                                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500"
                                    style={{ color: item.color }}
                                >
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
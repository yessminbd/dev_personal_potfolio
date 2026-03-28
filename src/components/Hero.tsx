import { ChevronDown } from 'lucide-react'
import Button from '../layouts/Button'
import profileImg from '../assets/prof_img.jpg'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden">

            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />

                {/* Teal blob */}
                <div
                    className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                        animation: 'blob-move 8s ease-in-out infinite',
                    }}
                />
                {/* Orange blob */}
                <div
                    className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)',
                        animation: 'blob-move 10s ease-in-out infinite reverse',
                    }}
                />

                {/* Animated dot grid */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.2" fill="var(--color-primary)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>

                {/* Animated floating dots */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${4 + (i % 4) * 2}px`,
                            height: `${4 + (i % 4) * 2}px`,
                            left: `${(i * 8.3) % 100}%`,
                            top: `${(i * 13 + 10) % 90}%`,
                            backgroundColor: i % 3 === 0
                                ? 'var(--color-primary)'
                                : i % 3 === 1
                                    ? 'var(--color-highlight)'
                                    : 'var(--color-muted)',
                            opacity: 0.4 + (i % 3) * 0.15,
                            animation: `float-dot ${4 + (i % 4)}s ease-in-out infinite ${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 flex-1 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">

                    {/* Text — LEFT */}
                    <div className="flex-1 max-w-xl animate-fade-in">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                            👋 Hello, world!
                        </p>
                        <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">
                            I'm{' '}
                            <span className="text-primary">Yassmine</span>
                            <span className="text-highlight">.</span>
                        </h1>
                        <p className="text-lg font-medium text-foreground/80 mb-3">
                            Software Engineering Student
                        </p>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                            Passionate about building modern, performant web experiences.
                            Turning ideas into clean, elegant digital solutions — one line of code at a time.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button href="#projects" size="default">View My Projects</Button>
                            <Button href="/Yassmine_Bouchehed_CV.pdf" download size="default" variant="outline">Download CV</Button>
                        </div>
                    </div>

                    {/* Profile image — RIGHT */}
                    <div className="relative flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        {/* Spinning ring */}
                        <div
                            className="absolute -inset-3 rounded-full opacity-60"
                            style={{
                                background: 'conic-gradient(from 0deg, var(--color-primary), var(--color-highlight), var(--color-primary))',
                                animation: 'spin-slow 6s linear infinite',
                            }}
                        />
                        <div className="absolute -inset-2 rounded-full bg-background" />
                        <img
                            src={profileImg}
                            alt="Yassmine — Software Engineering Student"
                            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover object-top shadow-2xl"
                        />

                        {/* Open to work floating badge */}
                        <div className="absolute bottom-4 -left-6 md:-left-12 glass px-4 py-2 rounded-full flex items-center gap-2 shadow-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs md:text-sm font-semibold text-foreground whitespace-nowrap">
                                Open to Work
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            {/* Bottom Section: Infinite Marquee & Scroll */}
            <div className="relative z-20 pointer-events-none flex flex-col items-center gap-16 md:gap-28 pb-6 mt-auto w-full">

                {/* Tech Marquee */}
                <div className="flex flex-col items-center gap-6 w-full">
                    <p className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-widest opacity-80">
                        Technologies I work with
                    </p>

                    <div className="w-full overflow-hidden flex">
                        <div
                            className="flex w-max"
                            style={{ animation: 'marquee 60s linear infinite' }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex items-center gap-16 px-8">
                                    {['React', 'TypeScript', 'Node.js', 'Express.js', 'Flutter', 'MongoDB', 'Python', 'Tailwind CSS', 'Vercel', 'Git', 'SQL', 'Postman', 'GitHub'].map((text, j) => {
                                        const colorClasses = ['text-primary', 'text-highlight', 'text-emerald-400', 'text-cyan-400', 'text-fuchsia-400', 'text-amber-400'];
                                        return (
                                            <div key={j} className="flex items-center gap-16">
                                                <span className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap ${colorClasses[j % colorClasses.length]}`}>
                                                    {text}
                                                </span>
                                                <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex flex-col items-center gap-2 opacity-90 animate-bounce">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground">
                        Scroll
                    </span>
                    <ChevronDown size={20} className="text-primary" />
                </div>
            </div>
        </section>
    )
}

export default Hero
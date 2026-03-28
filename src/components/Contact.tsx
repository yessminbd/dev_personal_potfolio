import { useState, type FormEvent } from 'react'
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Twitter,
    Send,
    Sparkles,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react'

const contactInfo = [
    {
        icon: MapPin,
        label: 'Location',
        value: '8024 Nabeul, Tunisia',
        href: null,
        color: 'var(--color-highlight)',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+216 54 121 578',
        href: 'tel:+21654121578',
        color: 'var(--color-primary)',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'yessminbouchehed@gmail.com',
        href: 'mailto:yessminbouchehed@gmail.com',
        color: 'var(--color-highlight)',
    },
]

const socials = [
    {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/yessminbd',
        username: '@yessminbd',
        color: '#24292e',
        hoverColor: 'var(--color-foreground)',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yessmin-bouchehed/',
        username: 'Yessmin Bouchehed',
        color: '#0A66C2',
        hoverColor: '#0A66C2',
    },
    {
        icon: Twitter,
        label: 'X / Twitter',
        href: 'https://x.com/yessmin_bd',
        username: '@yessmin_bd',
        color: '#000000',
        hoverColor: 'var(--color-foreground)',
    },
]

type FormState = 'idle' | 'sending' | 'sent'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [formState, setFormState] = useState<FormState>('idle')
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

    const validate = () => {
        const e: typeof errors = {}
        if (!form.name.trim()) e.name = 'Name is required.'
        if (!form.email.trim()) e.email = 'Email is required.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
        if (!form.message.trim()) e.message = 'Message is required.'
        return e
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) {
            setErrors(errs)
            return
        }
        setErrors({})
        setFormState('sending')

        try {
            // Va sur https://web3forms.com/ pour récupérer ta clé d'accès (Access Key) gratuite avec ton adresse e-mail.
            // Remplace 'VOTRE_CLE_WEB3FORMS_ICI' par ta clé !
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "00c5ce80-752a-4d36-ae50-d74b2053552a",
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });
            
            const result = await response.json();
            if (result.success) {
                setFormState('sent')
            } else {
                console.error("Erreur Web3Forms:", result);
                setFormState('idle');
                alert("Oops! Quelque chose s'est mal passé lors de l'envoi. Veuillez réessayer.");
            }
        } catch (error) {
            console.error("Erreur réseau:", error);
            setFormState('idle');
            alert("Erreur de connexion. Veuillez réessayer plus tard.");
        }
    }

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }))
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
    }

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* ── Background ── */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                        animation: 'blob-move 9s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute bottom-0 -left-48 w-[600px] h-[600px] rounded-full opacity-10"
                    style={{
                        background: 'radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)',
                        animation: 'blob-move 11s ease-in-out infinite reverse',
                    }}
                />
                {/* Grid dots */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="contact-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="var(--color-muted)" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#contact-dots)" />
                </svg>
            </div>

            <div className="container mx-auto px-8 sm:px-12 lg:px-24 xl:px-32 relative z-10">

                {/* ── Section Header ── */}
                <div className="text-center mb-16 lg:mb-24 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        Contact
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
                        Let's Build Something{' '}
                        <span className="text-primary">Great</span>
                        <span className="text-highlight">.</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                        Have a project in mind? I'd love to hear about it — let's turn your ideas into reality.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-highlight mx-auto mt-6 rounded-full" />
                </div>

                {/* ── Main Grid ── */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* ─ Left: Info Panel ─ */}
                    <div className="lg:col-span-5 space-y-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>

                        {/* Contact items */}
                        <div className="space-y-5">
                            {contactInfo.map((item, i) => (
                                <div
                                    key={i}
                                    className="group flex items-start gap-4 animate-fade-in"
                                    style={{ animationDelay: `${0.15 + i * 0.08}s` }}
                                >
                                    {/* Icon bubble */}
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center glass border border-border/30 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40"
                                        style={{
                                            boxShadow: `0 0 0 0 ${item.color}`,
                                        }}
                                    >
                                        <item.icon
                                            className="w-5 h-5 transition-colors duration-300 group-hover:text-primary"
                                            style={{ color: item.color }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-foreground font-semibold text-sm transition-colors duration-300 hover:text-primary"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="text-foreground font-semibold text-sm">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Find me on</span>
                            <div className="flex-1 h-px bg-gradient-to-l from-highlight/30 to-transparent" />
                        </div>

                        {/* Socials */}
                        <div className="space-y-3">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-4 rounded-2xl glass border border-border/30 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg animate-fade-in"
                                    style={{ animationDelay: `${0.35 + i * 0.08}s` }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 flex-shrink-0"
                                        style={{ backgroundColor: social.color === '#24292e' || social.color === '#000000' ? 'var(--color-foreground)' : social.color }}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{social.label}</p>
                                        <p className="text-sm font-semibold text-foreground truncate">{social.username}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ─ Right: Form ─ */}
                    <div className="lg:col-span-7 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="relative group">
                            {/* Glow border */}
                            <div
                                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-highlight))',
                                }}
                            />

                            <div className="relative glass-strong rounded-3xl p-8 lg:p-10">
                                {formState === 'sent' ? (
                                    /* Success state */
                                    <div className="flex flex-col items-center justify-center py-16 gap-5 text-center animate-fade-in">
                                        <div className="w-20 h-20 rounded-full flex items-center justify-center"
                                            style={{ background: 'color-mix(in srgb, var(--color-primary) 15%, transparent)' }}>
                                            <CheckCircle2 className="w-10 h-10 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold font-serif text-foreground">Message Sent!</h3>
                                        <p className="text-muted-foreground text-sm max-w-xs">
                                            Thank you for reaching out. I'll get back to you as soon as possible. 🚀
                                        </p>
                                        <button
                                            onClick={() => { setForm({ name: '', email: '', message: '' }); setFormState('idle') }}
                                            className="mt-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline transition-opacity"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold font-serif text-foreground mb-1">Send a Message</h3>
                                            <p className="text-muted-foreground text-sm">I usually reply within 24 hours.</p>
                                        </div>

                                        {/* Name & Email row */}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {/* Name */}
                                            <div className="space-y-1.5">
                                                <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                                    Name
                                                </label>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    value={form.name}
                                                    onChange={e => handleChange('name', e.target.value)}
                                                    className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-foreground text-sm placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 ${errors.name ? 'border-red-400' : 'border-border/40'}`}
                                                />
                                                {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-1.5">
                                                <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                                    Email
                                                </label>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={form.email}
                                                    onChange={e => handleChange('email', e.target.value)}
                                                    className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-foreground text-sm placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 ${errors.email ? 'border-red-400' : 'border-border/40'}`}
                                                />
                                                {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-1.5">
                                            <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                                Message
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                rows={6}
                                                placeholder="Tell me about your project, idea, or just say hello…"
                                                value={form.message}
                                                onChange={e => handleChange('message', e.target.value)}
                                                className={`w-full px-4 py-3 rounded-xl bg-background/60 border text-foreground text-sm placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none ${errors.message ? 'border-red-400' : 'border-border/40'}`}
                                            />
                                            {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                                        </div>

                                        {/* Submit */}
                                        <button
                                            id="contact-submit"
                                            type="submit"
                                            disabled={formState === 'sending'}
                                            className="group/btn relative w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-xl hover:-translate-y-0.5"
                                            style={{
                                                background: 'linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 70%, var(--color-highlight)))',
                                                color: 'var(--color-primary-foreground)',
                                            }}
                                        >
                                            {/* shimmer */}
                                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl" />
                                            {formState === 'sending' ? (
                                                <>
                                                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                    </svg>
                                                    Sending…
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                                                    Send Message
                                                    <ArrowRight className="w-4 h-4 opacity-60 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Footer note ── */}
                <p className="text-center text-xs text-muted-foreground/60 mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    © {new Date().getFullYear()} Yessmin Bouchehed — Built with React & TypeScript
                </p>
            </div>
        </section>
    )
}

export default Contact
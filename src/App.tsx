import { motion, useScroll, useTransform } from "motion/react";
import {
    ArrowRight,
    Menu,
    X,
    ChevronDown,
    MapPin,
    Phone,
    MessageCircle,
    CheckCircle,
    Clock,
    ShieldCheck,
    Trees,
    Home,
    Fence,
    Lamp,
    Star // for reviews
} from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "./config";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "強み", id: "philosophy" },
        { label: "事業内容", id: "services" },
        { label: "施工事例", id: "portfolio" },
        { label: "お客様の声", id: "reviews" },
        { label: "ご相談・お見積り", id: "contact" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-black/90 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                >
                    {siteConfig.company.logoUrl !== '/vite.svg' ? (
                        <img src={siteConfig.company.logoUrl} alt={siteConfig.company.name} className="h-10 object-contain" />
                    ) : (
                        <span className="font-serif text-2xl tracking-widest font-bold text-[var(--accent)]">{siteConfig.company.name}</span>
                    )}
                </motion.div>

                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.id}
                            href={`#${item.id}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm tracking-widest font-medium hover:text-[var(--accent)] transition-colors"
                        >
                            {item.label}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="px-6 py-2 bg-[var(--accent)] text-white rounded-full text-xs tracking-widest font-bold flex items-center gap-2 hover:opacity-80 transition-colors duration-200"
                    >
                        <Phone size={14} /> {siteConfig.company.phone}
                    </motion.a>
                </div>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
                >
                    {navItems.map((item) => (
                        <a key={item.id} href={`#${item.id}`} className="text-base font-medium tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src={siteConfig.hero.backgroundImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover brightness-[0.5]"
                    referrerPolicy="no-referrer"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 z-10" />

            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center px-6 max-w-5xl pt-20"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="inline-block px-4 py-1.5 border border-[var(--accent)]/50 bg-black/30 rounded-full text-[var(--accent)] text-sm md:text-base tracking-widest mb-8 font-medium shadow-[0_0_15px_var(--accent)]"
                >
                    {siteConfig.company.areasText}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight drop-shadow-lg"
                >
                    {siteConfig.hero.title.split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-white/80 text-base md:text-lg mb-12 max-w-2xl mx-auto font-medium whitespace-pre-line"
                >
                    {siteConfig.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-[var(--accent)] text-white rounded-full text-sm tracking-widest font-bold hover:opacity-80 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg">
                        無料ご相談・お見積り <ArrowRight size={18} />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-50"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle: string, light?: boolean }) => (
    <div className="mb-16">
        <p className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${light ? "text-white/60" : "text-[var(--accent)]"}`}>
            {subtitle}
        </p>
        <h2 className={`font-serif text-3xl md:text-5xl font-bold ${light ? "text-white" : "text-white"}`}>
            {title}
        </h2>
    </div>
);

const getIconByName = (name: string) => {
    switch (name) {
        case 'CheckCircle': return <CheckCircle className="text-[var(--accent)] w-10 h-10 mb-4" />;
        case 'Clock': return <Clock className="text-[var(--accent)] w-10 h-10 mb-4" />;
        case 'ShieldCheck': return <ShieldCheck className="text-[var(--accent)] w-10 h-10 mb-4" />;
        case 'Trees': return <Trees className="text-[var(--accent)]" size={32} />;
        case 'Home': return <Home className="text-[var(--accent)]" size={32} />;
        case 'Fence': return <Fence className="text-[var(--accent)]" size={32} />;
        case 'Lamp': return <Lamp className="text-[var(--accent)]" size={32} />;
        default: return <CheckCircle className="text-[var(--accent)]" size={32} />;
    }
}

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <SectionHeading title={siteConfig.philosophy.title} subtitle={siteConfig.philosophy.subtitle} />
                <p className="text-white/80 font-medium leading-relaxed">
                    {siteConfig.philosophy.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {siteConfig.philosophy.items.map((reason, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 glass rounded-2xl border border-white/5 hover:border-[var(--accent)]/30 transition-colors duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 transform scale-[3] translate-x-1/4 -translate-y-1/4">
                            {getIconByName(reason.icon)}
                        </div>
                        <div className="relative z-10">
                            {getIconByName(reason.icon)}
                            <h3 className="font-serif text-2xl font-bold mb-4 tracking-wide">{reason.title}</h3>
                            <p className="text-white/70 font-medium leading-relaxed">
                                {reason.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-24 px-6 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title={siteConfig.services.title} subtitle={siteConfig.services.subtitle} light />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteConfig.services.items.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-black border border-white/5 cursor-pointer"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                            <div className="relative z-20 h-full p-6 flex flex-col justify-end">
                                <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                                    {getIconByName(service.icon)}
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-3 tracking-wide">{service.title}</h3>
                                <p className="text-sm text-white/80 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title={siteConfig.portfolio.title} subtitle={siteConfig.portfolio.subtitle} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {siteConfig.portfolio.items.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 px-6 py-2 border border-white text-white rounded-full text-sm font-bold tracking-widest transition-opacity duration-300 scale-95 group-hover:scale-100">
                                        詳細を見る
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs font-bold tracking-widest text-[var(--accent)] mb-2 bg-[var(--accent)]/10 inline-block px-3 py-1 rounded">{project.category}</p>
                            <h3 className="font-serif text-xl font-bold tracking-wide group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Reviews = () => {
    return (
        <section id="reviews" className="py-24 px-6 bg-black/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title={siteConfig.reviews.title} subtitle={siteConfig.reviews.subtitle} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteConfig.reviews.items.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 glass rounded-2xl border border-white/5 relative"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={16} fill={j < review.rating ? "var(--accent)" : "transparent"} className={j < review.rating ? "text-[var(--accent)]" : "text-white/20"} />
                                ))}
                            </div>
                            <p className="text-white/80 font-medium leading-relaxed mb-6">"{review.comment}"</p>
                            <p className="text-sm font-bold text-white/50">{review.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="lg:sticky lg:top-32">
                    <SectionHeading title="無料相談・お見積り依頼" subtitle="Contact Us" />
                    <p className="text-white/80 font-medium leading-relaxed mb-10 max-w-md">
                        小さな修理から大規模工事まで、喜んで対応いたします。
                        下見・お見積りは完全無料です。まずはお気軽にご連絡ください。
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 p-6 glass rounded-2xl border border-white/5">
                            <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                                <Phone size={24} className="text-[var(--accent)]" />
                            </div>
                            <div>
                                <p className="text-xs tracking-widest font-bold text-white/50 mb-1">お電話でのご相談（{siteConfig.company.businessHours}）</p>
                                <p className="text-2xl font-bold tracking-wider text-[var(--accent)]">{siteConfig.company.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-6 rounded-2xl bg-black/50 border border-white/5">
                        <h4 className="font-bold text-[var(--accent)] mb-4 flex items-center gap-2"><MapPin size={18} /> 対応エリア</h4>
                        <p className="text-sm font-medium text-white/70 leading-relaxed">
                            {siteConfig.company.areas.join('、')}
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative"
                >
                    <div className="absolute -top-4 -right-4 bg-[var(--accent)] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        受付中
                    </div>
                    <h3 className="text-xl font-bold mb-8">お問合せフォーム</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70">お名前 <span className="text-red-400">*</span></label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all font-medium" placeholder="山田 太郎" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/70">メールアドレス <span className="text-red-400">*</span></label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all font-medium" placeholder="mail@example.com" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/70">お電話番号</label>
                            <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all font-medium" placeholder="090-0000-0000" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/70">ご相談内容（複数選択可）</label>
                            <div className="grid grid-cols-2 gap-3 mt-2">
                                {siteConfig.formOptions.map(opt => (
                                    <label key={opt} className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                                        <input type="checkbox" className="accent-[var(--accent)] w-4 h-4 cursor-pointer" /> {opt}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/70">お問い合わせ内容詳細</label>
                            <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all font-medium resize-none" placeholder="現状のお悩みやご希望などをご記入ください。"></textarea>
                        </div>
                        <button className="w-full py-4 bg-[var(--accent)] text-white rounded-lg text-base font-bold hover:opacity-80 transition-colors duration-200 mt-4 shadow-lg">
                            送信する
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <span className="font-serif text-2xl tracking-widest font-bold text-[var(--accent)]">{siteConfig.company.name}</span>
                    </div>
                    <p className="text-xs text-white/50 font-medium mt-2">{siteConfig.company.license}</p>
                </div>

                <p className="text-xs text-white/40 tracking-widest font-bold">© 2026 {siteConfig.company.name}. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default function App() {
    return (
        <div className="min-h-screen selection:bg-[var(--accent)] selection:text-white relative" style={{ '--theme-accent': siteConfig.theme.accent } as React.CSSProperties}>
            <Navbar />
            <main>
                <Hero />
                <Philosophy />
                <Services />
                <Portfolio />
                <Reviews />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

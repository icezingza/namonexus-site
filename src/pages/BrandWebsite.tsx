import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { ArrowUpRight, ArrowRight, Shield, Heart, Compass } from 'lucide-react';

// --- MAGNETIC BUTTON COMPONENT ---
interface MagneticProps {
  children: React.ReactElement<{ className?: string }>;
}

function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(element, 'y', { duration: 0.6, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
}

// --- DATA DEFINITIONS ---
interface FeatureCard {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
  tag: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 1,
    title: 'Sovereign AI Systems',
    category: 'INTELLIGENCE CORE',
    description: 'Autonomous AI architectures run locally on Lenovo Edge + GCP hybrid networks, guaranteeing 100% data sovereignty and bulletproof security.',
    icon: <Shield className="w-8 h-8" />,
    bgGradient: 'linear-gradient(135deg, #E6E2DC 0%, #D8D4CE 100%)',
    tag: 'NN-SOVEREIGN-V5',
  },
  {
    id: 2,
    title: 'Resonance Engine',
    category: 'COMPASSIONATE AI',
    description: 'Designed under the Buddhist Brahma-Vihara 4 principles (เมตตา, กรุณา, มุทิตา, อุเบกขา) to serve human emotional and physical well-being.',
    icon: <Heart className="w-8 h-8" />,
    bgGradient: 'linear-gradient(135deg, #EBE8E2 0%, #DEDAD3 100%)',
    tag: 'NN-RESONANCE-RE4',
  },
  {
    id: 3,
    title: 'Dhamma Semantic RAG',
    category: 'KNOWLEDGE GRAPH',
    description: 'Micro-chunked embeddings coupled with graph networks mapping Abhidhamma texts with extremely high semantic precision.',
    icon: <Compass className="w-8 h-8" />,
    bgGradient: 'linear-gradient(135deg, #F0EDE8 0%, #E5E1DA 100%)',
    tag: 'NN-RAG-DB-V2',
  },
];

interface InsightItem {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  imageUrl: string;
}

const INSIGHT_ITEMS: InsightItem[] = [
  {
    id: 1,
    title: 'Namo Care Health System',
    subtitle: 'LINE-based elderly health dashboard using AI reasoning engines.',
    url: '/projects/namo-care',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Smart Classroom Architecture',
    subtitle: 'Real-time collaborative workspace mapping teacher & student interactions.',
    url: '/teacher',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'The Frontier of Sovereign AI',
    subtitle: 'Research spec on localized Abhidhamma RAG models and edge topologies.',
    url: '/research/frontier-of-sovereign-ai',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
  },
];

export default function BrandWebsite() {
  // Hero phrase rotation
  const phrases = ['Resonance Engine', 'Sovereign AI', 'Operational Intelligence'];
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.05,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Insights custom cursor thumbnail reveal
  const [hoveredInsight, setHoveredInsight] = useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.4, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Footer Parallax mouse glow tracking
  const footerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      footer.style.setProperty('--glow-x', `${x}px`);
      footer.style.setProperty('--glow-y', `${y}px`);
    };

    footer.addEventListener('mousemove', handleMouseMove);
    return () => footer.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Features scroll scale effect
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="namonexus-luxury relative min-h-screen overflow-hidden pb-0 select-none bg-[#F5F3EF]">
      {/* Persistent Grain Overlay */}
      <div className="grain-overlay" />

      {/* Floating Header */}
      <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-6 rounded-full bg-white/40 backdrop-blur-xl border border-black/[0.04] shadow-xs">
          <Link
            to="/"
            className="text-[0.8rem] md:text-sm font-black tracking-[0.25em] text-[#0A0A0A] hover:opacity-75 transition-opacity"
          >
            NAMONEXUS
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/projects" className="text-xs font-bold tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">
              PROJECTS
            </Link>
            <Link to="/research" className="text-xs font-bold tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">
              RESEARCH
            </Link>
            <a href="#features" className="text-xs font-bold tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">
              CAPABILITIES
            </a>
            <a href="#insights" className="text-xs font-bold tracking-widest text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors">
              INSIGHTS
            </a>
          </nav>

          <Magnetic>
            <a
              href="mailto:contact@namonexus.com"
              className="px-4 py-2 rounded-full bg-[#0A0A0A] text-white text-[0.65rem] md:text-[0.7rem] font-bold tracking-widest hover:bg-neutral-800 transition-all shadow-xs"
            >
              START A PROJECT
            </a>
          </Magnetic>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Full-screen Hero Section */}
        <section className="relative h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-[#F5F3EF]">
          {/* Video & Halftone Pattern Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-200">
            <video
              src="/brand-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover filter saturate-[0.1] brightness-[1.05]"
            />
            {/* Elegant Halftone Dot Overlay */}
            <div className="absolute inset-0 halftone-overlay mix-blend-overlay opacity-60 pointer-events-none" />
            {/* White Soft Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EF] via-transparent to-[#F5F3EF]/60 pointer-events-none" />
          </div>

          {/* Slogan */}
          <div className="z-10 max-w-6xl mx-auto w-full">
            <p className="text-[0.65rem] md:text-[0.7rem] font-black tracking-[0.3em] text-[#0A0A0A]/50 uppercase">
              // SOVEREIGN INTELLIGENCE HUB v5.0.0
            </p>
          </div>

          {/* Cycling Massive Typography H1 */}
          <div className="z-10 max-w-6xl mx-auto w-full flex flex-col items-start justify-center flex-grow py-8">
            <h1 className="text-[7.5vw] sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#0A0A0A] leading-[0.85] uppercase">
              <span className="block opacity-30 font-light">THE NEW</span>
              <span className="block min-h-[1.2em] w-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhraseIdx}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-0 text-[#0A0A0A]"
                  >
                    {phrases[currentPhraseIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          {/* Hero Bottom Rows */}
          <div className="z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-black/[0.06] pt-6">
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed font-medium">
              NamoNexus merges edge computational infrastructure with compassionate human experience. Built on local architectures for bulletproof digital sovereignty.
            </p>
            <div className="flex gap-4">
              <Magnetic>
                <a
                  href="#features"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-black/[0.08] text-xs font-bold tracking-wider text-[#0A0A0A] hover:bg-black hover:text-white transition-all duration-300"
                >
                  DISCOVER MODULES <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/teacher"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-black/[0.03] text-xs font-bold tracking-wider text-[#0A0A0A] hover:bg-neutral-50 transition-all duration-300 shadow-xs"
                >
                  SMART CLASSROOM <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>

        {/* Features Stacking Cards Section */}
        <section id="features" ref={containerRef} className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative">
          <div className="mb-20">
            <span className="text-[0.65rem] font-black tracking-[0.3em] text-neutral-400 block mb-3 uppercase">// CORE INFRASTRUCTURE</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] leading-none uppercase">
              OPERATIONAL EXCELLENCE<br />BY ARCHITECTURE
            </h2>
          </div>

          {/* Stacking Cards Container */}
          <div className="flex flex-col gap-12 md:gap-24 relative">
            {FEATURE_CARDS.map((card, idx) => {
              return (
                <div
                  key={card.id}
                  className="sticky top-24 w-full rounded-3xl p-8 md:p-14 border border-black/[0.06] shadow-sm flex flex-col justify-between min-h-[380px] md:min-h-[440px] transition-transform duration-500"
                  style={{
                    background: card.bgGradient,
                    transform: `translateY(${idx * 12}px) scale(${1 - (FEATURE_CARDS.length - idx) * 0.015})`,
                    zIndex: card.id,
                  }}
                >
                  <div className="flex items-center justify-between border-b border-black/[0.05] pb-6 mb-6">
                    <span className="text-xs font-black tracking-widest text-[#0A0A0A]/50">{card.category}</span>
                    <span className="text-xs font-mono font-bold text-neutral-500">{card.tag}</span>
                  </div>

                  <div>
                    <div className="text-[#0A0A0A] mb-6">{card.icon}</div>
                    <h3 className="text-3xl md:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase leading-none mb-4">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-lg text-neutral-600 max-w-2xl leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#0A0A0A] hover:opacity-75 transition-opacity"
                    >
                      EXPLORE TECH SPEC <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Insights Section with Cursor Thumbnail Reveal */}
        <section id="insights" className="py-32 px-6 md:px-12 bg-neutral-50 border-t border-black/[0.04]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <span className="text-[0.65rem] font-black tracking-[0.3em] text-neutral-400 block mb-3 uppercase">// LAB NOTEBOOKS</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#0A0A0A] uppercase leading-none">
                INSIGHTS & CASE STUDIES
              </h2>
            </div>

            {/* List for Cursor Image Reveal */}
            <div className="border-t border-black/[0.08] divide-y divide-black/[0.08]">
              {INSIGHT_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className="flex flex-col md:flex-row md:items-center justify-between py-10 group relative transition-all"
                  onMouseEnter={() => setHoveredInsight(item.id)}
                  onMouseLeave={() => setHoveredInsight(null)}
                >
                  <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 block mb-2">0{item.id}.</span>
                    <h3 className="text-2xl md:text-4xl font-black text-[#0A0A0A] tracking-tight uppercase leading-none mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-500 font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 relative z-10 w-12 h-12 rounded-full border border-black/[0.06] flex items-center justify-center bg-white group-hover:bg-[#0A0A0A] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Custom Mouse Reveal Image */}
            <div
              ref={cursorRef}
              className="fixed pointer-events-none z-50 overflow-hidden w-64 h-40 rounded-xl border border-black/10 shadow-2xl bg-neutral-200 transition-transform duration-300 origin-center"
              style={{
                top: -80,
                left: -128,
                transform: hoveredInsight ? 'scale(1) rotate(2deg)' : 'scale(0) rotate(0deg)',
                opacity: hoveredInsight ? 1 : 0,
              }}
            >
              {INSIGHT_ITEMS.map((item) => (
                <img
                  key={item.id}
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  style={{
                    opacity: hoveredInsight === item.id ? 1 : 0,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Smart Classroom Portal Banner */}
        <section className="py-24 px-6 md:px-12 bg-white border-t border-black/[0.04]">
          <div className="max-w-6xl mx-auto rounded-3xl bg-[#F5F3EF] border border-black/[0.06] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[0.65rem] font-black tracking-[0.3em] text-neutral-400 block mb-3 uppercase">// ACADEMIC NETWORK</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0A0A0A] tracking-tight uppercase leading-none mb-4">
                SMART CLASSROOM PORTAL
              </h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-medium">
                Authorized educational networks can log in to access telemetry dashboards, teacher tools, and interactive displays.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Magnetic>
                <Link
                  to="/teacher"
                  className="w-full sm:w-auto text-center px-6 py-4 rounded-full bg-[#0A0A0A] text-white text-xs font-bold tracking-widest hover:bg-neutral-800 transition-all shadow-xs"
                >
                  TEACHER DASHBOARD
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/display"
                  className="w-full sm:w-auto text-center px-6 py-4 rounded-full border border-black/[0.08] text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  DISPLAY VIEW
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with silhouette typography and parallax mouse glow */}
      <footer
        ref={footerRef}
        className="relative bg-[#0A0A0A] text-white overflow-hidden py-24 px-6 md:px-12 border-t border-neutral-900"
        style={{
          backgroundImage: 'radial-gradient(circle 350px at var(--glow-x, 50%) var(--glow-y, 50%), rgba(245, 243, 239, 0.07) 0%, transparent 80%)',
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col justify-between h-full gap-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] text-neutral-500 block mb-6 uppercase">SYSTEM</span>
              <ul className="space-y-3 text-xs font-semibold tracking-wider">
                <li><Link to="/projects" className="text-neutral-400 hover:text-white transition-colors">PROJECTS</Link></li>
                <li><Link to="/research" className="text-neutral-400 hover:text-white transition-colors">RESEARCH</Link></li>
                <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors">CAPABILITIES</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] text-neutral-500 block mb-6 uppercase">ACADEMIC</span>
              <ul className="space-y-3 text-xs font-semibold tracking-wider">
                <li><Link to="/teacher" className="text-neutral-400 hover:text-white transition-colors">TEACHER VIEW</Link></li>
                <li><Link to="/display" className="text-neutral-400 hover:text-white transition-colors">DISPLAY VIEW</Link></li>
              </ul>
            </div>

            <div>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] text-neutral-500 block mb-6 uppercase">CONTACT</span>
              <ul className="space-y-3 text-xs font-semibold tracking-wider">
                <li><a href="mailto:contact@namonexus.com" className="text-neutral-400 hover:text-white transition-colors">contact@namonexus.com</a></li>
                <li className="text-neutral-500">Kanin Raksaraj (Founder)</li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4">
              <span className="text-[0.65rem] font-bold tracking-[0.3em] text-neutral-500 block uppercase">STATUS</span>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[0.6rem] font-bold tracking-widest text-[#E6E2DC]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SOVEREIGN V5 ACTIVE
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-neutral-900 pt-16 mt-8 gap-6">
            <h2 className="text-[10vw] font-black tracking-tighter text-[#1C1C1C] leading-[0.75] select-none pointer-events-none uppercase">
              NAMONEXUS
            </h2>
            <div className="text-left sm:text-right">
              <p className="text-[0.65rem] font-black tracking-[0.3em] text-neutral-500 mb-1">DESIGNED IN THAILAND</p>
              <p className="text-xs text-neutral-400 font-medium">© 2026 NamoNexus. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

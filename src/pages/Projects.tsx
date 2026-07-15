import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const INITIATIVES = [
  {
    title: 'NaMo Care',
    badge: { label: 'LIVE', className: 'border-green-500/30 bg-green-500/10 text-green-400' },
    desc: 'AI-powered elderly care system with real-time health monitoring, intelligent caregiving assistance, and proactive caregiver alerts.',
    tags: ['RAG', 'Multi-model', 'Real-time'],
    href: '/projects/namo-care',
  },
  {
    title: 'Smart Classroom',
    badge: { label: 'INTERNAL AUDIT', className: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400' },
    desc: 'Adaptive learning platform that personalizes education for each student using AI-driven insights and real-time analytics.',
    tags: ['Adaptive', 'Analytics', 'LLM'],
    href: null,
  },
  {
    title: 'R&D Lab',
    badge: { label: 'STEALTH MODE', className: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
    desc: 'Experimental research exploring novel architectures for human-AI collaboration and next-generation sovereign systems.',
    tags: ['Research', 'Experimental', 'Collaboration'],
    href: null,
  },
];

function InitiativeCard({ initiative }: { initiative: (typeof INITIATIVES)[number] }) {
  return (
    <div className="group flex h-full flex-col space-y-6 rounded-lg border border-white/10 p-12 transition-all duration-200 hover:border-brand-cyan/50">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-bold transition group-hover:text-brand-cyan">{initiative.title}</h2>
        <span className={`rounded-full border px-3 py-1 font-mono text-xs ${initiative.badge.className}`}>
          {initiative.badge.label}
        </span>
      </div>
      <p className="flex-grow leading-relaxed text-brand-grey">{initiative.desc}</p>
      <div className="flex flex-wrap gap-2">
        {initiative.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-1 font-mono text-xs text-brand-cyan"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-brand-grey transition hover:text-brand-cyan"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <span className="font-bold">
            Namo<span className="text-brand-cyan">Nexus</span>
          </span>
        </div>
      </header>

      <section className="border-b border-white/10 py-24 md:py-32">
        <div className="container mx-auto max-w-3xl space-y-4 px-6">
          <h1 className="text-4xl font-bold md:text-5xl">Core Initiatives</h1>
          <p className="text-lg text-brand-grey">High-impact AI systems in production and development.</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {INITIATIVES.map((initiative) =>
              initiative.href ? (
                <Link key={initiative.title} to={initiative.href} className="h-full">
                  <InitiativeCard initiative={initiative} />
                </Link>
              ) : (
                <div key={initiative.title}>
                  <InitiativeCard initiative={initiative} />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-sm text-brand-grey">
        <p>NamoNexus © 2026 · Core Initiatives</p>
      </footer>
    </div>
  );
}

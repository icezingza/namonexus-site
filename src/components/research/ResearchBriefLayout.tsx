import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Term({ children }: { children: ReactNode }) {
  return <span className="font-mono text-cyan-400">{children}</span>;
}

interface ResearchBriefLayoutProps {
  title: string;
  summary: string;
  timestamp: string;
  topics: string[];
  children: ReactNode;
}

export default function ResearchBriefLayout({
  title,
  summary,
  timestamp,
  topics,
  children,
}: ResearchBriefLayoutProps) {
  return (
    <div className="min-h-screen bg-navy text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            to="/research"
            className="flex items-center gap-2 text-sm text-brand-grey transition hover:text-brand-cyan"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Research
          </Link>
          <span className="font-bold">
            Namo<span className="text-brand-cyan">Nexus</span>
          </span>
        </div>
      </header>

      <section className="border-b border-white/10 py-24 md:py-32">
        <div className="container mx-auto max-w-3xl space-y-6 px-6">
          <div className="flex flex-wrap items-center gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-1 font-mono text-xs text-brand-cyan"
              >
                {topic}
              </span>
            ))}
            <span className="font-mono text-xs text-brand-grey">{timestamp}</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="text-xl leading-relaxed text-brand-grey">{summary}</p>
        </div>
      </section>

      <article className="py-24 md:py-32">
        <div className="container mx-auto max-w-3xl space-y-20 px-6">{children}</div>
      </article>

      <footer className="border-t border-white/10 py-12 text-center text-sm text-brand-grey">
        <p>NamoNexus © 2026 · Research &amp; Engineering</p>
      </footer>
    </div>
  );
}

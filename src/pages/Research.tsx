import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ARTICLES = [
  {
    title: 'The Frontier of Sovereign & Ethical AI',
    summary:
      'Multimodal Bayesian fusion, sovereign RAG infrastructure, and the ethical kernel underpinning every NamoNexus system.',
    timestamp: '2026-07-15',
    topics: ['Bayesian Fusion', 'RAG', 'Ethics'],
    href: '/research/frontier-of-sovereign-ai',
  },
];

export default function Research() {
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
          <h1 className="text-4xl font-bold md:text-5xl">Research & Engineering</h1>
          <p className="text-lg text-brand-grey">Technical deep-dives and architectural insights.</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-3xl space-y-6 px-6">
          {ARTICLES.map((article) => (
            <div
              key={article.href}
              className="rounded-lg border border-white/10 p-8 transition-all duration-200 hover:border-brand-cyan/50"
            >
              <div className="space-y-4">
                <h2 className="max-w-2xl text-xl font-bold leading-tight">{article.title}</h2>
                <p className="leading-relaxed text-brand-grey">{article.summary}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {article.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-1 font-mono text-xs text-brand-cyan"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-brand-grey">{article.timestamp}</span>
                    <Link
                      to={article.href}
                      className="font-mono text-xs text-brand-cyan transition hover:text-brand-cyan/80"
                    >
                      Read Brief →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-sm text-brand-grey">
        <p>NamoNexus © 2026 · Research &amp; Engineering</p>
      </footer>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import ArchitectureDiagram from '../../components/ArchitectureDiagram';

const accuracyData = [
  { month: 'Jan', accuracy: 82 },
  { month: 'Feb', accuracy: 85 },
  { month: 'Mar', accuracy: 88 },
  { month: 'Apr', accuracy: 91 },
  { month: 'May', accuracy: 93 },
  { month: 'Jun', accuracy: 95 },
];

const latencyData = [
  { model: 'Claude', latency: 145 },
  { model: 'GPT-4', latency: 120 },
  { model: 'Llama', latency: 95 },
  { model: 'Mistral', latency: 110 },
  { model: 'Custom', latency: 78 },
];

const techStack = [
  {
    category: 'AI/ML',
    techs: ['LLMs', 'RAG', 'Vector DB', 'Transformers', 'Ensemble'],
  },
  {
    category: 'Backend',
    techs: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Kubernetes'],
  },
  {
    category: 'Frontend',
    techs: ['React', 'TypeScript', 'Tailwind', 'Recharts', 'Vite'],
  },
];

const keyMetrics = [
  { label: 'Model Accuracy', value: '95%', desc: 'End-to-end system accuracy' },
  { label: 'Response Latency', value: '78ms', desc: 'P95 response time' },
  { label: 'Uptime SLA', value: '99.9%', desc: 'Production availability' },
];

export default function NamoCare() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm text-brand-grey transition hover:text-brand-cyan"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Projects
          </Link>
          <span className="font-bold">
            Namo<span className="text-brand-cyan">Nexus</span>
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl space-y-8 px-6">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-400">
              LIVE
            </span>
            <span className="font-mono text-xs text-brand-grey">Production Showcase — Mock Environment</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">NaMo Care</h1>
            <p className="text-xl text-brand-grey">
              Enterprise AI system for elderly care, combining real-time health monitoring with intelligent
              caregiving assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="border-b border-white/10 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">The Problem</h2>
            <p className="leading-relaxed text-brand-grey">
              Global elderly population is growing 3x faster than the general population. Simultaneously,
              caregiver availability is declining, creating a critical gap in quality care delivery. Current
              systems are fragmented: health monitoring is disconnected from caregiving assistance, alerts are
              reactive rather than predictive, and there is no unified intelligence layer to coordinate care
              decisions.
            </p>
            <p className="leading-relaxed text-brand-grey">
              NaMo Care addresses this by building a sovereign AI system that augments—not replaces—human
              caregivers. It provides real-time health insights, predictive alerts, and intelligent care
              recommendations, all while maintaining transparency and user agency.
            </p>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="border-b border-white/10 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">System Architecture</h2>
            <p className="text-brand-grey">
              Data flows through four integrated layers: input collection, knowledge retrieval, multi-model
              processing, and intelligent output.
            </p>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      {/* Evidence */}
      <section className="border-b border-white/10 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl space-y-16 px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Evidence</h2>
            <p className="text-brand-grey">Objective metrics demonstrating system performance and reliability.</p>
          </div>

          <div className="space-y-6 rounded-lg border border-white/10 p-12">
            <h3 className="text-xl font-bold">Model Accuracy Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 224, 255, 0.1)" />
                <XAxis stroke="#8A8AA0" />
                <YAxis stroke="#8A8AA0" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1F3A',
                    border: '1px solid #00E0FF',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#E8E8E8' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#00E0FF"
                  strokeWidth={3}
                  dot={{ fill: '#00E0FF', r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Accuracy (%)"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-brand-grey">
              System accuracy improved from 82% to 95% over 6 months through iterative model refinement and
              ensemble optimization.
            </p>
          </div>

          <div className="space-y-6 rounded-lg border border-white/10 p-12">
            <h3 className="text-xl font-bold">Model Latency Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 224, 255, 0.1)" />
                <XAxis stroke="#8A8AA0" />
                <YAxis stroke="#8A8AA0" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1F3A',
                    border: '1px solid #00E0FF',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#E8E8E8' }}
                />
                <Legend />
                <Bar dataKey="latency" fill="#00E0FF" name="Latency (ms)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-brand-grey">
              Custom-optimized model achieves 78ms latency, enabling real-time decision-making for time-critical
              health events.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-white/10 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Technology Stack</h2>
            <p className="text-brand-grey">
              Enterprise-grade infrastructure built for reliability, scalability, and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {techStack.map((stack) => (
              <div key={stack.category} className="space-y-6 rounded-lg border border-white/10 p-8">
                <h3 className="text-lg font-bold text-brand-cyan">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-1 font-mono text-xs text-brand-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="border-b border-white/10 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl space-y-12 px-6">
          <h2 className="text-3xl font-bold">Key Metrics</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {keyMetrics.map((metric) => (
              <div key={metric.label} className="space-y-3 rounded-lg border border-white/10 p-8 text-center">
                <p className="text-3xl font-bold text-brand-cyan">{metric.value}</p>
                <p className="text-sm font-bold text-white">{metric.label}</p>
                <p className="text-xs text-brand-grey">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-white/10 bg-white/[0.02] py-12">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs text-brand-grey">
            <strong>Production Showcase — Mock Environment</strong>
          </p>
          <p className="mt-2 text-xs text-brand-grey">
            This case study demonstrates system architecture and capabilities. All data is simulated for
            demonstration purposes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto max-w-4xl space-y-8 px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Explore?</h2>
          <Link
            to="/projects"
            className="inline-block rounded-full bg-brand-cyan px-8 py-3 font-bold text-navy transition hover:-translate-y-0.5"
          >
            Back to Hub
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-xs text-brand-grey">
        <p>NamoNexus © 2026 · Sovereign AI Ecosystems</p>
      </footer>
    </div>
  );
}

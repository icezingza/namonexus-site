import type { ReactNode } from 'react';
import ResearchBriefLayout, { Term } from '../../components/research/ResearchBriefLayout';

function SubPoint({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="leading-relaxed text-brand-grey">{children}</p>
    </div>
  );
}

export default function FrontierOfSovereignAI() {
  return (
    <ResearchBriefLayout
      title="Research & Engineering: The Frontier of Sovereign & Ethical AI"
      summary="สถาปัตยกรรมหลักเบื้องหลัง NamoNexus — ตั้งแต่ Core Engine ไปจนถึง Application และ Ethical Framework"
      timestamp="2026-07-15"
      topics={['Bayesian Fusion', 'RAG', 'Ethics']}
    >
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">
          1. NamoNexus Fusion Engine: Unified Multimodal Bayesian Intelligence
        </h2>
        <p className="leading-relaxed text-brand-grey">
          NamoNexus Fusion Engine ไม่ใช่แค่ <Term>LLM Wrapper</Term> แต่เป็น
          สถาปัตยกรรม <Term>Multimodal Bayesian Fusion</Term> ที่ออกแบบมาเพื่อ
          ยกระดับการตัดสินใจของระบบให้มีเสถียรภาพและตรวจสอบได้ (
          <Term>Explainable AI</Term>)
        </p>
        <div className="space-y-6 border-l-2 border-white/10 pl-6">
          <SubPoint title="Structural Invariant (Golden Ratio)">
            ใช้ <Term>φ ≈ 1.618</Term> เป็นค่าคงที่เชิงโครงสร้างในทุกเลเยอร์ของ
            Bayesian Probability เพื่อให้ผลลัพธ์มีความแม่นยำสูงในสภาวะข้อมูล
            ที่มีสัญญาณรบกวน (High Noise)
          </SubPoint>
          <SubPoint title="Explainable Bayesian Inference">
            รองรับการทำ <Term>Shapley-value attribution</Term> เพื่อตอบโจทย์
            Compliance ระดับสากล (<Term>GDPR/PDPA</Term>) โดยเปลี่ยน Black-box
            AI ให้กลายเป็นระบบที่อธิบายที่มาที่ไปของคำตอบได้
          </SubPoint>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">2. Optimizing RAG Pipelines: Infrastructure of Wisdom</h2>
        <p className="leading-relaxed text-brand-grey">
          เรานิยาม RAG ใหม่ในฐานะ &ldquo;<Term>Infrastructure of Wisdom</Term>
          &rdquo; ที่เน้นความลึกซึ้งของการเข้าถึงความรู้เฉพาะทาง (
          <Term>Domain-Specific Knowledge</Term>) ไม่ใช่แค่การ Search ทั่วไป
        </p>
        <div className="space-y-6 border-l-2 border-white/10 pl-6">
          <SubPoint title="Semantic Vector Layer">
            ปรับจูน Embedding Space ให้เข้ากับบริบทของข้อมูลเฉพาะทางสูง (เช่น
            พุทธศาสตร์หรือข้อมูลทางการแพทย์) เพื่อให้ AI
            เข้าใจความหมายแฝงและบริบทเชิงลึก
          </SubPoint>
          <SubPoint title="Sovereign Cloud Architecture">
            ออกแบบระบบให้รันบน Hybrid Cloud ที่รักษาอธิปไตยของข้อมูล (
            <Term>Data Sovereignty</Term>) ประมวลผลหลักบน Local Server
            เพื่อลดความหน่วงและกำจัดความเสี่ยงจากการพึ่งพา Cloud ภายนอก
          </SubPoint>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">3. Ethical AI Principles: The Dhammic Moat</h2>
        <p className="leading-relaxed text-brand-grey">
          จริยธรรมของ NamoNexus ไม่ใช่แค่คำแนะนำ แต่เป็นโครงสร้างพื้นฐาน
          ที่ฝังรากลึกในระดับ Kernels ของระบบ
        </p>
        <div className="space-y-6 border-l-2 border-white/10 pl-6">
          <SubPoint title="Ethical Calibration Kernel (ECK)">
            เปลี่ยนจากนโยบายแบบปฏิเสธ (Policy-based refusal) มาสู่ระบบจริยธรรม
            ที่ Hard-coded ไว้ใน Engine เพื่อการตัดสินใจที่ยึดหลักความเมตตา (
            <Term>Active Karuna</Term>) และความปลอดภัยเป็นที่ตั้ง
          </SubPoint>
          <SubPoint title="Human-Centric Orchestration">
            ระบบถูกออกแบบมาเพื่อให้มนุษย์เข้ามาแทรกแซง (
            <Term>Human-in-the-loop</Term>) ในสถานการณ์วิกฤตทันที โดยใช้{' '}
            <Term>Empathy Prompts</Term> เป็นเครื่องมือช่วยประคับประคอง
            ผู้ใช้งานในภาวะเปราะบาง
          </SubPoint>
        </div>
      </section>
    </ResearchBriefLayout>
  );
}

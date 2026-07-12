import { useEffect } from 'react';

export default function BrandWebsite() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="brand-website">
      <style>{`
        :root {
          --navy: #0A0F2C;
          --cyan: #00E0FF;
          --magenta: #B44BFF;
          --white: #FFFFFF;
          --grey: #B0B3C1;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: "Poppins", "Noto Sans Thai", system-ui, sans-serif; }
        .brand-website {
          background: var(--navy);
          color: var(--white);
          line-height: 1.7;
        }
        .container { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

        .brand-website header {
          position: sticky; top: 0; z-index: 50;
          background: rgba(10, 15, 44, 0.82);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(176, 179, 193, 0.16);
        }
        .brand-website .nav { display: flex; align-items: center; justify-content: space-between; height: 70px; }
        .brand-website .brand { display: flex; align-items: center; gap: 11px; font-weight: 700; font-size: 1.18rem; text-decoration: none; }
        .brand-website .brand span em { color: var(--cyan); font-style: normal; }

        .brand-website .hero {
          position: relative; overflow: hidden;
          padding: 110px 0 120px; text-align: center;
          background: linear-gradient(180deg, var(--navy) 0%, #060918 100%);
        }
        .brand-website .hero h1 { font-size: clamp(2.1rem, 5.4vw, 3.5rem); font-weight: 800; margin-bottom: 18px; }
        .brand-website .hero h1 em { color: var(--cyan); font-style: normal; }
        .brand-website .hero .slogan { font-weight: 400; font-size: clamp(1rem, 2vw, 1.15rem); color: var(--cyan); letter-spacing: 0.04em; margin-bottom: 16px; }
        .brand-website .cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-top: 42px; }
        .brand-website .btn {
          display: inline-flex; align-items: center; gap: 8px;
          border-radius: 999px; padding: 14px 32px;
          font-weight: 700; font-size: 1rem; text-decoration: none;
          transition: transform 0.18s ease;
          border: none; cursor: pointer;
        }
        .brand-website .btn-primary { background: var(--cyan); color: var(--navy); }
        .brand-website .btn-primary:hover { transform: translateY(-2px); }
        .brand-website .btn-ghost { color: var(--cyan); border: 1.5px solid var(--cyan-border); background: transparent; }
        .brand-website .btn-ghost:hover { background: rgba(0, 224, 255, 0.14); transform: translateY(-2px); }

        .brand-website section { padding: 88px 0; }
        .brand-website h2 { font-size: clamp(1.6rem, 3.4vw, 2.2rem); font-weight: 700; margin-bottom: 14px; }

        .brand-website .vision { background: linear-gradient(180deg, #060918 0%, var(--navy) 100%); border-top: 1px solid rgba(176, 179, 193, 0.16); }
        .brand-website .vision blockquote { max-width: 740px; margin: 0 auto; text-align: center; font-size: clamp(1.2rem, 2.6vw, 1.5rem); font-weight: 500; line-height: 1.85; }
        .brand-website .vision blockquote em { color: var(--cyan); font-style: normal; }

        .brand-website .product-card {
          display: grid; grid-template-columns: 1.1fr 1fr;
          background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(176, 179, 193, 0.16);
          border-radius: 20px; overflow: hidden;
          max-width: 920px; margin: 0 auto;
        }
        @media (max-width: 760px) { .brand-website .product-card { grid-template-columns: 1fr; } }
        .brand-website .product-body { padding: 46px 42px; }
        .brand-website .product-body h3 { font-size: 1.6rem; font-weight: 800; margin-bottom: 10px; }
        .brand-website .product-body h3 span { color: #E67E22; }
        .brand-website .btn-product { background: #E67E22; color: var(--white); margin-top: 24px; }
        .brand-website .btn-product:hover { transform: translateY(-2px); }

        .brand-website .philosophy { background: linear-gradient(180deg, var(--navy) 0%, #060918 100%); border-top: 1px solid rgba(176, 179, 193, 0.16); }
        .brand-website .brahma-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        @media (max-width: 900px) { .brand-website .brahma-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .brand-website .brahma-grid { grid-template-columns: 1fr; } }
        .brand-website .brahma-card {
          background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(176, 179, 193, 0.16); border-radius: 20px;
          padding: 32px 24px; text-align: center;
          transition: transform 0.2s ease;
        }
        .brand-website .brahma-card:hover { transform: translateY(-5px); }
        .brand-website .brahma-card .glyph { font-size: 2rem; margin-bottom: 14px; }
        .brand-website .brahma-card h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 4px; }

        .brand-website .contact { text-align: center; }
        .brand-website .contact .card {
          max-width: 580px; margin: 0 auto; background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(0, 224, 255, 0.28); border-radius: 20px;
          padding: 54px 36px;
        }

        .brand-website footer { border-top: 1px solid rgba(176, 179, 193, 0.16); padding: 34px 0; background: #060918; }
        .brand-website .foot { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .brand-website .foot small { color: var(--grey); font-size: 0.86rem; }

        .brand-website .nav-links { display: flex; gap: 26px; }
        .brand-website .nav-links a { color: var(--grey); text-decoration: none; font-weight: 500; font-size: 0.93rem; }
        .brand-website .nav-links a:hover { color: var(--cyan); }
      `}</style>

      <header>
        <div className="container nav">
          <a className="brand" href="#top">
            <span>Namo<em>Nexus</em></span>
          </a>
          <nav className="nav-links">
            <a href="#vision">วิสัยทัศน์</a>
            <a href="#products">ผลิตภัณฑ์</a>
            <a href="#philosophy">ปรัชญา</a>
            <a href="#contact">ติดต่อ</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container">
            <p className="slogan">Elevate your existence with NamoNexus.</p>
            <h1>เทคโนโลยีที่มี<em>หัวใจ</em><br/>เพื่อยกระดับชีวิตของทุกคน</h1>
            <p style={{color: 'var(--grey)', fontSize: '1.03rem', maxWidth: '46ch', margin: '0 auto 42px'}}>
              NamoNexus สร้างสรรค์เทคโนโลยีด้วยความเมตตา — เริ่มต้นจากการดูแลสุขภาพผู้สูงอายุไทยและครอบครัว
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#products">ดูผลิตภัณฑ์ของเรา</a>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="vision" id="vision">
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '34px'}}>วิสัยทัศน์</h2>
            <blockquote>
              <p>"เทคโนโลยีที่ดีที่สุด ไม่ใช่เทคโนโลยีที่ล้ำที่สุด<br/>แต่คือเทคโนโลยีที่<em>เข้าใจมนุษย์</em>ที่สุด"</p>
              <cite style={{display: 'block', marginTop: '24px', color: 'var(--grey)', fontStyle: 'normal', fontSize: '0.93rem', fontWeight: '400'}}>
                — ปรัชญาการออกแบบของ NamoNexus
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Products */}
        <section id="products">
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '14px'}}>ดูแลคนที่คุณรัก <em>แม้อยู่ไกลกัน</em></h2>
            <p style={{textAlign: 'center', color: 'var(--grey)', marginBottom: '54px'}}>
              ผลิตภัณฑ์แรกของเรา — แพลตฟอร์มสุขภาพดิจิทัลที่ออกแบบเพื่อผู้สูงอายุไทยโดยเฉพาะ
            </p>
            <div className="product-card">
              <div className="product-body">
                <h3>NaMo <span>Care</span></h3>
                <p style={{color: 'var(--grey)'}}>ผู้ช่วยดูแลสุขภาพกายและใจของผู้สูงอายุ ผ่าน LINE ที่ท่านใช้อยู่แล้ว พร้อมแดชบอร์ดให้ลูกหลานติดตามได้ทุกที่</p>
                <a className="btn btn-product" href="https://namocare.app" target="_blank" rel="noreferrer">เข้าใช้งาน NaMo Care 🙏</a>
              </div>
              <div style={{background: 'linear-gradient(160deg, #F9C486 0%, #E67E22 55%, #CA6A15 100%)', display: 'grid', placeItems: 'center', padding: '44px', minHeight: '320px'}}>
                <p style={{color: '#FDFBF7', textAlign: 'center', fontWeight: '600'}}>💙 ผู้ช่วยดูแลสุขภาพ<br/>สำหรับผู้สูงอายุ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy" id="philosophy">
          <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '54px'}}>สร้างบนหลักพรหมวิหาร 4</h2>
            <div className="brahma-grid">
              <div className="brahma-card">
                <div className="glyph">🌸</div>
                <h3>เมตตา</h3>
                <p style={{color: 'var(--grey)', fontSize: '0.9rem'}}>ปรารถนาดีต่อผู้ใช้ทุกคน — ทุกข้อความอบอุ่นและเป็นมิตร</p>
              </div>
              <div className="brahma-card">
                <div className="glyph">🤲</div>
                <h3>กรุณา</h3>
                <p style={{color: 'var(--grey)', fontSize: '0.9rem'}}>พร้อมช่วยเหลือในยามทุกข์ — ระบบฉุกเฉินที่ไว้ใจได้เสมอ</p>
              </div>
              <div className="brahma-card">
                <div className="glyph">😊</div>
                <h3>มุทิตา</h3>
                <p style={{color: 'var(--grey)', fontSize: '0.9rem'}}>ร่วมยินดีในความสุข — เฉลิมฉลองทุกวันที่สดใสไปด้วยกัน</p>
              </div>
              <div className="brahma-card">
                <div className="glyph">🧘</div>
                <h3>อุเบกขา</h3>
                <p style={{color: 'var(--grey)', fontSize: '0.9rem'}}>มั่นคงและเป็นกลาง — เทคโนโลยีที่สงบ ไม่รบกวนเกินจำเป็น</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="card">
              <h2>มาสร้างเทคโนโลยีที่มีหัวใจ<br/><em>ไปด้วยกัน</em></h2>
              <p style={{color: 'var(--grey)', margin: '26px 0'}}>สนใจร่วมงาน เป็นพาร์ทเนอร์ หรือสอบถามเกี่ยวกับผลิตภัณฑ์ของเรา</p>
              <a className="btn btn-primary" href="mailto:contact@namonexus.com">✉️ contact@namonexus.com</a>
              <p style={{margin: '26px 0 0', fontSize: '0.92rem'}}>
                <strong style={{color: 'var(--white)', fontWeight: '600'}}>Kanin Raksaraj</strong>
                <span style={{color: 'var(--grey)'}}> — ผู้ก่อตั้ง NamoNexus</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container foot">
          <small>© 2026 NamoNexus. สงวนลิขสิทธิ์</small>
          <small style={{color: 'var(--cyan)', fontWeight: '500'}}>Elevate your existence with NamoNexus.</small>
        </div>
      </footer>
    </div>
  );
}

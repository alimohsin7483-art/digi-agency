import styles from "./Hero.module.css";

// ↓ PASTE YOUR CALENDLY LINK BELOW ↓
const CALENDLY_LINK = "https://calendly.com/alimohsin7483/30min";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden />
      <div className={styles.scanline} aria-hidden />
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />

      <div className={styles.content}>
        <div className={`${styles.badge} anim-1`}>
          <span className={styles.badgeDot} />
          Conversion-Focused · Results-Driven
        </div>

        <h1 className={`${styles.headline} anim-2`}>
          <span className={styles.line1}>STOP LOSING</span>
          <span className={styles.line2}>LEADS. START</span>
          <span className={styles.line3}>
            <span className={styles.glitch} data-text="CLOSING THEM.">CLOSING THEM.</span>
          </span>
        </h1>

        <p className={`${styles.sub} anim-3`}>
          We build high-converting funnels, lead systems and automated workflows for coaches, creators and local businesses — so you get consistent leads and sales, not just a pretty website.
        </p>

        <div className={`${styles.actions} anim-4`}>
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Free Strategy Call
          </a>
          <a href="#contact" className="btn-ghost">Get Free Audit →</a>
        </div>

        <div className={`${styles.proof} anim-5`}>
          <div className={styles.proofItem}>
            <span className={styles.proofDot} />
            <span>No contracts. No fluff.</span>
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofDot} />
            <span>Built to generate leads</span>
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofDot} />
            <span>Live in 14 days</span>
          </div>
        </div>
      </div>

      {/* AI HOLOGRAM AVATAR */}
      <div className={`${styles.avatarWrap} anim-4`}>
        <div className={styles.hologramBase} />
        <div className={styles.hologramRing1} />
        <div className={styles.hologramRing2} />
        <div className={styles.hologramRing3} />
        <div className={styles.scanBeam} />
        <div className={styles.avatar}>
          <div className={styles.avatarHead}>
            <div className={styles.avatarFace}>
              <div className={styles.avatarEye} />
              <div className={styles.avatarEye} />
              <div className={styles.avatarMouth} />
            </div>
            <div className={styles.avatarHelmet} />
            <div className={styles.avatarVisor} />
          </div>
          <div className={styles.avatarBody}>
            <div className={styles.avatarChest}>
              <div className={styles.avatarCore} />
              <div className={styles.avatarCircuit} />
            </div>
            <div className={styles.avatarShoulder} />
            <div className={styles.avatarShoulder} />
          </div>
          <div className={styles.panel1}>
            <span className={styles.panelLine} />
            <span className={styles.panelLine} />
            <span className={styles.panelLine} />
          </div>
          <div className={styles.panel2}>
            <span className={styles.panelDot} />
            <span className={styles.panelDot} />
            <span className={styles.panelDot} />
          </div>
          <div className={styles.panel3}>
            <span className={styles.panelCode}>&lt;/&gt;</span>
          </div>
        </div>
        <div className={styles.hologramLabel}>
          <span className={styles.hologramName}>FUNNEL ARCHITECT</span>
          <span className={styles.hologramStatus}>
            <span className={styles.statusDot} /> ONLINE
          </span>
        </div>
        {["LEADS", "FUNNEL", "AUTO", "CRO", "CRM", "ROI"].map((tag, i) => (
          <div key={tag} className={styles.floatTag} style={{ "--fi": i } as React.CSSProperties}>
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import styles from "./Hero.module.css";

function scrollToContact(e: React.MouseEvent) {
  e.preventDefault();
  const section = document.getElementById("contact");
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => {
    const form = section.querySelector("form");
    if (form) {
      form.classList.remove("form-highlight");
      void (form as HTMLElement).offsetWidth;
      form.classList.add("form-highlight");
      setTimeout(() => form.classList.remove("form-highlight"), 2000);
    }
  }, 800);
}

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
          Strategic Marketing · Funnels · AI Automation
        </div>

        <h1 className={`${styles.headline} anim-2`}>
          <span className={styles.line1}>WE BUILD FUNNELS</span>
          <span className={styles.line2}>& WEBSITES THAT</span>
          <span className={styles.line3}>
            <span className={styles.glitch} data-text="TURN TRAFFIC INTO REVENUE.">TURN TRAFFIC INTO REVENUE.</span>
          </span>
        </h1>

        <p className={`${styles.sub} anim-3`}>
          Not just design. Not just ads. We combine strategy, funnels and automation to generate consistent leads and sales — for businesses that are serious about growth.
        </p>

        <div className={`${styles.actions} anim-4`}>
          <a href="#contact" onClick={scrollToContact} className="btn-primary">
            Get Free Strategy Audit
          </a>
          <a
            href="https://wa.me/917049756964?text=Hi%20NexGen%2C%20I%27m%20interested%20in%20a%20strategy%20call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <div className={`${styles.proof} anim-5`}>
          <div className={styles.proofItem}>
            <span className={styles.proofDot} />
            <span>Strategy-first approach</span>
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofDot} />
            <span>AI-powered systems</span>
          </div>
          <div className={styles.proofItem}>
            <span className={styles.proofDot} />
            <span>Limited client slots available</span>
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
        {["LEADS", "FUNNEL", "AUTO", "AI", "CRM", "ROI"].map((tag, i) => (
          <div key={tag} className={styles.floatTag} style={{ "--fi": i } as React.CSSProperties}>
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}

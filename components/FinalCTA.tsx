"use client";
import styles from "./FinalCTA.module.css";

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

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.watermark}>NGD</div>

      <div className={styles.inner}>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>// Ready?</span>
        <h2 className={styles.title}>
          READY TO BUILD A SYSTEM THAT<br />
          <span className={styles.cyan}>ACTUALLY BRINGS RESULTS?</span>
        </h2>
        <p className={styles.sub}>
          Includes strategy, funnel, website and automation setup. We only work with a limited number of clients per month — don&apos;t miss your slot.
        </p>

        <div className={styles.actions}>
          <a href="#contact" onClick={scrollToContact} className="btn-primary">
            Get Free Strategy Audit
          </a>
          <a href="#contact" onClick={scrollToContact} className="btn-ghost">
            Book Strategy Call →
          </a>
          <a
            href="https://wa.me/917049756964?text=Hi%20NexGen%2C%20I%27m%20interested%20in%20a%20strategy%20call"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <div className={styles.urgency}>
          <span className={styles.urgencyDot} />
          <span>We only work with a limited number of clients per month — slots filling fast.</span>
        </div>
      </div>
    </section>
  );
}

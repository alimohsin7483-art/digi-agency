"use client";
import styles from "./Footer.module.css";

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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>⬡</span>
            NEX<span className={styles.cyan}>GEN</span>
            <span className={styles.logoSub}>DIGITAL</span>
          </a>
          <p className={styles.tagline}>
            We build high-converting funnels, lead systems and automation for coaches, creators and local businesses. Stop losing leads. Start closing them.
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.8rem 1.8rem", display: "inline-block", marginTop: "1rem" }}
          >
            Book Free Strategy Call →
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>What We Build</h4>
          <a href="#services" className={styles.colLink}>High-Converting Website</a>
          <a href="#services" className={styles.colLink}>Lead Funnel System</a>
          <a href="#services" className={styles.colLink}>Automation & Follow-Up</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Who We Help</h4>
          <span className={styles.colLink} style={{ cursor: "default" }}>Coaches & Consultants</span>
          <span className={styles.colLink} style={{ cursor: "default" }}>Creators & Personal Brands</span>
          <span className={styles.colLink} style={{ cursor: "default" }}>Local Businesses</span>
          <a href="#contact" onClick={scrollToContact} className={styles.colLink} style={{ color: "var(--cyan)", marginTop: "0.5rem" }}>
            → Book Free Call
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <a href="mailto:alimohsin7483@gmail.com" className={styles.colLink}>alimohsin7483@gmail.com</a>
          <a href="tel:+917049756964" className={styles.colLink}>+91 70497 56964</a>
          <p className={styles.colLink} style={{ cursor: "default" }}>Response within 24 hours</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 NexGen Digital. All rights reserved.</p>
        <p className={styles.credit}>Conversion-focused. Results-driven. Built to get you leads.</p>
      </div>
    </footer>
  );
}

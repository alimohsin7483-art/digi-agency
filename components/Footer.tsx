import styles from "./Footer.module.css";

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
            We build websites, lead funnels and automation systems that help businesses of all kinds grow online — and get more customers, every day.
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.8rem 1.8rem", display: "inline-block", marginTop: "1rem" }}>
            Book Free Strategy Call →
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <a href="#services" className={styles.colLink}>Website Design & Development</a>
          <a href="#services" className={styles.colLink}>Funnel & Lead Systems</a>
          <a href="#services" className={styles.colLink}>Automation Setup</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <a href="#about" className={styles.colLink}>How It Works</a>
          <a href="#work" className={styles.colLink}>Case Studies</a>
          <a href="#contact" className={styles.colLink}>Book a Call</a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <a href="mailto:alimohsin7483@gmail.com" className={styles.colLink}>alimohsin7483@gmail.com</a>
          <a href="tel:+917049756964" className={styles.colLink}>+91 70497 56964</a>
          <p className={styles.colLink} style={{ cursor: "default" }}>Response within 24hrs</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 NexGen Digital. All rights reserved.</p>
        <p className={styles.credit}>Built for every business. Powered by results.</p>
      </div>
    </footer>
  );
}

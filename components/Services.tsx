import styles from "./Services.module.css";

const services = [
  {
    icon: "◈",
    number: "01",
    title: "High-Converting Website",
    desc: "Websites engineered to turn visitors into leads. Every element — copy, layout, CTA — is built to convert. Not just look good.",
    bullets: ["Conversion-first design", "Mobile-optimised & fast", "Clear CTAs at every step", "Delivered in 14 days"],
    tag: "Foundation",
  },
  {
    icon: "⬡",
    number: "02",
    title: "Funnel & Lead System",
    desc: "A complete system that moves strangers into booked calls — lead magnet, landing page, email sequence and booking flow running on autopilot.",
    bullets: ["Lead magnet + landing page", "Automated email nurture", "Calendar booking integration", "Full CRM pipeline setup"],
    tag: "Core Product",
  },
  {
    icon: "⚡",
    number: "03",
    title: "AI & Automation Setup",
    desc: "Stop losing leads to slow follow-up. We automate your entire post-enquiry process with AI-powered responses, WhatsApp flows and smart sequences.",
    bullets: ["Instant AI lead response", "WhatsApp automation", "Multi-step follow-up flows", "Integrates with your tools"],
    tag: "Multiplier",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className="section-label">// What We Build</span>
          <h2 className={styles.title}>EVERY SYSTEM BUILT FOR<br />ONE GOAL — CONVERSION.</h2>
          <p className={styles.sub}>
            Every system we build is powered by strategy, funnels and automation. We don&apos;t build websites. We build revenue machines.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.number}>{s.number}</span>
              <span className={styles.tag}>{s.tag}</span>
            </div>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <ul className={styles.bullets}>
              {s.bullets.map((b) => (
                <li key={b} className={styles.bullet}>
                  <span className={styles.bulletDot}>→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className={styles.cardCta}>Get This Built →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from "./Services.module.css";

const services = [
  {
    icon: "◈",
    number: "01",
    title: "High-Converting Website",
    desc: "Most websites look good but do nothing. We build websites engineered for one purpose — turning visitors into leads and leads into paying customers. Every element has a job.",
    bullets: [
      "Conversion-first design and copy",
      "Mobile-optimised and fast",
      "Clear CTAs at every touchpoint",
      "Delivered in 14 days",
    ],
    tag: "Foundation",
  },
  {
    icon: "⬡",
    number: "02",
    title: "Lead Funnel System",
    desc: "A website alone is not a business. We build the complete system — landing page, lead magnet, email sequence and booking flow — that moves strangers into booked calls on autopilot.",
    bullets: [
      "Lead magnet + squeeze page",
      "Automated email nurture sequence",
      "Calendar booking integration",
      "Full CRM pipeline setup",
    ],
    tag: "Core Product",
  },
  {
    icon: "⚡",
    number: "03",
    title: "Automation & Follow-Up",
    desc: "Most leads go cold because of slow follow-up. We automate your entire post-enquiry process — so every lead gets followed up instantly, consistently and without you lifting a finger.",
    bullets: [
      "Instant lead response automation",
      "Multi-step follow-up sequences",
      "Onboarding and reminder flows",
      "Integrates with your existing tools",
    ],
    tag: "Multiplier",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className="section-label">// The Problem & The Fix</span>
          <h2 className={styles.title}>YOUR WEBSITE IS NOT<br />THE PROBLEM. YOUR<br />SYSTEM IS.</h2>
          <p className={styles.sub}>
            Most businesses have a website. Very few have a system. A system is what turns traffic into leads, leads into calls and calls into clients — automatically. Here&apos;s what we build.
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

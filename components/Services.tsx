import styles from "./Services.module.css";

const services = [
  {
    icon: "◈",
    number: "01",
    title: "Website Design & Development",
    desc: "Your website is your most powerful sales tool. We build fast, conversion-optimised websites that make your brand look world-class — and turn visitors into paying customers.",
    bullets: ["Custom design — no templates", "Mobile-first & lightning fast", "Built to convert, not just look good", "Delivered in 14 days"],
    tag: "Most Popular",
  },
  {
    icon: "⬡",
    number: "02",
    title: "Funnel & Lead Systems",
    desc: "Stop depending on referrals and cold outreach. We build automated lead funnels that attract your ideal customers, capture their details and nurture them to buy — on autopilot.",
    bullets: ["Lead magnet + landing page", "Email nurture sequences", "Booking & inquiry system", "CRM setup & pipeline"],
    tag: "High ROI",
  },
  {
    icon: "⚡",
    number: "03",
    title: "Automation Setup",
    desc: "Reclaim hours every week. We map and automate your repetitive business workflows — client onboarding, follow-ups, reminders, invoicing — so you focus on growth, not admin.",
    bullets: ["Workflow mapping & design", "Tool integration (Zapier, Make)", "Client onboarding automation", "Ongoing support & maintenance"],
    tag: "Time Saver",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className="section-label">// What We Build</span>
          <h2 className={styles.title}>THREE SYSTEMS.<br />ONE GOAL: MORE GROWTH.</h2>
          <p className={styles.sub}>We don&apos;t do everything. We do three things exceptionally well — and together, they build a business that attracts clients and runs without the constant hustle.</p>
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
            <a href="#contact" className={styles.cardCta}>Get Started →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

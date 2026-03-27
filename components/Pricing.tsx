import styles from "./Pricing.module.css";

const plans = [
  {
    name: "STARTER",
    price: "₹25,000",
    desc: "Perfect for businesses ready to establish a proper online presence that actually converts.",
    features: ["High-converting website (5 pages)", "Lead capture form + CRM setup", "Basic email automation", "Mobile optimised", "Delivered in 14 days"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "GROWTH",
    price: "₹50,000",
    desc: "The complete funnel system for businesses serious about generating consistent, predictable leads.",
    features: ["Everything in Starter", "Full funnel + landing pages", "Email nurture sequence (7 emails)", "WhatsApp automation setup", "Meta / Google Ads setup", "Conversion tracking + analytics"],
    cta: "Get Custom Plan",
    highlight: true,
    tag: "Most Popular",
  },
  {
    name: "SCALE",
    price: "Custom",
    desc: "Full done-for-you growth system with ongoing management, ads and continuous optimisation.",
    features: ["Everything in Growth", "Ongoing ad management", "Monthly funnel optimisation", "AI-powered lead handling", "Weekly performance reports", "Dedicated account manager"],
    cta: "Book Strategy Call",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// Investment</span>
        <h2 className={styles.title}>TRANSPARENT.<br /><span className={styles.cyan}>RESULTS-DRIVEN.</span><br />PRICING.</h2>
        <p className={styles.sub}>No hidden fees. No lock-in contracts. Just a system built to generate returns that far exceed the investment.</p>
      </div>

      <div className={styles.grid}>
        {plans.map((p) => (
          <div key={p.name} className={`${styles.card} ${p.highlight ? styles.highlighted : ""}`}>
            {p.highlight && p.tag && <div className={styles.popularBadge}>{p.tag}</div>}
            <div className={styles.planTop}>
              <h3 className={styles.planName}>{p.name}</h3>
              <p className={styles.planDesc}>{p.desc}</p>
            </div>
            <div className={styles.planPrice}>
              <span className={styles.price}>{p.price}</span>
              {p.price !== "Custom" && <span className={styles.period}>one-time</span>}
            </div>
            <div className={styles.features}>
              {p.features.map((f) => (
                <div key={f} className={styles.feature}>
                  <span className={styles.check}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className={p.highlight ? "btn-primary" : "btn-ghost"} style={{ display: "block", textAlign: "center" }}>
              {p.cta} →
            </a>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <span>💡 Not sure which plan? </span>
        <a href="#contact" className={styles.noteLink}>Get a custom strategy plan — free →</a>
      </div>
    </section>
  );
}

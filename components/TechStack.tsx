import styles from "./TechStack.module.css";

const stack = [
  {
    category: "Web & Development",
    icon: "◈",
    items: ["WordPress", "Shopify", "React", "Next.js"],
  },
  {
    category: "Paid Marketing",
    icon: "⬡",
    items: ["Meta Ads", "Google Ads", "Retargeting", "Lookalike Audiences"],
  },
  {
    category: "Automation",
    icon: "⚡",
    items: ["Email Automation", "WhatsApp Systems", "CRM Integration", "Zapier / Make"],
  },
  {
    category: "Tracking & Analytics",
    icon: "📊",
    items: ["Google Analytics", "Meta Pixel", "Conversion Tracking", "Heatmaps"],
  },
];

export default function TechStack() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// Technology Stack</span>
        <h2 className={styles.title}>TOOLS CHOSEN FOR<br /><span className={styles.cyan}>PERFORMANCE.</span></h2>
        <p className={styles.sub}>We choose tools based on what gets results — not what&apos;s trending. Every tool in our stack is battle-tested.</p>
      </div>

      <div className={styles.grid}>
        {stack.map((s) => (
          <div key={s.category} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.category}</h3>
            </div>
            <div className={styles.items}>
              {s.items.map((item) => (
                <span key={item} className={styles.item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        &quot;We choose tools based on performance, not trends.&quot;
      </div>
    </section>
  );
}

import styles from "./Process.module.css";

const steps = [
  { num: "01", title: "STRATEGY", icon: "🎯", desc: "We audit your current presence, understand your audience and map the exact funnel system your business needs. No guessing — data-driven strategy first." },
  { num: "02", title: "BUILD", icon: "⚙️", desc: "We design and build your complete system — website, funnel, automations and integrations. Every element engineered to convert visitors into leads." },
  { num: "03", title: "TRAFFIC", icon: "📈", desc: "We activate paid and organic traffic channels — Meta Ads, Google Ads, SEO — to drive targeted visitors into your new funnel system." },
  { num: "04", title: "OPTIMISE", icon: "🔄", desc: "We track every metric, run split tests and continuously improve conversion rates. Your system gets smarter and more profitable over time." },
];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// Our 4-Step System</span>
        <h2 className={styles.title}>HOW WE BUILD<br /><span className={styles.cyan}>REVENUE MACHINES.</span></h2>
        <p className={styles.sub}>A proven 4-step process that takes you from zero to a fully automated lead and sales system.</p>
      </div>

      <div className={styles.grid}>
        {steps.map((s, i) => (
          <div key={s.num} className={styles.card}>
            <div className={styles.cardNum}>{s.num}</div>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            {i < steps.length - 1 && <div className={styles.arrow}>→</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

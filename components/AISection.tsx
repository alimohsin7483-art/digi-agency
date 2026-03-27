import styles from "./AISection.module.css";

const features = [
  { icon: "🤖", title: "AI Lead Handling", desc: "Every new lead gets an instant intelligent response — 24/7, without you lifting a finger." },
  { icon: "📧", title: "Email Automation", desc: "Smart email sequences that nurture leads over days and weeks — automatically moving them toward a sale." },
  { icon: "💬", title: "WhatsApp Automation", desc: "Automated WhatsApp follow-ups that feel personal. Respond to leads instantly on the channel they prefer." },
  { icon: "🔄", title: "Funnel Automation", desc: "Your entire funnel runs on autopilot — from first click to booked call, every step is automated." },
  { icon: "📊", title: "Smart Tracking", desc: "Full conversion tracking across every channel so you know exactly what's working and what to scale." },
  { icon: "⚡", title: "Instant Follow-Up", desc: "Speed wins leads. Our systems respond in seconds — before your competition even sees the notification." },
];

export default function AISection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// AI & Automation</span>
        <h2 className={styles.title}>POWERED BY AI.<br /><span className={styles.cyan}>BUILT FOR SCALE.</span></h2>
        <p className={styles.sub}>Most businesses lose leads because of slow follow-up and manual processes. We automate everything — so your business works even when you don&apos;t.</p>
      </div>

      <div className={styles.grid}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <span className={styles.icon}>{f.icon}</span>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.closing}>
        <span className={styles.closingText}>Less manual work. <span className={styles.cyan}>More growth.</span></span>
      </div>
    </section>
  );
}

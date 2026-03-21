import styles from "./About.module.css";

const steps = [
  {
    num: "01",
    title: "UNDERSTAND",
    desc: "We start with a free strategy call to understand your business, your audience and where you're losing leads. No templates — we map the exact journey your customers take.",
  },
  {
    num: "02",
    title: "BUILD",
    desc: "We design and build your full funnel system — website, lead capture, email sequence, booking flow and automation. Every element built to convert, not just impress.",
  },
  {
    num: "03",
    title: "OPTIMISE",
    desc: "After launch we track what's working, fix what isn't and continuously improve your conversion rate. Your system gets sharper the longer we work together.",
  },
];

const niches = [
  { icon: "🎯", label: "Coaches & Consultants" },
  { icon: "🎨", label: "Creators & Personal Brands" },
  { icon: "🏪", label: "Local Businesses" },
  { icon: "🏋️", label: "Fitness & Wellness" },
  { icon: "🏠", label: "Real Estate & Property" },
  { icon: "⚖️", label: "Legal & Financial Services" },
  { icon: "🎓", label: "Education & Courses" },
  { icon: "💆", label: "Health & Beauty" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.left}>
        <span className="section-label">// Our 3-Step Process</span>
        <h2 className={styles.title}>
          FROM ZERO TO<br />
          <span className={styles.cyan}>FULLY LIVE</span><br />
          FUNNEL.
        </h2>
        <p className={styles.desc}>
          We work with coaches, creators, personal brands and local businesses across every industry. If you sell a service or product and need more leads — we can build the system that gets them.
        </p>

        {/* Niche grid */}
        <div className={styles.nicheGrid}>
          {niches.map((n) => (
            <div key={n.label} className={styles.nicheItem}>
              <span>{n.icon}</span>
              <span>{n.label}</span>
            </div>
          ))}
        </div>

        <a href="#contact" className="btn-primary" style={{ marginTop: "2rem", display: "inline-block" }}>
          Book Free Strategy Call →
        </a>
      </div>

      <div className={styles.right}>
        {steps.map((s, i) => (
          <div key={s.num} className={styles.step}>
            <span className={styles.stepNum}>{s.num}</span>
            <div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
            {i < steps.length - 1 && <div className={styles.connector} />}
          </div>
        ))}

        {/* Journey visual */}
        <div className={styles.journeyBar}>
          <span className={styles.journeyStep}>VISITOR</span>
          <span className={styles.journeyArrow}>→</span>
          <span className={styles.journeyStep}>LEAD</span>
          <span className={styles.journeyArrow}>→</span>
          <span className={styles.journeyStep} style={{ color: "var(--cyan)" }}>CLIENT</span>
        </div>
      </div>
    </section>
  );
}

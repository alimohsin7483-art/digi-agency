import styles from "./About.module.css";

const steps = [
  { num: "01", title: "STRATEGY CALL", desc: "We start with a free 30-minute call to understand your business, goals and current gaps. No pitch — just a clear, honest plan." },
  { num: "02", title: "BUILD & DESIGN", desc: "We design and build your website, funnel or automation system — with regular updates and your input throughout the entire process." },
  { num: "03", title: "LAUNCH & HAND OFF", desc: "We launch, test everything end-to-end and hand you a fully working system with a complete walkthrough so you're in full control." },
  { num: "04", title: "GROW & OPTIMISE", desc: "Optional ongoing support to improve performance, add features and keep your systems running at peak as your business scales." },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.left}>
        <span className="section-label">// How It Works</span>
        <h2 className={styles.title}>
          FROM BRIEF TO<br />
          <span className={styles.cyan}>FULLY LIVE</span><br />
          IN 4 STEPS.
        </h2>
        <p className={styles.desc}>
          We work with businesses across every industry — retail, real estate, healthcare, education, hospitality, e-commerce, personal brands and more. If you have a business, we can help it grow online.
        </p>
        <a href="#contact" className="btn-primary">Book Free Strategy Call →</a>
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
      </div>
    </section>
  );
}

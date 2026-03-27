import styles from "./Differentiation.module.css";

const compare = [
  { them: "Build pages", us: "Build revenue systems" },
  { them: "Run ads with no strategy", us: "Strategy-first, then execution" },
  { them: "Hand you a website and leave", us: "Build, automate and optimise ongoing" },
  { them: "Focus on design aesthetics", us: "Focus on conversion and results" },
  { them: "Generic cookie-cutter solutions", us: "Custom funnel built for your business" },
];

export default function Differentiation() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// Why NexGen</span>
        <h2 className={styles.title}>MOST AGENCIES BUILD PAGES.<br /><span className={styles.cyan}>WE BUILD SYSTEMS.</span></h2>
      </div>

      <div className={styles.compareGrid}>
        <div className={styles.col}>
          <div className={styles.colHeader}>
            <span className={styles.colBadgeBad}>Most Agencies</span>
          </div>
          {compare.map((c) => (
            <div key={c.them} className={`${styles.row} ${styles.bad}`}>
              <span className={styles.crossIcon}>✕</span>
              <span>{c.them}</span>
            </div>
          ))}
        </div>

        <div className={styles.vs}>VS</div>

        <div className={styles.col}>
          <div className={styles.colHeader}>
            <span className={styles.colBadgeGood}>NexGen Digital</span>
          </div>
          {compare.map((c) => (
            <div key={c.us} className={`${styles.row} ${styles.good}`}>
              <span className={styles.checkIcon}>✓</span>
              <span>{c.us}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

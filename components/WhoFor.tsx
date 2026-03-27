import styles from "./WhoFor.module.css";

const forList = [
  "Coaches, consultants & personal brands",
  "Service-based businesses wanting more leads",
  "Businesses ready to invest in a proper system",
  "Founders who want predictable, consistent revenue",
];

const notForList = [
  "Those looking for the cheapest option",
  "Businesses not serious about growth",
  "Anyone wanting a basic template website",
];

export default function WhoFor() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">// Is This For You?</span>
          <h2 className={styles.title}>WE WORK WITH<br /><span className={styles.cyan}>SERIOUS BUSINESSES.</span></h2>
          <p className={styles.sub}>We only take on clients we know we can get results for. Here&apos;s how to know if that&apos;s you.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.checkIcon}>✓</span>
              <h3 className={styles.cardTitle}>This IS for you if...</h3>
            </div>
            {forList.map((item) => (
              <div key={item} className={styles.item}>
                <span className={styles.yes}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.card} ${styles.notFor}`}>
            <div className={styles.cardHeader}>
              <span className={styles.crossIcon}>✕</span>
              <h3 className={styles.cardTitle}>This is NOT for you if...</h3>
            </div>
            {notForList.map((item) => (
              <div key={item} className={styles.item}>
                <span className={styles.no}>✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

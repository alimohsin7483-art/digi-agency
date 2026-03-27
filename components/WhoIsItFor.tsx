import styles from "./WhoIsItFor.module.css";

const forList = [
  "Coaches, consultants and personal brands",
  "Service-based businesses wanting more clients",
  "Businesses that need a predictable lead flow",
  "Founders serious about growing online",
];

const notForList = [
  "Businesses looking for the cheapest option",
  "Anyone not committed to the process",
  "Those wanting quick fixes with no strategy",
];

export default function WhoIsItFor() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// Is This For You?</span>
        <h2 className={styles.title}>WE WORK WITH THE<br /><span className={styles.cyan}>RIGHT BUSINESSES.</span></h2>
        <p className={styles.sub}>We take on a limited number of clients each month. Here&apos;s who we&apos;re built for — and who we&apos;re not.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            <span className={styles.check}>✔</span> This is for you if...
          </h3>
          <ul className={styles.list}>
            {forList.map((item) => (
              <li key={item} className={styles.forItem}>
                <span className={styles.check}>✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.card} ${styles.notForCard}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.cross}>✖</span> This is NOT for you if...
          </h3>
          <ul className={styles.list}>
            {notForList.map((item) => (
              <li key={item} className={styles.notForItem}>
                <span className={styles.cross}>✖</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

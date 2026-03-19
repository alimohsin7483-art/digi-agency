import styles from "./Marquee.module.css";

const items = [
  "WEBSITES THAT CONVERT", "LEAD FUNNELS", "BUSINESS AUTOMATION",
  "FOR COACHES & CONSULTANTS", "DONE FOR YOU", "LIVE IN 14 DAYS",
  "WEBSITES THAT CONVERT", "LEAD FUNNELS", "BUSINESS AUTOMATION",
  "FOR COACHES & CONSULTANTS", "DONE FOR YOU", "LIVE IN 14 DAYS",
];

export default function Marquee() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item} <span className={styles.dot}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

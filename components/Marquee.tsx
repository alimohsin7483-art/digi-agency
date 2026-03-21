"use client";
import styles from "./Marquee.module.css";

const items = [
  "WEBSITES THAT CONVERT",
  "LEAD FUNNELS",
  "BUSINESS AUTOMATION",
  "FOR ANY BUSINESS OR SERVICE",
  "DONE FOR YOU",
  "LIVE IN 14 DAYS",
  "GROW ONLINE",
  "SMART SYSTEMS",
];

export default function Marquee() {
  // Triple the items to ensure seamless infinite loop
  const tripled = [...items, ...items, ...items];
  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        {tripled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item} <span className={styles.dot}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

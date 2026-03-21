"use client";
import styles from "./Marquee.module.css";

const items = [
  "HIGH-CONVERTING FUNNELS",
  "LEAD GENERATION SYSTEMS",
  "COACHES & CREATORS",
  "LOCAL BUSINESSES",
  "AUTOMATED FOLLOW-UPS",
  "VISITOR → LEAD → CUSTOMER",
  "RESULTS-DRIVEN BUILDS",
  "LIVE IN 14 DAYS",
];

export default function Marquee() {
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

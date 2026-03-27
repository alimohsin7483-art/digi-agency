"use client";
import styles from "./Marquee.module.css";

const items = [
  "WordPress", "Shopify", "React", "Next.js",
  "AI-Powered Systems", "Funnel Automation", "Meta Ads", "Google Ads",
  "Email Automation", "WhatsApp Automation", "Conversion Tracking",
  "Analytics", "High-Converting Funnels",
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

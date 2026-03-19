import styles from "./Stats.module.css";

const stats = [
  { val: "14", unit: "Days", label: "Average Delivery Time" },
  { val: "3x", unit: "Avg", label: "More Leads After Launch" },
  { val: "10+", unit: "hrs/wk", label: "Saved via Automation" },
  { val: "100%", unit: "", label: "Done-For-You Service" },
];

export default function Stats() {
  return (
    <div className={styles.bar}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <span className={styles.val}>{s.val}<span className={styles.unit}>{s.unit}</span></span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

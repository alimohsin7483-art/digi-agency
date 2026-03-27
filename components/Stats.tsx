import styles from "./Stats.module.css";

const stats = [
  { val: "150+", unit: "",       label: "Leads generated in 3 weeks" },
  { val: "2x",   unit: "",       label: "Average conversion increase" },
  { val: "14",   unit: " Days",  label: "From brief to live system" },
  { val: "100%", unit: "",       label: "Done-for-you service" },
];

export default function Stats() {
  return (
    <div className={styles.bar}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <span className={styles.val}>
            {s.val}<span className={styles.unit}>{s.unit}</span>
          </span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

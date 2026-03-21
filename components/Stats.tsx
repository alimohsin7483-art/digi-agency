import styles from "./Stats.module.css";

const stats = [
  { val: "3x",   unit: "",       label: "More leads on average after launch" },
  { val: "14",   unit: " Days",  label: "From brief to fully live system" },
  { val: "68%",  unit: "",       label: "Of leads go cold without automation" },
  { val: "100%", unit: "",       label: "Done-for-you — you focus on clients" },
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

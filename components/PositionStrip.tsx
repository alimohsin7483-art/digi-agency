import styles from "./PositionStrip.module.css";

export default function PositionStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <span className={styles.text}>
          Strategy First. <span className={styles.accent}>Funnel Second.</span> Website Third.
        </span>
        <span className={styles.divider}>—</span>
        <span className={styles.sub}>Everything built for one goal: <strong>conversion.</strong></span>
      </div>
    </div>
  );
}

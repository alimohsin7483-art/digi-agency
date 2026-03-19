import styles from "./Results.module.css";

const caseStudy = {
  client: "Online Fitness Coach",
  industry: "Health & Wellness",
  challenge: "Relying entirely on Instagram DMs for enquiries. No website, no funnel, no system. Spending 3+ hours daily on manual follow-ups.",
  solution: "Built a conversion-optimised website + automated lead funnel with email nurture sequence and booking system integration.",
  results: [
    { metric: "0 → 40+", label: "Leads per month" },
    { metric: "3hrs", label: "Saved daily on admin" },
    { metric: "14 days", label: "From brief to live" },
    { metric: "4.8x", label: "Revenue increase in 60 days" },
  ],
  quote: "Before NexGen I was doing everything manually. Now leads come in while I sleep and my calendar books itself. Best investment I made.",
  name: "Online Fitness Coach",
  location: "Mumbai, India",
};

export default function Results() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// Case Study</span>
        <h2 className={styles.title}>REAL WORK.<br /><span className={styles.cyan}>REAL RESULTS.</span></h2>
        <p className={styles.sub}>Here&apos;s what happens when strategy meets execution.</p>
      </div>

      <div className={styles.caseCard}>
        <div className={styles.caseTop}>
          <div className={styles.caseMeta}>
            <span className={styles.caseClient}>{caseStudy.client}</span>
            <span className={styles.caseIndustry}>{caseStudy.industry}</span>
          </div>
          <span className={styles.caseBadge}>Case Study</span>
        </div>

        <div className={styles.caseBody}>
          <div className={styles.caseSection}>
            <h3 className={styles.caseSectionTitle}>THE CHALLENGE</h3>
            <p className={styles.caseSectionText}>{caseStudy.challenge}</p>
          </div>
          <div className={styles.caseSection}>
            <h3 className={styles.caseSectionTitle}>WHAT WE BUILT</h3>
            <p className={styles.caseSectionText}>{caseStudy.solution}</p>
          </div>
        </div>

        <div className={styles.caseMetrics}>
          {caseStudy.results.map((r) => (
            <div key={r.label} className={styles.metric}>
              <span className={styles.metricVal}>{r.metric}</span>
              <span className={styles.metricLabel}>{r.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.caseQuote}>
          <p className={styles.quoteText}>&ldquo;{caseStudy.quote}&rdquo;</p>
          <div className={styles.quoteAttr}>
            <span className={styles.quoteName}>{caseStudy.name}</span>
            <span className={styles.quoteLocation}>{caseStudy.location}</span>
          </div>
        </div>
      </div>

      <div className={styles.addYours}>
        <p className={styles.addYoursText}>Your case study could be next.</p>
        <a href="#contact" className="btn-primary">Book Free Strategy Call →</a>
      </div>
    </section>
  );
}

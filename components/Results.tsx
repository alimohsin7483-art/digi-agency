import styles from "./Results.module.css";

const caseStudy = {
  client: "Online Fitness Coach",
  industry: "Health & Wellness",
  challenge: "Had 3,000 Instagram followers but no consistent way to convert them into clients. Was manually DM-ing every lead, spending 3+ hours daily with no system in place.",
  solution: "Built a conversion-optimised landing page + lead magnet funnel with a 5-email nurture sequence and automated booking flow directly into her calendar.",
  results: [
    { metric: "0 → 35+", label: "Qualified leads per month" },
    { metric: "3 hrs",   label: "Saved daily on manual follow-up" },
    { metric: "14 days", label: "From strategy call to live system" },
    { metric: "22%",     label: "Lead-to-call conversion rate" },
  ],
  quote: "I went from chasing every lead manually to waking up with booked calls. The system just works. I wish I had done this sooner.",
  name: "Fitness Coach",
  location: "Online Business · India",
};

const testimonials = [
  {
    quote: "We had a website for 2 years that generated almost nothing. NexGen rebuilt it as a proper funnel and within 6 weeks we were getting consistent enquiries from it.",
    name: "Raj M.",
    role: "Business Consultant · Mumbai",
  },
  {
    quote: "The automation setup alone saved me hours every week. Every new lead gets followed up automatically. My response time went from days to seconds.",
    name: "Priya S.",
    role: "Life Coach · Delhi",
  },
  {
    quote: "Simple, fast, no nonsense. They built exactly what I needed, explained everything clearly and delivered on time. The results speak for themselves.",
    name: "Arjun K.",
    role: "Local Business Owner · Pune",
  },
];

export default function Results() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// Results That Matter</span>
        <h2 className={styles.title}>REAL SYSTEMS.<br /><span className={styles.cyan}>REAL NUMBERS.</span></h2>
        <p className={styles.sub}>No inflated claims. Here&apos;s a real example of what a properly built funnel system does for a business.</p>
      </div>

      {/* Case Study */}
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
            <h3 className={styles.caseSectionTitle}>THE PROBLEM</h3>
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

      {/* Testimonials */}
      <div className={styles.testimonials}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.attr}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.role}>{t.role}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.addYours}>
        <p className={styles.addYoursText}>Your results could be next.</p>
        <a href="#contact" className="btn-primary">Book Free Strategy Call →</a>
      </div>
    </section>
  );
}

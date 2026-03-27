import styles from "./Results.module.css";

const caseStudies = [
  {
    client: "Online Fitness Coach",
    industry: "Health & Wellness",
    result: "150+ Leads in 3 Weeks",
    metric: "150+",
    metricLabel: "Leads in 3 weeks",
    desc: "Had 3,000 Instagram followers but no system to convert them. We built a complete funnel — landing page, lead magnet and automated email sequence. Result: 150+ qualified leads in the first 3 weeks.",
    color: "var(--cyan)",
  },
  {
    client: "Business Consultant",
    industry: "B2B Services",
    result: "2x Conversion Rate",
    metric: "2x",
    metricLabel: "Conversion increase",
    desc: "Old website was getting traffic but converting at 1.2%. We rebuilt the funnel with conversion-focused copy, clear CTAs and a lead magnet. Conversion rate jumped to 4.8% within 30 days.",
    color: "#7b2fff",
  },
  {
    client: "Local Service Business",
    industry: "Home Services",
    result: "Daily Consistent Inquiries",
    metric: "12+",
    metricLabel: "Daily inquiries",
    desc: "Was relying entirely on word-of-mouth with zero online presence. We built a local SEO-optimised website + Google Ads funnel. Now gets 12+ qualified inquiries every single day.",
    color: "#0066ff",
  },
];

const testimonials = [
  {
    quote: "We had a website for 2 years that generated almost nothing. NexGen rebuilt it as a proper funnel and within 6 weeks we were getting consistent enquiries.",
    name: "Raj M.",
    role: "Business Consultant · Mumbai",
  },
  {
    quote: "The automation setup saved me hours every week. Every new lead gets followed up automatically. My response time went from days to seconds.",
    name: "Priya S.",
    role: "Life Coach · Delhi",
  },
  {
    quote: "Simple, fast, no nonsense. They built exactly what I needed and delivered on time. The results speak for themselves.",
    name: "Arjun K.",
    role: "Local Business Owner · Pune",
  },
];

export default function Results() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <span className="section-label">// Case Studies</span>
        <h2 className={styles.title}>REAL SYSTEMS.<br /><span className={styles.cyan}>REAL NUMBERS.</span></h2>
        <p className={styles.sub}>No inflated claims. Here are real results from real businesses we&apos;ve built systems for.</p>
      </div>

      {/* Case Studies */}
      <div className={styles.caseGrid}>
        {caseStudies.map((c) => (
          <div key={c.client} className={styles.caseCard}>
            <div className={styles.caseTop}>
              <div>
                <span className={styles.caseClient}>{c.client}</span>
                <span className={styles.caseIndustry}>{c.industry}</span>
              </div>
              <span className={styles.caseBadge}>{c.result}</span>
            </div>
            <div className={styles.caseMetric} style={{ color: c.color }}>
              {c.metric}
              <span className={styles.caseMetricLabel}>{c.metricLabel}</span>
            </div>
            <p className={styles.caseDesc}>{c.desc}</p>
          </div>
        ))}
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
        <a href="#contact" className="btn-primary">Get Free Strategy Audit →</a>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.error("Error:", err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className="section-label">// Free Strategy Call + Audit</span>
          <h2 className={styles.title}>
            LET&apos;S FIND OUT<br />
            WHY YOUR <span className={styles.cyan}>LEADS</span><br />
            AREN&apos;T CONVERTING.
          </h2>
          <p className={styles.desc}>
            In 30 minutes we&apos;ll audit your current website and online presence, identify exactly where you&apos;re losing leads — and show you the system we&apos;d build to fix it. Free. No obligation.
          </p>

          <div className={styles.perks}>
            {[
              "Free audit of your current website",
              "Funnel gap analysis — where you're losing leads",
              "Custom action plan — yours to keep regardless",
              "No hard sell, no pressure",
            ].map((p) => (
              <div key={p} className={styles.perk}>
                <span className={styles.perkIcon}>✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>

          <div className={styles.contactDetails}>
            <a href="mailto:alimohsin7483@gmail.com" className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              alimohsin7483@gmail.com
            </a>
            <a href="tel:+917049756964" className={styles.contactItem}>
              <span className={styles.contactIcon}>☎</span>
              +91 70497 56964
            </a>
          </div>

          <div className={styles.availability}>
            <span className={styles.availDot} />
            <span className={styles.availText}>3 strategy call slots available this week</span>
          </div>
        </div>

        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.check}>✓</span>
              <p className={styles.successTitle}>YOU&apos;RE IN!</p>
              <p className={styles.successSub}>
                We&apos;ll review your website before the call. Pick your time slot now:
              </p>
              <a
                href="https://calendly.com/alimohsin7483/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: "1rem", display: "inline-block" }}
              >
                Pick Your Time Slot →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Your Name *</label>
                  <input type="text" placeholder="Full name" required
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className={styles.field}>
                  <label>Email *</label>
                  <input type="email" placeholder="your@email.com" required
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className={styles.field}>
                <label>Your Website URL</label>
                <input type="text" placeholder="https://yourwebsite.com (or leave blank)"
                  value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
              </div>
              <div className={styles.field}>
                <label>What do you need most? *</label>
                <select required value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select the biggest problem...</option>
                  <option>I need a website that actually converts</option>
                  <option>I need a funnel to generate leads</option>
                  <option>I need automation to follow up on leads</option>
                  <option>I need the full system — all three</option>
                  <option>Not sure — I need the audit first</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Tell us about your business *</label>
                <textarea
                  placeholder="What do you sell, who is your customer, and what does your current lead generation look like?"
                  rows={4} required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", textAlign: "center", display: "block", fontSize: "1rem", padding: "1.1rem" }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Book My Free Strategy Call →"}
              </button>
              <p className={styles.note}>No spam. No obligation. Just a useful conversation.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 Connect Formspree: replace action with https://formspree.io/f/YOUR_ID
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className="section-label">// Free Strategy Call</span>
          <h2 className={styles.title}>
            LET&apos;S BUILD<br />
            YOUR <span className={styles.cyan}>GROWTH</span><br />
            SYSTEM.
          </h2>
          <p className={styles.desc}>
            Book a free 30-minute strategy call. We&apos;ll review your current online presence, identify the biggest opportunities and show you exactly what we&apos;d build — no obligation, no pressure.
          </p>
          <div className={styles.perks}>
            {[
              "Free 30-min strategy session",
              "Custom audit of your business",
              "Clear action plan — yours to keep",
              "No pushy sales pitch",
            ].map((p) => (
              <div key={p} className={styles.perk}>
                <span className={styles.perkIcon}>✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>

          {/* Real contact details */}
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
            <span className={styles.availText}>Currently accepting 3 new clients this month</span>
          </div>
        </div>

        <div className={styles.right}>
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.check}>✓</span>
              <p className={styles.successTitle}>CALL REQUEST RECEIVED</p>
              <p className={styles.successSub}>We&apos;ll be in touch within 24 hours to confirm your slot.</p>
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
                <label>Business / Brand Name</label>
                <input type="text" placeholder="What's your business called?"
                  value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
              </div>
              <div className={styles.field}>
                <label>What do you need? *</label>
                <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select a service...</option>
                  <option>Website Design & Development</option>
                  <option>Funnel & Lead System</option>
                  <option>Automation Setup</option>
                  <option>All of the above</option>
                  <option>Not sure — need advice</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Tell us about your business</label>
                <textarea placeholder="What do you do, who do you serve, and what's your biggest challenge right now?" rows={4}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center", display: "block", fontSize: "1rem", padding: "1.1rem" }}>
                Book My Free Strategy Call →
              </button>
              <p className={styles.note}>No spam. No obligation. Just a useful conversation.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

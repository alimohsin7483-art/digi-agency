"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = ["Services", "Work", "About", "Results"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);

    const section = document.getElementById("contact");
    if (!section) return;

    // Smooth scroll to contact
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    // Highlight the form after scroll
    setTimeout(() => {
      const form = section.querySelector("form");
      if (form) {
        form.classList.remove("form-highlight");
        void (form as HTMLElement).offsetWidth; // force reflow
        form.classList.add("form-highlight");
        setTimeout(() => form.classList.remove("form-highlight"), 2000);
      }
    }, 800);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      {/* LOGO */}
      <a href="#" className={styles.logo}>
        <span className={styles.logoIcon}>⬡</span>
        <span className={styles.logoText}>NEX<span className={styles.accent}>GEN</span></span>
        <span className={styles.logoSub}>DIGITAL</span>
      </a>

      {/* Desktop links */}
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className={styles.link}>{l}</a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a href="#contact" onClick={scrollToContact} className={`btn-primary ${styles.desktopCta}`}>
        Get Started
      </a>

      {/* Burger */}
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.open : ""} />
        <span className={menuOpen ? styles.open : ""} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close">
            ✕
          </button>
          <div className={styles.menuLogo}>
            <span className={styles.logoIcon}>⬡</span>
            NEX<span className={styles.accent}>GEN</span>
          </div>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-primary"
            style={{ marginTop: "0.5rem", fontSize: "0.9rem", padding: "1rem 2.5rem" }}
          >
            Book Free Strategy Call →
          </a>
        </div>
      )}
    </nav>
  );
}

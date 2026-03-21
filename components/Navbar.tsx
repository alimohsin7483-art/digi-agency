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

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      {/* LOGO - always visible on all devices */}
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
      <a href="#contact" className={`btn-primary ${styles.desktopCta}`}>Get Started</a>

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
          {/* Close button top right */}
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close">
            ✕
          </button>

          {/* Logo inside mobile menu */}
          <div className={styles.menuLogo}>
            <span className={styles.logoIcon}>⬡</span>
            NEX<span className={styles.accent}>GEN</span>
          </div>

          {/* Links */}
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
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: "0.5rem", fontSize: "0.9rem", padding: "1rem 2.5rem" }}
          >
            Book Free Strategy Call →
          </a>
        </div>
      )}
    </nav>
  );
}

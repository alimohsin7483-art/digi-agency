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

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoIcon}>⬡</span>
        NEX<span className={styles.accent}>GEN</span>
        <span className={styles.logoSub}>DIGITAL</span>
      </a>

      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className={styles.link}>{l}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="btn-primary">Get Started</a>

      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? styles.open : ""} />
        <span className={menuOpen ? styles.open : ""} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  );
}

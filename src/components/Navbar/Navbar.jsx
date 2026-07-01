import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../icons/SocialIcons';
import styles from './Navbar.module.css';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: GithubIcon, href: 'https://github.com/simplylakshitaa', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/lakshitaa-parashar-030b86313/', label: 'LinkedIn' },
  { icon: LeetcodeIcon, href: 'https://leetcode.com/u/Simplylakshitaa/', label: 'LeetCode' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setHidden(currentY > lastScrollY.current && currentY > 300);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}
      >
        <div className={styles.navInner}>
          <a href="#hero" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className={styles.pacman} aria-hidden="true" />
            <span>LP</span>
          </a>

          <ul className={styles.navLinks}>
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
          <div className={styles.mobileLinks}>
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                className={styles.mobileLink}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className={styles.mobileSocials}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={label}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

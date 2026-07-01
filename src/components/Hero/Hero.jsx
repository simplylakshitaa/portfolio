import { useRef, useState, useEffect } from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../icons/SocialIcons';
import gsap from 'gsap';
import styles from './Hero.module.css';
import { lazy, Suspense } from 'react';

const HeroScene = lazy(() => import('./HeroScene'));

const roles = ['AI Engineer', 'Machine Learning Engineer', 'Full Stack Developer', 'Data Analyst Enthusiast'];

export default function Hero() {
  const heroRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-animate="name"]', { y: 60, opacity: 0, duration: 1, stagger: 0.2 })
        .from('[data-animate="role"]', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('[data-animate="desc"]', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('[data-animate="buttons"]', { y: 20, opacity: 0, duration: 0.7 }, '-=0.3')
        .from('[data-animate="socials"]', { y: 20, opacity: 0, duration: 0.7 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      <div className={styles.content}>
        <div className={styles.nameWrapper}>
          <span className={styles.name} data-animate="name">LAKSHITAA</span>
          <span className={styles.name} data-animate="name">PARASHAR</span>
        </div>

        <div className={styles.roleWrapper} data-animate="role">
          <span className={styles.role}>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.description} data-animate="desc">
          Building intelligent AI products, scalable web applications, and impactful
          digital experiences with a passion for healthcare, cybersecurity, and
          emerging technologies.
        </p>

        <div className={styles.buttons} data-animate="buttons">
          <button
            className={styles.btnPrimary}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <ArrowDown size={16} />
          </button>
          <a href="/resume.pdf" download className={styles.btnOutline}>
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className={styles.socials} data-animate="socials">
          <a href="https://github.com/simplylakshitaa" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/lakshitaa-parashar-030b86313/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://leetcode.com/u/Simplylakshitaa/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LeetCode">
            <LeetcodeIcon size={20} />
          </a>
        </div>
      </div>

      <div className={styles.sceneContainer}>
        <Suspense fallback={<div className={styles.loadingFallback}><div className={styles.loadingCircle} /></div>}>
          <HeroScene />
        </Suspense>
      </div>
    </section>
  );
}

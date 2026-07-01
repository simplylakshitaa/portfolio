import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../icons/SocialIcons';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/simplylakshitaa' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lakshitaa-parashar-030b86313/' },
  { icon: LeetcodeIcon, label: 'LeetCode', href: 'https://leetcode.com/u/Simplylakshitaa/' },
  { icon: Mail, label: 'Email', href: 'mailto:lakshitaaparashar@gmail.com', isLucide: true },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.gradientBorder} />
      <div className={styles.content}>
        <div className={styles.col}>
          <div className={styles.logo}>LP</div>
          <p className={styles.tagline}>
            Building intelligent software with beautiful experiences.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Quick Links</h4>
          <div className={styles.linkList}>
            {quickLinks.map(({ label, id }) => (
              <button key={id} className={styles.link} onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.heading}>Connect</h4>
          <div className={styles.socialList}>
            {socialLinks.map(({ icon: Icon, label, href, isLucide }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                <Icon size={isLucide ? 16 : 14} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2026 Lakshitaa Parashar. Crafted with <Heart size={14} className={styles.heart} /> and React.
        </p>
        <div className={styles.pellets}>
          <span className={styles.pellet} />
          <span className={styles.pellet} />
          <span className={styles.pellet} />
          <span className={styles.pellet} />
        </div>
      </div>
    </footer>
  );
}

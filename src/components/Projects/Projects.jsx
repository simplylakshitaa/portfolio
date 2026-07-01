import { motion } from 'framer-motion';
import { GithubIcon } from '../icons/SocialIcons';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Retro VM+',
    desc: 'A Rust & Python-powered cybersecurity simulator blending gamification with real-world ethical hacking. Features a dual-boot mode, hacker terminal, Kali Linux VM via QEMU, phishing simulator, ML-based network scanner, and embedded games.',
    tech: ['Rust', 'Python', 'QEMU', 'Flask', 'scikit-learn', 'XGBoost', 'Ollama'],
    github: 'https://github.com/simplylakshitaa/Retro-VM-',
    gradient: 'linear-gradient(135deg, #0F2027 0%, #2C5364 50%, #00FF41 100%)',
  },
  {
    title: 'CollabVerse',
    desc: 'An AI-powered campus skill network that maps student GitHub activity into an interactive D3.js social graph. Suggests ideal hackathon teammates using skill embeddings and GPT-4o analysis. Think LinkedIn + GitHub, but for campus.',
    tech: ['React', 'TypeScript', 'FastAPI', 'D3.js', 'GPT-4o', 'Sentence Transformers', 'SQLite'],
    github: 'https://github.com/simplylakshitaa/CollabVerse',
    gradient: 'linear-gradient(135deg, #A34FFF 0%, #FF4F8A 100%)',
  },
  {
    title: 'Confidence Catalyst',
    desc: 'A web platform helping introverts and socially anxious users build confidence through Sass Mode (witty comebacks), Talk Dojo (speech practice via Google STT), motivational boosts, and a Chill Chamber for relaxation.',
    tech: ['Python', 'Flask', 'Google Speech-to-Text API', 'SQLite', 'Tailwind CSS'],
    github: 'https://github.com/simplylakshitaa/Confidence-Catalyst',
    gradient: 'linear-gradient(135deg, #FF8C00 0%, #FF4FA3 100%)',
  },
  {
    title: 'CyberGuard',
    desc: 'A cybersecurity web app with secure bcrypt authentication, TOTP-based 2FA, automated brute-force IP blocking, geo-location anomaly detection, dynamic CyberTrust Score, and a real-time admin security dashboard.',
    tech: ['Python', 'Flask', 'MySQL', 'bcrypt', 'pyotp', 'Chart.js'],
    github: 'https://github.com/simplylakshitaa/CyberGuard',
    gradient: 'linear-gradient(135deg, #2FBE71 0%, #4FA3FF 100%)',
  },
  {
    title: 'Women Safety App',
    desc: 'A discreet Android safety app disguised as a calculator. Triggers emergency mode via "505" or voice command "Yo" — auto-dials 1091 helpline, sends live location + SOS to trusted contacts, and provides self-defense resources.',
    tech: ['Firebase', 'Google Maps API', 'Google Speech-to-Text', 'Android'],
    github: 'https://github.com/simplylakshitaa/Women_Safety_Decoy_Mode_App',
    gradient: 'linear-gradient(135deg, #FF4FA3 0%, #FF824F 100%)',
  },
  {
    title: 'E-Commerce Sales Analytics',
    desc: 'End-to-end data analytics project on the Olist Brazilian E-Commerce Dataset. Cleans data with Pandas, runs SQL analysis for revenue trends and product performance, and visualizes insights in an interactive Power BI dashboard.',
    tech: ['Python', 'Pandas', 'SQL', 'Power BI', 'MySQL'],
    github: 'https://github.com/simplylakshitaa/ecommerce-sales-analytics',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #4FA3FF 100%)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSubtitle}>Things I&apos;ve built</p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          >
            <div className={styles.banner} style={{ background: project.gradient }}>
              <div className={styles.bannerContent}>
                <h3 className={styles.bannerTitle}>{project.title}</h3>
              </div>
            </div>

            <div className={styles.body}>
              <p className={styles.desc}>{project.desc}</p>

              <div className={styles.techRow}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techPill}>{t}</span>
                ))}
              </div>

              <div className={styles.actions}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                  <GithubIcon size={15} />
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

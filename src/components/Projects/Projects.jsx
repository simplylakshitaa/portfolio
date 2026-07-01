import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../icons/SocialIcons';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'MedGuard AI',
    desc: 'An intelligent healthcare platform leveraging LLMs, RAG pipelines, and FastAPI to revolutionize medical report analysis, OCR processing, and AI-assisted diagnosis support.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'LLMs', 'RAG', 'OCR'],
    github: 'https://github.com/simplylakshitaa',
    gradient: 'linear-gradient(135deg, #FF4FA3 0%, #7B2FBE 100%)',
    featured: true,
  },
  {
    title: 'OrganEase',
    desc: '🥇 Winner of Hack-The-Den — State-level Hackathon. An organ donation management platform that streamlines organ matching and allocation. Won 1st Prize among 50+ finalist teams.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'ML'],
    github: 'https://github.com/simplylakshitaa',
    gradient: 'linear-gradient(135deg, #FFD84D 0%, #FF6B35 100%)',
    featured: true,
  },
  {
    title: 'AI Digital Safety Dashboard',
    desc: 'Built for the Economic Times Hackathon — a comprehensive dashboard for monitoring and analyzing digital safety metrics using AI-powered threat detection.',
    tech: ['Python', 'React', 'TensorFlow', 'D3.js', 'FastAPI'],
    github: 'https://github.com/simplylakshitaa',
    gradient: 'linear-gradient(135deg, #4FA3FF 0%, #2FBEC5 100%)',
  },
  {
    title: 'CollabVerse',
    desc: 'An AI-powered campus collaboration platform enabling students to connect, share resources, find project partners, and collaborate with intelligent matching.',
    tech: ['React', 'Firebase', 'OpenAI API', 'Node.js', 'WebSocket'],
    github: 'https://github.com/simplylakshitaa',
    gradient: 'linear-gradient(135deg, #A34FFF 0%, #FF4F8A 100%)',
  },
  {
    title: 'CyberGuard',
    desc: 'A comprehensive cybersecurity authentication platform featuring multi-factor authentication, threat monitoring, and real-time security analytics.',
    tech: ['Python', 'Flask', 'React', 'JWT', 'OAuth', 'Redis'],
    github: 'https://github.com/simplylakshitaa',
    gradient: 'linear-gradient(135deg, #2FBE71 0%, #4FA3FF 100%)',
  },
  {
    title: 'SmartCampus',
    desc: 'A Java desktop application for smart campus management — handling student records, course scheduling, attendance tracking, and resource allocation.',
    tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    github: 'https://github.com/simplylakshitaa',
    gradient: 'linear-gradient(135deg, #FF824F 0%, #FFD84D 100%)',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
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
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className={styles.banner} style={{ background: project.gradient }}>
              <div className={styles.bannerContent}>
                {project.featured && <span className={styles.featuredBadge}>⭐ Featured</span>}
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
                  GitHub
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

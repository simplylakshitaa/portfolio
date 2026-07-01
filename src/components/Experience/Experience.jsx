import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'AI & ML Intern',
    company: 'HCLTech',
    period: 'June 2026 – July 2026',
    description: 'Worked on MedGuard AI — an intelligent healthcare platform leveraging LLMs, RAG pipelines, and advanced ML models to revolutionize medical report analysis and AI-assisted diagnosis.',
    tags: ['Python', 'LLMs', 'RAG', 'FastAPI', 'Machine Learning'],
    current: false,
  },
  {
    role: 'Web Development Intern',
    company: 'Hoctra',
    period: 'October 2025',
    description: 'Built responsive web applications, contributed to frontend architecture decisions, and collaborated with cross-functional teams to deliver polished user-facing products.',
    tags: ['React', 'CSS', 'JavaScript', 'REST APIs'],
    current: false,
  },
  {
    role: 'Webmaster',
    company: 'IEEE SB JIIT',
    period: 'June 2026 – Present',
    description: 'Managing and developing the official IEEE Student Branch website, ensuring a seamless digital presence and building interactive web experiences for the student community.',
    tags: ['React', 'JavaScript', 'Web Development', 'UI/UX'],
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.header}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My professional journey
        </motion.p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineLine} />
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={styles.entry}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className={styles.dot}>
              {exp.current && <div className={styles.dotInner} />}
            </div>
            <div className={styles.card}>
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={`${styles.period} ${exp.current ? styles.periodCurrent : ''}`}>
                    {exp.current && <span className={styles.liveIndicator} />}
                    {exp.period}
                  </span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

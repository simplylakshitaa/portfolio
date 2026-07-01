import { motion } from 'framer-motion';
import styles from './About.module.css';

const stats = [
  { value: '6+', label: 'Projects Built' },
  { value: '3+', label: 'Hackathon Wins' },
  { value: '2+', label: 'Internships' },
];

const highlights = [
  'Artificial Intelligence & Machine Learning',
  'Full Stack Web Development',
  'Data Analysis & Visualization',
  'Healthcare Technology',
  'Cybersecurity Solutions',
  'Natural Language Processing',
];

const paragraphs = [
  "I'm Lakshitaa Parashar, a Computer Science student with a deep passion for Artificial Intelligence, Machine Learning, Full Stack Development, and Data Analytics. I thrive at the intersection of cutting-edge technology and real-world impact — turning raw data into actionable insights and complex ideas into elegant products.",
  "From building AI-powered healthcare platforms with LLMs and RAG pipelines to crafting cybersecurity dashboards and data-driven analytics tools, I focus on creating secure, scalable, and user-centric applications. I'm equally comfortable training ML models, analyzing datasets, and shipping production-ready web apps.",
  "Beyond code, I serve as Webmaster at IEEE SB JIIT, actively compete in hackathons (with multiple wins under my belt), and continuously explore emerging technologies in NLP, computer vision, and generative AI. I believe great software sits at the intersection of technical excellence and beautiful design.",
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.header}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get to know me better
        </motion.p>
      </div>

      <div className={styles.grid}>
        <div className={styles.textColumn}>
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className={styles.paragraph}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            className={styles.highlights}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className={styles.highlightsTitle}>What I&apos;m passionate about</h4>
            <div className={styles.highlightsList}>
              {highlights.map((h) => (
                <span key={h} className={styles.highlightPill}>{h}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className={styles.statsColumn}>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className={styles.statCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className={styles.statAccent} />
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

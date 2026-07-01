import { motion } from 'framer-motion';
import styles from './Hackathons.module.css';

const hackathons = [
  { name: 'Hack-The-Den', result: '🥇 1st Place', project: 'OrganEase', year: '2025', color: '#FFD84D' },
  { name: 'Smart India Hackathon', result: '✅ Qualified', project: 'Digital Safety', year: '2025', color: '#2FBE71' },
  { name: 'HackStreet 3.0', result: '🥉 3rd Position', project: 'Tech Innovation', year: '2025', color: '#FF824F' },
  { name: "Hackin' Winters", result: '⭐ Special Category', project: 'AI Solution', year: '2024', color: '#FF4FA3' },
];

export default function Hackathons() {
  return (
    <section id="hackathons" className={styles.hackathons}>
      <div className={styles.header}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hackathon Journey
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Competing, building, and winning
        </motion.p>
      </div>

      <div className={styles.scrollContainer}>
        {hackathons.map((h, i) => (
          <motion.div
            key={h.name}
            className={styles.card}
            style={{ '--card-color': h.color }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span
              className={styles.badge}
              style={{ background: `${h.color}18`, color: h.color, borderColor: `${h.color}30` }}
            >
              {h.result}
            </span>
            <h3 className={styles.name}>{h.name}</h3>
            <p className={styles.project}>
              <span className={styles.projectLabel}>Project: </span>
              {h.project}
            </p>
            <p className={styles.year}>{h.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

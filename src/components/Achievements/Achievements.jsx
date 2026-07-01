import { motion } from 'framer-motion';
import styles from './Achievements.module.css';

const achievements = [
  {
    icon: '🥇',
    title: '1st Place — Hack-The-Den',
    subtitle: 'State-Level Hackathon',
    desc: 'Won first prize with OrganEase among 50+ finalist teams at the state-level hackathon.',
    accent: '#FFD84D',
  },
  {
    icon: '🏆',
    title: 'SIH Qualifier',
    subtitle: 'Smart India Hackathon',
    desc: "Qualified for the prestigious Smart India Hackathon, India's largest hackathon initiative.",
    accent: '#4FA3FF',
  },
  {
    icon: '🥉',
    title: '3rd Position — HackStreet 3.0',
    subtitle: 'National Hackathon',
    desc: 'Secured 3rd position in HackStreet 3.0 with an innovative tech solution.',
    accent: '#FF824F',
  },
  {
    icon: '⭐',
    title: 'Special Category Winner',
    subtitle: "Hackin' Winters",
    desc: "Won the special category award for outstanding innovation at Hackin' Winters hackathon.",
    accent: '#FF4FA3',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.header}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Milestones along the way
        </motion.p>
      </div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            className={styles.card}
            variants={cardVariants}
            style={{ '--card-accent': item.accent }}
          >
            <div className={styles.cardAccentLine} />
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{item.icon}</span>
              <div className={styles.iconGlow} />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.subtitle}</p>
            <p className={styles.desc}>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

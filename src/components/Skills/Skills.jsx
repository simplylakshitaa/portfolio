import { motion } from 'framer-motion';
import { Monitor, Server, Brain, Database, Cloud, Code, Wrench } from 'lucide-react';
import styles from './Skills.module.css';

const iconMap = { Monitor, Server, Brain, Database, Cloud, Code, Wrench };

const skillCategories = [
  { category: 'Frontend', icon: 'Monitor', skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', icon: 'Server', skills: ['Node.js', 'Express', 'FastAPI', 'Flask', 'Django', 'REST APIs', 'GraphQL'] },
  { category: 'AI / ML', icon: 'Brain', skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'LLMs', 'RAG', 'NLP', 'OpenAI API'] },
  { category: 'Databases', icon: 'Database', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'] },
  { category: 'DevOps', icon: 'Cloud', skills: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Vercel', 'Linux'] },
  { category: 'Programming', icon: 'Code', skills: ['Python', 'JavaScript', 'Java', 'C++', 'TypeScript', 'SQL'] },
  { category: 'Tools', icon: 'Wrench', skills: ['VS Code', 'Figma', 'Postman', 'Jupyter', 'Git'] },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <p className={styles.sectionSubtitle}>Technologies I work with</p>
      </div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {skillCategories.map(({ category, icon, skills }) => {
          const IconComp = iconMap[icon];
          return (
            <motion.div key={category} className={styles.card} variants={cardVariants}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <IconComp size={22} color="#FF4FA3" />
                </div>
                <h3 className={styles.categoryName}>{category}</h3>
              </div>
              <div className={styles.skillsList}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

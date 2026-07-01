import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../icons/SocialIcons';
import styles from './Contact.module.css';

const contactLinks = [
  { icon: Mail, label: 'lakshitaaparashar@gmail.com', href: 'mailto:lakshitaaparashar@gmail.com', isLucide: true },
  { icon: GithubIcon, label: 'github.com/simplylakshitaa', href: 'https://github.com/simplylakshitaa' },
  { icon: LinkedinIcon, label: 'Lakshitaa Parashar', href: 'https://www.linkedin.com/in/lakshitaa-parashar-030b86313/' },
  { icon: LeetcodeIcon, label: 'Simplylakshitaa', href: 'https://leetcode.com/u/Simplylakshitaa/' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`https://mail.google.com/mail/?view=cm&to=lakshitaaparashar@gmail.com&su=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionSubtitle}>Let&apos;s create something amazing together</p>
      </div>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.leftColumn}>
          <h3 className={styles.heading}>Let&apos;s Build Something Amazing Together</h3>
          <p className={styles.desc}>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>

          <div className={styles.contactLinks}>
            {contactLinks.map(({ icon: Icon, label, href, isLucide }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Icon size={isLucide ? 20 : 18} />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <a href="/resume.pdf" download="Lakshitaa_Parashar_Resume.pdf" className={styles.resumeBtn}>
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className={styles.rightColumn}>
          {submitted ? (
            <div className={styles.successMessage}>
              <CheckCircle size={48} color="#FF4FA3" />
              <p>Thank you! I&apos;ll get back to you soon. ✨</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.input}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className={styles.input}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                className={styles.textarea}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button type="submit" className={styles.submitBtn} disabled={sending}>
                <Send size={18} />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

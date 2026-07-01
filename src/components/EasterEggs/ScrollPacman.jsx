import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './EasterEggs.module.css';

export default function ScrollPacman() {
  const [yPos, setYPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef(null);

  const handleScroll = useCallback(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    const progress = window.scrollY / maxScroll;
    setYPos(progress * (window.innerHeight - 60));
    setVisible(true);

    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), 1500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimer.current);
    };
  }, [handleScroll]);

  return (
    <div
      className={`${styles.scrollPacman} ${visible ? styles.scrollPacmanVisible : styles.scrollPacmanHidden}`}
      style={{ top: `${yPos}px` }}
    >
      <div className={styles.scrollTrail}>
        <span className={styles.scrollDot} />
        <span className={styles.scrollDot} />
        <span className={styles.scrollDot} />
        <div className={styles.scrollPac} />
      </div>
    </div>
  );
}

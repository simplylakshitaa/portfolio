import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './EasterEggs.module.css';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

export default function KonamiCode() {
  const [activated, setActivated] = useState(false);
  const keysRef = useRef([]);

  const handleKey = useCallback((e) => {
    keysRef.current = [...keysRef.current, e.key].slice(-10);
    if (keysRef.current.length === 10 && keysRef.current.every((k, i) => k === KONAMI[i])) {
      setActivated(true);
      keysRef.current = [];
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (activated) {
      const timer = setTimeout(() => setActivated(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [activated]);

  if (!activated) return null;

  return (
    <div className={styles.konamiOverlay} onClick={() => setActivated(false)}>
      <p className={styles.konamiText}>🎮 You found the secret!</p>
      <div className={styles.konamiScene}>
        <div className={styles.konamiDots}>
          {[...Array(8)].map((_, i) => (
            <span key={i} className={styles.konamiDot} style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        <div className={styles.konamiPacman} />
      </div>
    </div>
  );
}

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './EasterEggs.module.css';

export default function WakaWaka() {
  const [triggered, setTriggered] = useState(false);
  const bufferRef = useRef('');

  const handleKey = useCallback((e) => {
    if (e.key.length === 1) {
      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-8);
      if (bufferRef.current === 'wakawaka') {
        setTriggered(true);
        bufferRef.current = '';
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (triggered) {
      const timer = setTimeout(() => setTriggered(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [triggered]);

  if (!triggered) return null;

  return (
    <div className={styles.wakaContainer}>
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className={styles.wakaDot}
          style={{ left: `${15 + i * 12}%`, top: '50%', transform: 'translateY(-50%)' }}
        />
      ))}
      <div className={styles.wakaPacman} />
    </div>
  );
}

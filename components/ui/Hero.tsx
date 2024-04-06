// components/Hero.tsx
import React from 'react';
import styles from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Main Title</h1>
      <h2 className={styles.subtitle}>Sub Title</h2>
    </section>
  );
};

export default Hero;

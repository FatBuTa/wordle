import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Puzzle Games
      </h1>

      <p className={styles.description}>
        Which game?
      </p>

      <div data-cy="games" className={styles.grid}>
        <Link href="/wordle" data-cy="wordle">
          <div className={styles.card}>
            <h2>WORDLE &rarr;</h2>
            <p>Guess daily word</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home

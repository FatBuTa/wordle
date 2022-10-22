import { useState, useMemo, useEffect } from 'react';
import type { NextPage } from 'next';

import * as WordleService from '../services/wordle';
import Keyboard from '../components/keyboard';
import styles from '../styles/Wordle.module.css';

const MIN_LENGTH = 5;
const MIN_LEVEL = 1;
const MODE = {
  'EASY': 'EASY',
  'HARD': 'HARD',
};

const Wordle: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(MIN_LEVEL);
  const [mode, setMode] = useState<string>(MODE.EASY);
  const emptyWord = useMemo(() => new Array(MIN_LENGTH + level - 1).fill(''), [level]);
  const [word, setWord] = useState<Array<string>>([]);
  const displayWord = [...word, ...emptyWord].slice(0, MIN_LENGTH + level - 1);
  const [checkWord, setCheckWord] = useState<Array<WordleService.Result>>([]);

  useEffect(() => {
    if (checkWord.length >= MIN_LENGTH && checkWord?.every((c) => c.result === 'correct')) {
      setTimeout(() => {
        if (confirm('Congratulation! Do you want to try the next level?')) {
          setLevel(level + 1);
          setWord([]);
          setCheckWord([]);
        }
      }, 500);
    }
  }, [checkWord]);

  const guessWord = (word: string) => {
    setLoading(true);
    WordleService.guessDailyWord(word, MIN_LENGTH + level - 1)
      .then((res) => {
        setCheckWord([...res]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const onInput: (key: string) => void = (key) => {
    switch(key) {
      case 'del':
        if (word.length === 0) return;
        word.pop();
        setWord([...word]);
        break;
      case 'enter':
        if (word.length !== MIN_LENGTH + level -1) return;
        guessWord(word.join(''));
        break;
      default:
        if (word.length >= MIN_LENGTH + level - 1) return;
        word.push(key);
        setWord([...word]);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        {Object.entries(MODE).map(([key, label]) => <button key={key} className={`${styles.difficultyButton} ${key === mode ? styles.active : ''}`} onClick={() => setMode(key)}>{label}</button>)}
      </div>
      <div className={styles.row}>
        {displayWord?.map((char, index) => {
          const check = (mode === MODE.EASY && char === checkWord?.[index]?.guess) && checkWord?.[index]?.result;
          let className = check ? `${styles.rowLetter} ${styles[`letter-${check}`]}` : `${styles.rowLetter}`;
          return <div key={char + index} className={className}>
            {char}
          </div>
        })}
      </div>
      <div className={styles.gameKeyboard}>
        <Keyboard loading={loading} onSelectKey={onInput} />
      </div>
      <div className={styles.headline}>
        <h1 className={styles.headlineTitle}>Wordle Game: Guess the Hidden Word</h1>
        <h2 className={styles.headlineText}>The rules are very simple: You need to guess the hidden words. To get started, just type any word. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word?</h2>
        <h2 className={styles.headlineText}>HARD LEVEL will remove the color</h2>
      </div>
    </div>
  );
}

export default Wordle;

import { FC } from 'react';
import styles from './index.module.css';

type Props = {
  loading: boolean;
  onSelectKey: (key: string) => void;
};

const Keyboard: FC<Props> = ({ loading, onSelectKey }) => {

  return (
    <>
      {loading && <div className={styles.overlayInner}>
          <div className={styles.overlayContent}><span className={styles.spinner} /></div>
        </div>}
      <div className={styles.gameKeyboardRow}>
        <button onClick={() => onSelectKey('q')} className={styles.gameKeyboardButton}>q</button>
        <button onClick={() => onSelectKey('w')} className={styles.gameKeyboardButton}>w</button>
        <button onClick={() => onSelectKey('e')} className={styles.gameKeyboardButton}>e</button>
        <button onClick={() => onSelectKey('r')} className={styles.gameKeyboardButton}>r</button>
        <button onClick={() => onSelectKey('t')} className={styles.gameKeyboardButton}>t</button>
        <button onClick={() => onSelectKey('y')} className={styles.gameKeyboardButton}>y</button>
        <button onClick={() => onSelectKey('u')} className={styles.gameKeyboardButton}>u</button>
        <button onClick={() => onSelectKey('i')} className={styles.gameKeyboardButton}>i</button>
        <button onClick={() => onSelectKey('o')} className={styles.gameKeyboardButton}>o</button>
        <button onClick={() => onSelectKey('p')} className={styles.gameKeyboardButton}>p</button>
      </div>
      <div className={styles.gameKeyboardRow}>
        <button onClick={() => onSelectKey('a')} className={styles.gameKeyboardButton}>a</button>
        <button onClick={() => onSelectKey('s')} className={styles.gameKeyboardButton}>s</button>
        <button onClick={() => onSelectKey('d')} className={styles.gameKeyboardButton}>d</button>
        <button onClick={() => onSelectKey('f')} className={styles.gameKeyboardButton}>f</button>
        <button onClick={() => onSelectKey('g')} className={styles.gameKeyboardButton}>g</button>
        <button onClick={() => onSelectKey('h')} className={styles.gameKeyboardButton}>h</button>
        <button onClick={() => onSelectKey('j')} className={styles.gameKeyboardButton}>j</button>
        <button onClick={() => onSelectKey('k')} className={styles.gameKeyboardButton}>k</button>
        <button onClick={() => onSelectKey('l')} className={styles.gameKeyboardButton}>l</button>
      </div>
      <div className={styles.gameKeyboardRow}>
        <button onClick={() => onSelectKey('del')} className={`${styles.gameKeyboardButton} ${styles.gameKeyboardButtonWide}`}>del</button>
        <button onClick={() => onSelectKey('z')} className={styles.gameKeyboardButton}>z</button>
        <button onClick={() => onSelectKey('x')} className={styles.gameKeyboardButton}>x</button>
        <button onClick={() => onSelectKey('c')} className={styles.gameKeyboardButton}>c</button>
        <button onClick={() => onSelectKey('v')} className={styles.gameKeyboardButton}>v</button>
        <button onClick={() => onSelectKey('b')} className={styles.gameKeyboardButton}>b</button>
        <button onClick={() => onSelectKey('n')} className={styles.gameKeyboardButton}>n</button>
        <button onClick={() => onSelectKey('m')} className={styles.gameKeyboardButton}>m</button>
        <button onClick={() => onSelectKey('enter')} className={`${styles.gameKeyboardButton} ${styles.gameKeyboardButtonWide}`}>Enter</button>
      </div>
    </>
  );
};

export default Keyboard;

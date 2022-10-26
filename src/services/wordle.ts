import axios from 'axios';

export interface Result {
  slot: number;
  guess: string;
  result: 'absent' | 'present' | 'correct';
}

export async function guessDailyWord(guessWord: string, size: number = 5): Promise<Array<Result>> {
  try {
    const result = await axios.get(`https://wordle.votee.dev:8000/daily?guess=${guessWord}&size=${size}`);
    if (result && result.data) {
      return result.data;
    }
  } catch (error) {
    console.log('error: ', error);
  }
  return [];
}

export async function guessRandomWord(guessWord: string, size: number, seed: number): Promise<Array<Result>> {
  try {
    const result = await axios.get(`https://wordle.votee.dev:8000/random?guess=${guessWord}&size=${size}&seed=${seed}`);
    if (result && result.data) {
      return result.data;
    }
  } catch (error) {
    console.log('error: ', error);
  }
  return [];
}

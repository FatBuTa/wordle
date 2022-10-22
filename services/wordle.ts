import axios from 'axios';

export interface Result {
  slot: number;
  guess: string;
  result: "absent" | "present" | "correct";
};


export async function guessDailyWord(guessWord: string, size: number): Promise<Array<Result>> {
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

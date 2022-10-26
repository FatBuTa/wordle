// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Result } from '../../services/wordle';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Result>>
) {
  const { guess, size } = req.query;
  const resultWord = 'april'.split('');
  if (!guess || guess?.length !== Number(size)) {
    res.status(400).json([]);
    return;
  }
  const result = (guess as string).split('').map((c: string, index: number): Result => {
    if (resultWord[index] === c) {
      return { slot: index, guess: c, result: 'correct' };
    }
    if (resultWord.findIndex((item: string) => c === item) !== -1) {
      return { slot: index, guess: c, result: 'present' };
    }

    return { slot: index, guess: c, result: 'absent' };
  });
  res.status(200).json(result);
}

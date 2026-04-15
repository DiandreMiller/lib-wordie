const ANSWER_HISTORY_KEY = 'libwordie-answer-history-v1';

export type AnsweredElement = {
  word: string;
  correct: boolean;
  answeredAt: string;
};

export const saveAnsweredElement = (word: string, correct: boolean) => {
  const existing: AnsweredElement[] = JSON.parse(
    localStorage.getItem(ANSWER_HISTORY_KEY) || '[]'
  );

  const latestEntry = existing[0];

  if (latestEntry && latestEntry.word === word && latestEntry.correct === correct) {
    const latestTime = new Date(latestEntry.answeredAt).getTime();
    const now = Date.now();

    if (now - latestTime < 2000) {
      return;
    }
  }

  const updated = [
    { word, correct, answeredAt: new Date().toISOString() },
    ...existing,
  ].slice(0, 10);

  localStorage.setItem(ANSWER_HISTORY_KEY, JSON.stringify(updated));
};

export const getAnsweredElements = (): AnsweredElement[] => {
  return JSON.parse(localStorage.getItem(ANSWER_HISTORY_KEY) || '[]');
};

export const clearAnsweredElements = () => {
  localStorage.removeItem(ANSWER_HISTORY_KEY);
};
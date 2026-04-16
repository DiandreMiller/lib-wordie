import { ELEMENT_DETAILS } from '../assets/data/elementDetails';

export type DailyChemFact = {
  word: string;
  symbol: string;
  atomicNumber: number;
  fact: string;
};

const DAILY_CHEM_FACT_SEEN_KEY = 'libwordie-daily-chem-fact-seen-v1';

const getTodayKey = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const hasSeenDailyChemFactToday = () => {
  return localStorage.getItem(DAILY_CHEM_FACT_SEEN_KEY) === getTodayKey();
};

export const markDailyChemFactSeen = () => {
  localStorage.setItem(DAILY_CHEM_FACT_SEEN_KEY, getTodayKey());
};

export const getDailyChemFact = (): DailyChemFact => {
  const words = Object.keys(ELEMENT_DETAILS).sort();

  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const word = words[dayOfYear % words.length];
  const element = ELEMENT_DETAILS[word];

  return {
    word,
    symbol: element.symbol,
    atomicNumber: element.atomicNumber,
    fact: element.funFact || element.shortFact,
  };
};
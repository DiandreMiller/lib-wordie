const DAILY_SOLVE_STREAK_KEY = 'libwordie-daily-solve-streak-v1';
const LAST_SOLVED_DATE_KEY = 'libwordie-last-solved-date-v1';

const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const getYesterdayString = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, '0');
  const day = String(yesterday.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const updateDailySolveStreak = () => {
  const savedStreak = Number(localStorage.getItem(DAILY_SOLVE_STREAK_KEY) || '0');
  const lastSolvedDate = localStorage.getItem(LAST_SOLVED_DATE_KEY);
  const today = getTodayString();
  const yesterday = getYesterdayString();

  if (lastSolvedDate === today) {
    return savedStreak;
  }

  if (!lastSolvedDate) {
    localStorage.setItem(DAILY_SOLVE_STREAK_KEY, '1');
    localStorage.setItem(LAST_SOLVED_DATE_KEY, today);
    return 1;
  }

  if (lastSolvedDate === yesterday) {
    const nextStreak = savedStreak + 1;
    localStorage.setItem(DAILY_SOLVE_STREAK_KEY, String(nextStreak));
    localStorage.setItem(LAST_SOLVED_DATE_KEY, today);
    return nextStreak;
  }

  localStorage.setItem(DAILY_SOLVE_STREAK_KEY, '1');
  localStorage.setItem(LAST_SOLVED_DATE_KEY, today);
  return 1;
};

export const getDailySolveStreak = () => {
  return Number(localStorage.getItem(DAILY_SOLVE_STREAK_KEY) || '0');
};
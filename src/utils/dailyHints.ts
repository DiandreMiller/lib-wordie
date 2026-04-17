const DAILY_HINTS_KEY = 'libwordie-daily-hints-v1';

type DailyHintsState = {
  remaining: number;
  lastResetDate: string;
};

// Format: YYYY-MM-DD
const getTodayKey = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const getDefaultState = (): DailyHintsState => ({
  remaining: 3,
  lastResetDate: getTodayKey(),
});

export const getDailyHintsState = (): DailyHintsState => {
  const raw = localStorage.getItem(DAILY_HINTS_KEY);

  if (!raw) {
    const fresh = getDefaultState();
    localStorage.setItem(DAILY_HINTS_KEY, JSON.stringify(fresh));
    return fresh;
  }

  try {
    const parsed = JSON.parse(raw) as DailyHintsState;
    const today = getTodayKey();

    // Reset if new day
    if (parsed.lastResetDate !== today) {
      const reset = getDefaultState();
      localStorage.setItem(DAILY_HINTS_KEY, JSON.stringify(reset));
      return reset;
    }

    return parsed;
  } catch {
    const fresh = getDefaultState();
    localStorage.setItem(DAILY_HINTS_KEY, JSON.stringify(fresh));
    return fresh;
  }
};

export const useOneDailyHint = (): DailyHintsState | null => {
  const current = getDailyHintsState();

  if (current.remaining <= 0) {
    return null;
  }

  const updated: DailyHintsState = {
    ...current,
    remaining: current.remaining - 1,
  };

  localStorage.setItem(DAILY_HINTS_KEY, JSON.stringify(updated));
  return updated;
};
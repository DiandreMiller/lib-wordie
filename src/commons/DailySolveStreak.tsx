import { useEffect, useState } from 'react';

const DAILY_SOLVE_STREAK_KEY = 'libwordie-daily-solve-streak-v1';

const getMilestoneType = (streak: number) => {
  const oneYear = 365;
  const fixedMilestones = new Set([5, 30, 50, 100, 200, 300]);

  if (fixedMilestones.has(streak)) return 'experiment';
  if (streak % oneYear === 0) return 'legend';
  if (streak > oneYear && streak % 50 === 0) return 'experiment';

  return null;
};

const getMilestoneEmoji = (streak: number) => {
  const milestoneType = getMilestoneType(streak);

  if (milestoneType === 'legend') return '⚛️';
  if (milestoneType === 'experiment') return '🧪';

  return null;
};

const DailySolveStreak = () => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedStreak = Number(localStorage.getItem(DAILY_SOLVE_STREAK_KEY) || '0');
    setStreak(savedStreak);
  }, []);

  const milestoneEmoji = getMilestoneEmoji(streak);

  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/40 p-4 text-center shadow-lg backdrop-blur-md">
      <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200 sm:text-xs sm:tracking-[0.25em]">
        Solve Streak
      </p>

      <p className="mt-2 text-3xl font-black text-white">
        {streak} {milestoneEmoji && <span>{milestoneEmoji}</span>}
      </p>

      <p className="mt-1 text-xs text-slate-300">
        Consecutive days with a solved puzzle
      </p>
    </div>
  );
};

export default DailySolveStreak;
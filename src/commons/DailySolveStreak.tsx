import { useEffect, useState } from 'react';

const DAILY_SOLVE_STREAK_KEY = 'libwordie-daily-solve-streak-v1';

type Props = {
  refreshKey?: number;
};

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

  return '🧪';
};

const DailySolveStreak = ({ refreshKey = 0 }: Props) => {
  const [streak, setStreak] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const savedStreak = Number(
      localStorage.getItem(DAILY_SOLVE_STREAK_KEY) || '0'
    );
    setStreak(savedStreak);
  }, [refreshKey]);

  const milestoneEmoji = getMilestoneEmoji(streak);

  return (
    <>
      {/* Mobile: compact badge */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-900/80 px-3 py-2 text-white shadow-md backdrop-blur-md md:hidden"
        aria-label="Toggle solve streak"
      >
        <span className="text-sm">{milestoneEmoji}</span>
        <span className="text-sm font-black">{streak}</span>
      </button>

      {/* Mobile: expanded popup */}
      {isExpanded && (
        <div className="absolute right-0 top-12 z-50 w-40 rounded-2xl border border-white/10 bg-slate-900/95 p-3 text-center shadow-xl backdrop-blur-md md:hidden">
          <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">
            Solve Streak
          </p>

          <p className="mt-2 text-2xl font-black text-white">
            {streak} <span>{milestoneEmoji}</span>
          </p>

          <p className="mt-1 text-[11px] leading-4 text-slate-300">
            Consecutive days with a solved puzzle
          </p>

          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="mt-3 rounded-full border border-cyan-300/20 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-200"
          >
            Close
          </button>
        </div>
      )}

      {/* Desktop: always expanded */}
      <div className="hidden rounded-[1.25rem] border border-white/10 bg-slate-900/40 px-4 py-3 text-center shadow-lg backdrop-blur-md md:block">
        <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">
          Solve Streak
        </p>

        <p className="mt-2 text-2xl font-black text-white">
          {streak} <span>{milestoneEmoji}</span>
        </p>

        <p className="mt-1 text-xs text-slate-300">
          Consecutive days with a solved puzzle
        </p>
      </div>
    </>
  );
};

export default DailySolveStreak;
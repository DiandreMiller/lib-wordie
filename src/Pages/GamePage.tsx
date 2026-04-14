import { useEffect, useState } from 'react';
import LibWordie from '../assets/images/LibChemCartoon.png';
import  { PERIODIC_TABLE_ELEMENTS } from '../assets/data/periodicTableElements';

const MAX_GUESSES = 6;
const HOW_TO_PLAY_STORAGE_KEY = 'libwordie-hide-how-to-play-v1';
const GAME_STATS_STORAGE_KEY = 'libwordie-stats-v1';

type GameStats = {
  streak: number;
  wins: number;
  losses: number;
  longestStreak: number;
};

const defaultStats: GameStats = {
  streak: 0,
  wins: 0,
  losses: 0,
  longestStreak: 0,
};

const GamePage = () => {
  const [word, setWord] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [status, setStatus] = useState<'loading' | 'playing' | 'win' | 'loss'>(
    'loading'
  );
  const [showHowToPlayModal, setShowHowToPlayModal] = useState<boolean>(false);
  const [stats, setStats] = useState<GameStats>(defaultStats);

  const generateNewWord = () => {
    const randomIndex = Math.floor(Math.random() * PERIODIC_TABLE_ELEMENTS.length);
    return PERIODIC_TABLE_ELEMENTS[randomIndex].trim().toLowerCase();
  };

  const saveStats = (updatedStats: GameStats) => {
    setStats(updatedStats);
    localStorage.setItem(GAME_STATS_STORAGE_KEY, JSON.stringify(updatedStats));
  };


  useEffect(() => {
    const generatedWord = generateNewWord();
    setWord(generatedWord);
    setStatus('playing');

    const hasDismissedModal = localStorage.getItem(HOW_TO_PLAY_STORAGE_KEY);
    if (!hasDismissedModal) {
      setShowHowToPlayModal(true);
    }

    const savedStats = localStorage.getItem(GAME_STATS_STORAGE_KEY);
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch {
        setStats(defaultStats);
      }
    }
  }, []);

  const handleCloseHowToPlayModal = () => {
    setShowHowToPlayModal(false);
    localStorage.setItem(HOW_TO_PLAY_STORAGE_KEY, 'true');
  };

  const handleOpenHowToPlayModal = () => {
    setShowHowToPlayModal(true);
  };

  const handleSubmit = () => {
    if (status !== 'playing') return;

    const guess = currentGuess.toLowerCase().trim();

    if (guess.length !== word.length) return;

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (guess === word) {
      const updatedStats: GameStats = {
        ...stats,
        streak: stats.streak + 1,
        wins: stats.wins + 1,
        longestStreak: Math.max(stats.longestStreak, stats.streak + 1),
      };

      saveStats(updatedStats);
      setStatus('win');
    } else if (newGuesses.length === MAX_GUESSES) {
      const updatedStats: GameStats = {
        ...stats,
        streak: 0,
        losses: stats.losses + 1,
      };

      saveStats(updatedStats);
      setStatus('loss');
    }
  };

  const handleNewGame = () => {
    const newWord = generateNewWord();
    setWord(newWord);
    setGuesses([]);
    setCurrentGuess('');
    setStatus('playing');
  };

  const getColor = (letter: string, index: number) => {
    if (word[index] === letter) {
      return 'bg-emerald-500 border-emerald-300 text-white';
    }

    if (word.includes(letter)) {
      return 'bg-yellow-300 border-yellow-200 text-slate-950';
    }

    return 'bg-red-500 border-red-300 text-white';
  };

  const getTileClasses = () => {
    if (word.length >= 11) {
      return 'h-9 w-9 text-sm rounded-[0.7rem] sm:h-11 sm:w-11 sm:text-base lg:h-12 lg:w-12 lg:text-lg';
    }

    if (word.length >= 9) {
      return 'h-10 w-10 text-base rounded-[0.75rem] sm:h-12 sm:w-12 sm:text-lg lg:h-14 lg:w-14 lg:text-xl';
    }

    return 'h-12 w-12 text-lg rounded-[0.9rem] sm:h-14 sm:w-14 sm:text-xl lg:h-16 lg:w-16 lg:text-2xl';
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#1e3a5f_0%,_#0f172a_45%,_#020617_100%)] px-4">
        <div className="rounded-[2rem] border border-cyan-300/30 bg-white/10 px-8 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <p className="text-2xl font-bold tracking-wide text-white">
            Loading Chem Lab...
          </p>
        </div>
      </div>
    );
  }

  const tileClasses = getTileClasses();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e3a5f_0%,_#0f172a_45%,_#020617_100%)] px-4 py-8 text-white sm:py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-12 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-[-4rem] top-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {showHowToPlayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/15 bg-slate-900/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-8">
            <button
              onClick={handleCloseHowToPlayModal}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-white/10 text-xl font-bold text-white transition hover:scale-105 hover:bg-white/20"
              aria-label="Close how to play modal"
            >
              ×
            </button>

            <h2 className="text-3xl font-black text-white">How to Play</h2>

            <p className="mt-3 text-base leading-7 text-slate-200">
              Guess the hidden chemistry term in six tries. Each guess must match the
              exact letter count for that round.
            </p>

            <div className="mt-6 space-y-4 text-slate-200">
              <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="mt-1 h-5 w-5 rounded-full border border-emerald-300 bg-emerald-500" />
                <p>
                  <span className="font-bold text-white">Green</span> means the letter
                  is correct and in the right place.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="mt-1 h-5 w-5 rounded-full border border-yellow-200 bg-yellow-300" />
                <p>
                  <span className="font-bold text-white">Yellow</span> means the letter
                  is in the term, but in the wrong place.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="mt-1 h-5 w-5 rounded-full border border-red-300 bg-red-500" />
                <p>
                  <span className="font-bold text-white">Red</span> means there is no
                  reaction — that letter is not in the term.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-400/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Lab Tip
              </p>
              <p className="mt-2 leading-7 text-slate-200">
                Element names can range from 3 to 13 letters, so pay close attention
                to the term length before guessing.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Chem Lab
          </h1>

          <button
            onClick={handleOpenHowToPlayModal}
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-white/10 text-lg font-black text-white shadow-lg transition hover:scale-105 hover:bg-white/20"
            aria-label="Open how to play modal"
            title="How to play"
          >
            ?
          </button>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-[2.5rem] border border-white/15 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8">
            <div className="mb-4 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 sm:text-sm">
                Chemistry Study Mode
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <p className="max-w-xl text-base leading-6 text-slate-200 sm:text-lg">
                    Guess the hidden element name in six tries. Every round gives you
                    a periodic table element between 3 and 13 letters.
                  </p>
                </div>

                <div className="self-start rounded-[1.5rem] border border-cyan-300/25 bg-slate-900/50 px-5 py-4 text-center shadow-lg sm:self-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Term Length
                  </p>
                  <p className="mt-1 text-3xl font-black text-white">{word.length}</p>
                </div>
              </div>

              <div className="mt-3 border-b border-white/10" />
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full overflow-x-auto pb-2">
                <div className="mx-auto flex min-w-max flex-col items-center space-y-3 pt-2">
                  {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
                    const guess = guesses[rowIndex] || '';

                    return (
                      <div key={rowIndex} className="flex justify-center gap-2">
                        {Array.from({ length: word.length }).map((_, colIndex) => {
                          const letter = guess[colIndex] || '';
                          const color = guess
                            ? getColor(letter, colIndex)
                            : 'bg-white/10 border-white/10 text-white';

                          return (
                            <div
                              key={colIndex}
                              className={`flex items-center justify-center border-2 font-black uppercase shadow-md transition-all duration-200 ${tileClasses} ${color}`}
                            >
                              {letter}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>

              {status === 'playing' && (
                <div className="mt-8 w-full max-w-xl">
                  <label
                    htmlFor="guess"
                    className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200"
                  >
                    Enter your guess
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="guess"
                      value={currentGuess}
                      onChange={(e) =>
                        setCurrentGuess(
                          e.target.value.toLowerCase().replace(/[^a-z]/g, '').slice(0, word.length)
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSubmit();
                        }
                      }}
                      maxLength={word.length}
                      className="h-14 flex-1 rounded-[1.25rem] border border-white/15 bg-white/10 px-5 text-lg font-semibold text-white outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/20"
                      placeholder={`Enter ${word.length}-letter element`}
                    />
                    <button
                      onClick={handleSubmit}
                      className="h-14 rounded-[1.25rem] border border-cyan-300 bg-cyan-300 px-8 text-lg font-black text-slate-950 shadow-lg transition hover:scale-[1.02] hover:bg-cyan-200 active:scale-[0.98]"
                    >
                      Run Test
                    </button>
                  </div>
                </div>
              )}

              {status === 'win' && (
                <div className="mt-8 w-full max-w-xl rounded-[1.75rem] border border-emerald-300/40 bg-emerald-500/15 px-6 py-5 text-center shadow-lg">
                  <p className="text-3xl font-black text-emerald-200">
                    Reaction Complete!
                  </p>
                  <p className="mt-2 text-base text-slate-100">
                    Nice work. You guessed{' '}
                    <span className="font-black uppercase text-white">{word}</span>.
                  </p>

                  <button
                    onClick={handleNewGame}
                    className="mt-5 h-12 rounded-[1.25rem] border border-emerald-300 bg-emerald-500 px-6 text-lg font-black text-white shadow-lg transition hover:scale-105 hover:bg-emerald-400"
                  >
                    Start New Experiment
                  </button>
                </div>
              )}

              {status === 'loss' && (
                <div className="mt-8 w-full max-w-xl rounded-[1.75rem] border border-red-300/40 bg-red-500/15 px-6 py-5 text-center shadow-lg">
                  <p className="text-3xl font-black text-red-200">No Match Found</p>
                  <p className="mt-2 text-base text-slate-100">
                    The correct term was{' '}
                    <span className="font-black uppercase text-white">{word}</span>.
                  </p>

                  <button
                    onClick={handleNewGame}
                    className="mt-5 h-12 rounded-[1.25rem] border border-red-300 bg-red-500 px-6 text-lg font-black text-white shadow-lg transition hover:scale-105 hover:bg-red-400"
                  >
                    Try Another Experiment
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <img
                src={LibWordie}
                alt="Chem Lab artwork"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <h2 className="text-2xl font-black text-white">Lab Stats</h2>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Current Streak
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {stats.streak}
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Longest Streak
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {stats.longestStreak}
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Wins
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {stats.wins}
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Losses
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {stats.losses}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-400/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Keep Studying
                </p>
                <p className="mt-2 leading-7 text-slate-200">
                  Build your streak, improve your chemistry vocabulary, and keep stacking
                  successful experiments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
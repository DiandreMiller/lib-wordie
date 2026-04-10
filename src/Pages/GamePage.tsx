import { useEffect, useState } from 'react';
import { generate } from 'random-words';
import LibWordie from '../assets/LibWordie.png';

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
    return generate({
      exactly: 1,
      minLength: 4,
      maxLength: 8,
    })[0]
      .toString()
      .trim()
      .toLowerCase();
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

  console.log('word:', word);

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
      return 'bg-[#6f8f45] border-[#89a95c] text-[#fff8e7]';
    }

    if (word.includes(letter)) {
      return 'bg-[#d3a62f] border-[#e4bb4c] text-[#2f1d0e]';
    }

    return 'bg-[#7a3b2e] border-[#9a5341] text-[#fff8e7]';
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#6b3f1d] px-4">
        <div className="rounded-[2rem] border-2 border-[#d3a62f] bg-[#8b5a2b] px-8 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
          <p
            className="text-2xl font-bold tracking-wide text-[#fff3d4]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Loading Lib Wordie...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6b3f1d] via-[#8a4f1d] to-[#4d2a12] px-4 py-8 text-[#fff3d4] sm:py-10">
      {showHowToPlayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl rounded-[2rem] border-2 border-[#d3a62f]/70 bg-[#8b5a2b] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-8">
            <button
              onClick={handleCloseHowToPlayModal}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#d3a62f] bg-[#6b3f1d] text-xl font-bold text-[#fff8e7] transition hover:scale-105 hover:bg-[#7b471f]"
              aria-label="Close how to play modal"
            >
              ×
            </button>

            <h2
              className="text-3xl font-black text-[#fff8e7]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              How to play
            </h2>

            <p className="mt-3 text-base leading-7 text-[#f7e6bf]">
              Guess the hidden word in six tries. Each guess must match the length of
              the word shown for that round.
            </p>

            <div className="mt-6 space-y-4 text-[#f7e6bf]">
              <div className="flex items-start gap-3 rounded-[1.25rem] bg-[#6b3f1d]/40 p-4">
                <div className="mt-1 h-5 w-5 rounded-full border border-[#89a95c] bg-[#6f8f45]" />
                <p>
                  <span className="font-bold text-[#fff8e7]">Green</span> means the
                  letter is correct and in the right place.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-[1.25rem] bg-[#6b3f1d]/40 p-4">
                <div className="mt-1 h-5 w-5 rounded-full border border-[#e4bb4c] bg-[#d3a62f]" />
                <p>
                  <span className="font-bold text-[#fff8e7]">Yellow</span> means the
                  letter is in the word, but in the wrong place.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-[1.25rem] bg-[#6b3f1d]/40 p-4">
                <div className="mt-1 h-5 w-5 rounded-full border border-[#b46251] bg-[#7a3b2e]" />
                <p>
                  <span className="font-bold text-[#fff8e7]">Red</span> means the
                  letter is not in the word.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border-2 border-[#d9b15f]/40 bg-[#6b3f1d]/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74]">
                Tip
              </p>
              <p className="mt-2 leading-7 text-[#f7e6bf]">
                Start with common vowels and consonants, then use the color clues to
                narrow the word down.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
          <h1
            className="text-6xl font-black tracking-tight text-[#fff8e7] sm:text-7xl"
            style={{
              fontFamily: 'Playfair Display, serif',
              textShadow: '3px 3px 0px #4d2a12, 6px 6px 0px rgba(0,0,0,0.25)',
            }}
          >
            Lib Wordie
          </h1>

          <button
            onClick={handleOpenHowToPlayModal}
            className="mt-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d3a62f] bg-[#8b5a2b]/90 text-lg font-black text-[#fff8e7] shadow-lg transition hover:scale-105 hover:bg-[#9a6330]"
            aria-label="Open how to play modal"
            title="How to play"
          >
            ?
          </button>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-[2.5rem] border-2 border-[#d3a62f]/60 bg-[#8b5a2b]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            <div className="mb-4 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74] sm:text-sm">
                Vintage Puzzle Game
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <p className="max-w-xl text-base leading-6 text-[#f7e6bf] sm:text-lg">
                    Guess the hidden word in six tries. Every round gives you a new
                    word between 4 and 8 letters.
                  </p>
                </div>

                <div className="self-start rounded-[1.5rem] border-2 border-[#d3a62f] bg-[#6b3f1d]/70 px-5 py-4 text-center shadow-lg sm:self-auto">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                    Word Length
                  </p>
                  <p className="mt-1 text-3xl font-black text-[#fff8e7]">
                    {word.length}
                  </p>
                </div>
              </div>

              <div className="mt-3 border-b border-[#d9b15f]/30" />
            </div>

            <div className="flex flex-col items-center">
              <div className="space-y-3 pt-2">
                {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
                  const guess = guesses[rowIndex] || '';

                  return (
                    <div key={rowIndex} className="flex justify-center gap-2 sm:gap-3">
                      {Array.from({ length: word.length }).map((_, colIndex) => {
                        const letter = guess[colIndex] || '';
                        const color = guess
                          ? getColor(letter, colIndex)
                          : 'bg-[#a56a35]/50 border-[#d8b56a]/35 text-[#fff3d4]';

                        return (
                          <div
                            key={colIndex}
                            className={`flex h-14 w-14 items-center justify-center rounded-[1rem] border-2 text-xl font-black uppercase shadow-md transition-all duration-200 sm:h-16 sm:w-16 sm:text-2xl ${color}`}
                          >
                            {letter}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {status === 'playing' && (
                <div className="mt-8 w-full max-w-xl">
                  <label
                    htmlFor="guess"
                    className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#f3cf74]"
                  >
                    Enter your guess
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="guess"
                      value={currentGuess}
                      onChange={(e) =>
                        setCurrentGuess(
                          e.target.value.toLowerCase().slice(0, word.length)
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSubmit();
                        }
                      }}
                      maxLength={word.length}
                      className="h-14 flex-1 rounded-[1.25rem] border-2 border-[#d9b15f] bg-[#fff3d4] px-5 text-lg font-semibold text-[#4d2a12] outline-none transition placeholder:text-[#8b5a2b]/70 focus:border-[#f3cf74] focus:ring-4 focus:ring-[#f3cf74]/20"
                      placeholder={`Enter ${word.length}-letter word`}
                    />
                    <button
                      onClick={handleSubmit}
                      className="h-14 rounded-[1.25rem] border-2 border-[#f3cf74] bg-[#d3a62f] px-8 text-lg font-black text-[#3a210f] shadow-lg transition hover:scale-[1.02] hover:bg-[#e0b43a] active:scale-[0.98]"
                    >
                      Guess
                    </button>
                  </div>
                </div>
              )}

              {status === 'win' && (
                <div className="mt-8 w-full max-w-xl rounded-[1.75rem] border-2 border-[#89a95c] bg-[#6f8f45]/20 px-6 py-5 text-center shadow-lg">
                  <p className="text-3xl font-black text-[#e7f2c8]">You won!</p>
                  <p className="mt-2 text-base text-[#fff3d4]">
                    Beautiful work. You guessed{' '}
                    <span className="font-black uppercase text-[#fff8e7]">{word}</span>.
                  </p>

                  <button
                    onClick={handleNewGame}
                    className="mt-5 h-12 rounded-[1.25rem] border-2 border-[#89a95c] bg-[#6f8f45] px-6 text-lg font-black text-[#fff8e7] shadow-lg transition hover:scale-105 hover:bg-[#7fa255]"
                  >
                    Play Again
                  </button>
                </div>
              )}

              {status === 'loss' && (
                <div className="mt-8 w-full max-w-xl rounded-[1.75rem] border-2 border-[#b46251] bg-[#7a3b2e]/30 px-6 py-5 text-center shadow-lg">
                  <p className="text-3xl font-black text-[#ffd8cc]">You lost</p>
                  <p className="mt-2 text-base text-[#fff3d4]">
                    The word was{' '}
                    <span className="font-black uppercase text-[#fff8e7]">{word}</span>.
                  </p>

                  <button
                    onClick={handleNewGame}
                    className="mt-5 h-12 rounded-[1.25rem] border-2 border-[#b46251] bg-[#7a3b2e] px-6 text-lg font-black text-[#fff8e7] shadow-lg transition hover:scale-105 hover:bg-[#8c4a3b]"
                  >
                    Try Another Word
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[2.5rem] border-2 border-[#d3a62f]/60 bg-[#8b5a2b]/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src={LibWordie}
                alt="Vintage Lib Wordie artwork"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="rounded-[2rem] border-2 border-[#d3a62f]/60 bg-[#8b5a2b]/90 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
              <h2
                className="text-2xl font-black text-[#fff8e7]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Your Stats
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-[1.25rem] bg-[#6b3f1d]/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                    Current Streak
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#fff8e7]">
                    {stats.streak}
                  </p>
                </div>

                <div className="rounded-[1.25rem] bg-[#6b3f1d]/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                    Longest Streak
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#fff8e7]">
                    {stats.longestStreak}
                  </p>
                </div>

                <div className="rounded-[1.25rem] bg-[#6b3f1d]/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                    Wins
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#fff8e7]">
                    {stats.wins}
                  </p>
                </div>

                <div className="rounded-[1.25rem] bg-[#6b3f1d]/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                    Losses
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#fff8e7]">
                    {stats.losses}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border-2 border-[#d9b15f]/40 bg-[#6b3f1d]/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74]">
                  Keep Going
                </p>
                <p className="mt-2 leading-7 text-[#f7e6bf]">
                  Build your streak, beat your best run, and keep stacking wins.
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
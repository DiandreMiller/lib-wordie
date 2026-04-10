import { useState, useEffect } from 'react';
import { generate } from 'random-words';

const MAX_GUESSES = 6;

const GamePage = () => {
  const [word, setWord] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [status, setStatus] = useState<'loading' | 'playing' | 'win' | 'loss'>('loading');

  useEffect(() => {
    const generatedWord = generate({
      exactly: 1,
      minLength: 4,
      maxLength: 8,
    })[0]
      .toString()
      .trim()
      .toLowerCase();

    console.log('generated word:', generatedWord);
    setWord(generatedWord);
    setStatus('playing');
  }, []);

  const handleSubmit = () => {
    if (status !== 'playing') return;

    const guess = currentGuess.toLowerCase().trim();

    if (guess.length !== word.length) return;

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (guess === word) {
      setStatus('win');
    } else if (newGuesses.length === MAX_GUESSES) {
      setStatus('loss');
    }
  };

  const getColor = (letter: string, index: number) => {
    if (word[index] === letter) {
      return 'bg-emerald-500 border-emerald-400 text-white shadow-emerald-500/30';
    }

    if (word.includes(letter)) {
      return 'bg-amber-400 border-amber-300 text-slate-900 shadow-amber-400/30';
    }

    return 'bg-rose-500 border-rose-400 text-white shadow-rose-500/30';
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-6 shadow-2xl">
          <p className="text-lg font-semibold tracking-wide text-white animate-pulse">
            Loading Lib Wordie...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Word Puzzle
              </p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Lib Wordie
              </h1>
              <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
                Guess the hidden word in six tries. Every round gives you a new word between{' '}
                <span className="font-semibold text-cyan-300">4 and 8 letters</span>.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100 shadow-lg">
              <p className="font-semibold">Word Length</p>
              <p className="text-xl font-black tracking-wide">{word.length}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col items-center">
              <div className="space-y-3">
                {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
                  const guess = guesses[rowIndex] || '';

                  return (
                    <div
                      key={rowIndex}
                      className="flex justify-center gap-2"
                    >
                      {Array.from({ length: word.length }).map((_, colIndex) => {
                        const letter = guess[colIndex] || '';
                        const color = guess
                          ? getColor(letter, colIndex)
                          : 'bg-white/5 border-white/10 text-white';

                        return (
                          <div
                            key={colIndex}
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-xl font-black uppercase shadow-lg transition-all duration-200 sm:h-16 sm:w-16 sm:text-2xl ${color}`}
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
                <div className="mt-8 w-full max-w-md">
                  <label
                    htmlFor="guess"
                    className="mb-2 block text-sm font-medium text-slate-300"
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
                      maxLength={word.length}
                      className="h-14 flex-1 rounded-2xl border border-white/10 bg-white/10 px-4 text-lg text-white outline-none backdrop-blur-md transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
                      placeholder={`Enter ${word.length}-letter word`}
                    />
                    <button
                      onClick={handleSubmit}
                      className="h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 font-bold text-slate-950 shadow-xl transition hover:scale-[1.02] hover:shadow-cyan-500/30 active:scale-[0.98]"
                    >
                      Guess
                    </button>
                  </div>
                </div>
              )}

              {status === 'win' && (
                <div className="mt-8 w-full max-w-md rounded-3xl border border-emerald-400/20 bg-emerald-400/10 px-6 py-5 text-center shadow-xl">
                  <p className="text-2xl font-black text-emerald-300">You won 🎉</p>
                  <p className="mt-2 text-slate-200">
                    Beautiful work. You guessed{' '}
                    <span className="font-bold uppercase text-white">{word}</span>.
                  </p>
                </div>
              )}

              {status === 'loss' && (
                <div className="mt-8 w-full max-w-md rounded-3xl border border-rose-400/20 bg-rose-400/10 px-6 py-5 text-center shadow-xl">
                  <p className="text-2xl font-black text-rose-300">You lost</p>
                  <p className="mt-2 text-slate-200">
                    The word was{' '}
                    <strong className="uppercase tracking-wide text-white">{word}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <h2 className="text-xl font-bold text-white">How it works</h2>

            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3">
                <div className="mt-1 h-4 w-4 rounded-full bg-emerald-400" />
                <p>
                  <span className="font-semibold text-white">Green</span> means the
                  letter is correct and in the right spot.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3">
                <div className="mt-1 h-4 w-4 rounded-full bg-amber-400" />
                <p>
                  <span className="font-semibold text-white">Yellow</span> means the
                  letter is in the word, but in the wrong spot.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-3">
                <div className="mt-1 h-4 w-4 rounded-full bg-rose-400" />
                <p>
                  <span className="font-semibold text-white">Red</span> means the
                  letter is not in the word.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Tip
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Try common vowels early, then use the tile colors to narrow the word
                down fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
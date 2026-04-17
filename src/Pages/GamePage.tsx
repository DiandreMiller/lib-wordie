import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LibWordie from '../assets/images/LibChemCartoon.png';
import LibWordieLogo from '../assets/images/LibWordieLogo.png'
import { PERIODIC_TABLE_ELEMENTS } from '../assets/data/periodicTableElements';
import { ELEMENT_DETAILS } from '../assets/data/elementDetails';
import { updateDailySolveStreak } from '../utils/dailySolveStreak';
import DailySolveStreak from '../components/DailySolveStreak';
import { saveAnsweredElement, getAnsweredElements, clearAnsweredElements } from '../utils/answerHistory';
import { getDailyHintsState, useOneDailyHint } from '../utils/dailyHints';
import Quiz from '../components/Quiz';
import MusicPlayer from '../components/MusicPlayer';
import Confetti from 'react-confetti';

const MAX_GUESSES = 6;
const HOW_TO_PLAY_STORAGE_KEY = 'libwordie-hide-how-to-play-v1';
const GAME_STATS_STORAGE_KEY = 'libwordie-stats-v1';

type GameStats = {
  streak: number;
  wins: number;
  losses: number;
  longestStreak: number;
};

type LetterStatus = 'correct' | 'present' | 'absent';

type SubmittedRow = {
  guess: string;
  result: LetterStatus[];
};

const defaultStats: GameStats = {
  streak: 0,
  wins: 0,
  losses: 0,
  longestStreak: 0,
};

const GamePage = () => {
  const [word, setWord] = useState<string>('');
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [currentRow, setCurrentRow] = useState<number>(0);
  const [lockedLetters, setLockedLetters] = useState<Record<number, string>>({});
  const [status, setStatus] = useState<'loading' | 'playing' | 'win' | 'loss'>(
    'loading'
  );
  const [showHowToPlayModal, setShowHowToPlayModal] = useState<boolean>(false);
  const [stats, setStats] = useState<GameStats>(defaultStats);
  const [submittedRows, setSubmittedRows] = useState<SubmittedRow[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [solveStreakRefreshKey, setSolveStreakRefreshKey] = useState(0);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [quizReady, setQuizReady] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [isPerfectGame, setIsPerfectGame] = useState(false);
  const [dailyHintsRemaining, setDailyHintsRemaining] = useState(3);
  const [usedHintIndexes, setUsedHintIndexes] = useState<number[]>([]);
  const [_usedHintTypes, setUsedHintTypes] = useState<string[]>([]);
  const [activeHintMessage, setActiveHintMessage] = useState('');


  const boardRef = useRef<HTMLDivElement | null>(null);
  const mobileInputRef = useRef<HTMLInputElement | null>(null);

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
    setLockedLetters({});
    setCurrentRow(0);
    setCurrentGuess(Array(generatedWord.length).fill(''));
    setSubmittedRows([]);
    setShowMore(false);
    const hintState = getDailyHintsState();
    setDailyHintsRemaining(hintState.remaining);

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

  //Show confetti on win
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000); 
  
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const focusGameInput = () => {
    boardRef.current?.focus();
    mobileInputRef.current?.focus();
  };

  useEffect(() => {
    if (status === 'playing' && !showHowToPlayModal && !showQuiz) {
      focusGameInput();
    }
  }, [status, showHowToPlayModal, currentRow, showQuiz]);

  const handleCloseHowToPlayModal = () => {
    setShowHowToPlayModal(false);
    localStorage.setItem(HOW_TO_PLAY_STORAGE_KEY, 'true');
    setTimeout(() => focusGameInput(), 0);
  };

  const handleOpenHowToPlayModal = () => {
    setShowHowToPlayModal(true);
  };

  const getLetterCounts = (targetWord: string) => {
    const counts: Record<string, number> = {};
    for (const char of targetWord) {
      counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
  };

  const evaluateGuess = (guess: string, targetWord: string): LetterStatus[] => {
    const result: LetterStatus[] = Array(guess.length).fill('absent');
    const letterCounts = getLetterCounts(targetWord);

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === targetWord[i]) {
        result[i] = 'correct';
        letterCounts[guess[i]]--;
      }
    }

    for (let i = 0; i < guess.length; i++) {
      if (result[i] === 'correct') continue;

      const letter = guess[i];
      if (letterCounts[letter] > 0) {
        result[i] = 'present';
        letterCounts[letter]--;
      }
    }

    return result;
  };

  const handleSubmit = () => {
    if (status !== 'playing') return;
  
    const guess = currentGuess.join('');
  
    if (guess.length !== word.length) return;
    if (currentGuess.some((letter) => !letter)) return;
  
    for (const [index, lockedLetter] of Object.entries(lockedLetters)) {
      if (guess[Number(index)] !== lockedLetter) {
        return;
      }
    }
  
    const result = evaluateGuess(guess, word);
    const newSubmittedRows = [...submittedRows, { guess, result }];
    setSubmittedRows(newSubmittedRows);
  
    const newLockedLetters = { ...lockedLetters };
  
    result.forEach((status, i) => {
      if (status === 'correct') {
        newLockedLetters[i] = guess[i];
      }
    });
  
    setLockedLetters(newLockedLetters);
  
    if (guess === word) {
      updateDailySolveStreak();
      setSolveStreakRefreshKey((prev) => prev + 1);
    
      const updatedStats: GameStats = {
        ...stats,
        streak: stats.streak + 1,
        wins: stats.wins + 1,
        longestStreak: Math.max(stats.longestStreak, stats.streak + 1),
      };
    
      saveStats(updatedStats);
      const isPerfectGame = newSubmittedRows.length === 1;
      setIsPerfectGame(isPerfectGame);
      setStatus('win');
      setShowConfetti(true);
      saveAnsweredElement(word, true);
      maybeUnlockQuiz();
      return;
    }
  
    if (newSubmittedRows.length === MAX_GUESSES) {
      const updatedStats: GameStats = {
        ...stats,
        streak: 0,
        losses: stats.losses + 1,
        longestStreak: stats.longestStreak,
      };
    
      saveStats(updatedStats);
      setStatus('loss');
      saveAnsweredElement(word, false);
      setCurrentGuess(Array(word.length).fill(''));
      maybeUnlockQuiz();
      return;
    }
  
    const nextGuessArray = Array(word.length).fill('');
  
    Object.entries(newLockedLetters).forEach(([index, letter]) => {
      nextGuessArray[Number(index)] = letter;
    });
  
    setCurrentGuess(nextGuessArray);
    setCurrentRow(newSubmittedRows.length);
  };

  const handleNewGame = () => {
    const newWord = generateNewWord();
    setWord(newWord);
    setCurrentGuess(Array(newWord.length).fill(''));
    setLockedLetters({});
    setCurrentRow(0);
    setStatus('playing');
    setSubmittedRows([]);
    setShowMore(false);
    setQuizReady(false);
    setShowConfetti(false);
    setUsedHintTypes([]);
    setActiveHintMessage('');
    setTimeout(() => focusGameInput(), 0);
  };

  const handleBoardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (status !== 'playing') return;

    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();

      const chars = [...currentGuess];

      for (let i = word.length - 1; i >= 0; i--) {
        if (!(i in lockedLetters) && chars[i]) {
          chars[i] = '';
          setCurrentGuess(chars);
          return;
        }
      }

      return;
    }

    if (/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();

      const chars = [...currentGuess];
      while (chars.length < word.length) {
        chars.push('');
      }

      for (let i = 0; i < word.length; i++) {
        if (!(i in lockedLetters) && !chars[i]) {
          chars[i] = e.key.toLowerCase();
          setCurrentGuess(chars);
          return;
        }
      }
    }
  };

  const getTileSizeClasses = () => {
    if (word.length >= 11) {
      return 'h-7 w-7 text-[10px] rounded-[0.45rem] sm:h-9 sm:w-9 sm:text-sm lg:h-12 lg:w-12 lg:text-lg';
    }
  
    if (word.length >= 9) {
      return 'h-8 w-8 text-xs rounded-[0.5rem] sm:h-10 sm:w-10 sm:text-sm lg:h-13 lg:w-13 lg:text-lg';
    }
  
    if (word.length >= 7) {
      return 'h-9 w-9 text-sm rounded-[0.55rem] sm:h-11 sm:w-11 sm:text-base lg:h-14 lg:w-14 lg:text-xl';
    }
  
    if (word.length >= 5) {
      return 'h-10 w-10 text-sm rounded-[0.65rem] sm:h-12 sm:w-12 sm:text-lg lg:h-15 lg:w-15 lg:text-xl';
    }
  
    return 'h-11 w-11 text-base rounded-[0.7rem] sm:h-13 sm:w-13 sm:text-lg lg:h-16 lg:w-16 lg:text-2xl';
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

  const getRowGapClass = () => {
    if (word.length >= 11) return 'gap-0.5';
    if (word.length >= 9) return 'gap-1';
    if (word.length >= 7) return 'gap-1.5';
    return 'gap-2';
  };

  const splitWordForDisplay = (targetWord: string) => {
    if (targetWord.length <= 9) {
      return [targetWord.split('')];
    }
  
    const firstRow = [...targetWord.slice(0, 6).split(''), '-'];
    const secondRow = targetWord.slice(6).split('');
  
    return [firstRow, secondRow];
  };
  
  const getGlobalIndex = (
    rowIndex: number,
    colIndex: number,
    isWrappedWord: boolean
  ) => {
    if (!isWrappedWord) {
      return colIndex;
    }
  
    if (rowIndex === 0) {
      return colIndex;
    }
  
    return colIndex + 6;
  };

  const tileClasses = getTileSizeClasses();
  const rowGapClass = getRowGapClass();
  const elementData = ELEMENT_DETAILS[word];
  const displayRows = splitWordForDisplay(word);
  const isWrappedWord = word.length > 9;

  const maybeUnlockQuiz = () => {
    const history = getAnsweredElements();
    console.log('history length:', history.length, history);
    if (history.length === 10) {
      setQuizReady(true);
    }
  };

if (showQuiz) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#1e3a5f_0%,_#0f172a_45%,_#020617_100%)] px-4">
      <Quiz onExit={() => setShowQuiz(false)} onComplete={() => clearAnsweredElements()} />
    </div>
  );
}

const handleUseHint = () => {
  if (status !== 'playing') return;
  if (dailyHintsRemaining <= 0) return;

  const availableIndexes = Array.from({ length: word.length }, (_, i) => i).filter(
    (index) => !(index in lockedLetters) && !usedHintIndexes.includes(index)
  );

  if (availableIndexes.length === 0) return;

  const nextHintState = useOneDailyHint();
  if (!nextHintState) return;

  const randomIndex =
    availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

  const revealedLetter = word[randomIndex];

  const nextLockedLetters = {
    ...lockedLetters,
    [randomIndex]: revealedLetter,
  };

  const nextGuess = [...currentGuess];
  nextGuess[randomIndex] = revealedLetter;

  setLockedLetters(nextLockedLetters);
  setCurrentGuess(nextGuess);
  setUsedHintIndexes((prev) => [...prev, randomIndex]);
  setDailyHintsRemaining(nextHintState.remaining);
};

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e3a5f_0%,_#0f172a_45%,_#020617_100%)] px-4 py-8 text-white sm:py-10">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={
            isPerfectGame
              ? 800
              : stats.streak >= 5
              ? 600
              : 300
          }
          gravity={
            isPerfectGame
              ? 0.35
              : stats.streak >= 5
              ? 0.3
              : 0.2
          }
        />
      )}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-40">
        <DailySolveStreak refreshKey={solveStreakRefreshKey} />
      </div>
      <div className="absolute top-4 right-4 z-50">
      </div>
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
              Guess the hidden element in six tries. Type directly into the board.
              Green letters stay locked in place for the next guess.
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
                  is in the element, but in the wrong place.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="mt-1 h-5 w-5 rounded-full border border-red-300 bg-red-500" />
                <p>
                  <span className="font-bold text-white">Red</span> means the letter is
                  not in the element.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-400/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Lab Tip
              </p>
              <p className="mt-2 leading-7 text-slate-200">
                Element names range from 3 to 13 letters. Correct letters stay locked,
                so use them to narrow the answer faster.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={LibWordieLogo} className="w-24 h-auto" />
          <h1 className="text-3xl font-black text-white sm:text-4xl">
            Chem Lab
          </h1>
         </Link>

          <button
            onClick={handleOpenHowToPlayModal}
            className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-white/10 text-lg font-black text-white shadow-lg transition hover:scale-105 hover:bg-white/20 ml-3"
            aria-label="Open how to play modal"
            title="How to play"
          >
            ?
          </button>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:rounded-[2.5rem] sm:p-8">
            <div className="mb-4 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 sm:text-sm">
                Chemistry Study Mode
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <p className="max-w-xl text-base leading-6 text-slate-200 sm:text-lg">
                    Guess the hidden element name in six tries. Every round gives you a
                    periodic table element between 3 and 13 letters.
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

            <div className="mb-5 rounded-[1.5rem] border border-cyan-300/20 bg-slate-900/35 p-4">
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
        Daily Hints
      </p>
      <p className="mt-1 text-sm text-slate-300">
        {dailyHintsRemaining} of 3 remaining today
      </p>
    </div>

    <button
      onClick={handleUseHint}
      disabled={status !== 'playing' || dailyHintsRemaining <= 0}
      className={`rounded-[1rem] px-5 py-3 text-sm font-black uppercase tracking-[0.15em] transition ${
        status === 'playing' && dailyHintsRemaining > 0
          ? 'border border-fuchsia-300/50 bg-fuchsia-400/15 text-white hover:scale-[1.03] hover:bg-fuchsia-400/25'
          : 'cursor-not-allowed border border-slate-700 bg-slate-800 text-slate-500'
      }`}
    >
      Use Hint
    </button>
  </div>

  {activeHintMessage && (
    <div className="mt-4 rounded-[1rem] border border-white/10 bg-white/5 p-4">
      <p className="text-sm leading-6 text-cyan-100">{activeHintMessage}</p>
    </div>
  )}
</div>

            <div
              ref={boardRef}
              tabIndex={0}
              onKeyDown={handleBoardKeyDown}
              onClick={focusGameInput}
              className="flex flex-col items-center outline-none"
            >
              <input
                ref={mobileInputRef}
                type="text"
                inputMode="text"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                value=""
                onChange={() => {}}
                onKeyDown={(e) => {
                  handleBoardKeyDown(
                    e as unknown as React.KeyboardEvent<HTMLDivElement>
                  );
                }}
                className="absolute left-0 top-0 h-px w-px opacity-0"
                style={{ caretColor: 'transparent' }}
              />

              <div className="w-full overflow-x-auto pb-2">
                <div className="mx-auto flex min-w-max flex-col items-center space-y-3 pt-2">
                {Array.from({ length: MAX_GUESSES }).map((_, boardRowIndex) => {
                  const submittedRow = submittedRows[boardRowIndex];
                  const isSubmittedRow = !!submittedRow;
                  const isActiveRow = status === 'playing' && boardRowIndex === currentRow;

                  const guess = isSubmittedRow
                    ? submittedRow.guess.split('')
                    : isActiveRow
                    ? currentGuess
                    : Array(word.length).fill('');

                  return (
                    <div key={boardRowIndex} className="flex flex-col items-center space-y-1">
                      {displayRows.map((displayRow, displayRowIndex) => (
                        <div
                          key={displayRowIndex}
                          className={`flex justify-center ${rowGapClass}`}
                        >
                          {displayRow.map((char, colIndex) => {
                            const isDash = char === '-';

                            if (isDash) {
                              return (
                                <div
                                  key={`dash-${displayRowIndex}-${colIndex}`}
                                  className={`flex items-center justify-center font-black text-white/70 ${tileClasses} border-0 bg-transparent shadow-none`}
                                >
                                  -
                                </div>
                              );
                            }

                            const globalIndex = getGlobalIndex(
                              displayRowIndex,
                              colIndex,
                              isWrappedWord
                            );

                            const letter = guess[globalIndex] || '';
                            const isLockedLetter =
                              isActiveRow && globalIndex in lockedLetters;

                            const color = isSubmittedRow
                              ? submittedRow.result[globalIndex] === 'correct'
                                ? 'bg-emerald-500 border-emerald-300 text-white'
                                : submittedRow.result[globalIndex] === 'present'
                                ? 'bg-yellow-300 border-yellow-200 text-slate-950'
                                : 'bg-red-500 border-red-300 text-white'
                              : isLockedLetter
                              ? 'bg-emerald-500 border-emerald-300 text-white'
                              : 'bg-white/10 border-white/10 text-white';

                            return (
                              <div
                                key={`${displayRowIndex}-${colIndex}`}
                                className={`flex items-center justify-center border-2 font-black uppercase shadow-md transition-all duration-200 ${tileClasses} ${color}`}
                              >
                                {letter}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  );
                })}
                </div>
              </div>

              {status === 'playing' && (
                <div className="mt-6 flex w-full max-w-md justify-center">
                  <button
                    onClick={handleSubmit}
                    disabled={currentGuess.some((letter) => !letter)}
                    className={`w-full rounded-[1.25rem] border px-6 py-4 text-lg font-black shadow transition ${
                      currentGuess.every((letter) => letter)
                        ? 'border-cyan-300 bg-cyan-300 text-slate-950 hover:scale-[1.02] hover:bg-cyan-200 active:scale-[0.98]'
                        : 'cursor-not-allowed border-slate-700 bg-slate-800 text-slate-500'
                    }`}
                  >
                    Run Test
                  </button>
                </div>
              )}

              {status === 'win' && elementData && (
                <div
                  className={`mt-8 w-full max-w-xl rounded-[1.75rem] border border-emerald-300/40 bg-emerald-500/15 px-6 py-5 text-center shadow-lg transition-all duration-500 ease-out ${
                    isPerfectGame
                      ? 'ring-2 ring-yellow-300/60 shadow-[0_0_25px_rgba(253,224,71,0.4)] scale-[1.02]'
                      : ''
                  }`}
                >
                  <p className="text-3xl font-black text-emerald-200">
                    Reaction Complete!
                  </p>
                  {isPerfectGame && (
                    <p className="mt-2 animate-[perfectPop_500ms_ease-out] text-lg font-bold text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.45)]">
                      Perfect Reaction ⚡ First Try!
                    </p>
                  )}
                  <p className="mt-2 text-base text-slate-100">
                    Nice work. You guessed{' '}
                    <span className="font-black uppercase text-white">{word}</span>.
                  </p>

                  <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-slate-900/40 p-4 text-left">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                      Element Data
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      {word.charAt(0).toUpperCase() + word.slice(1)} ({elementData.symbol})
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Atomic Number: {elementData.atomicNumber}
                    </p>
                    <p className="mt-3 text-slate-200">{elementData.shortFact}</p>

                    <button
                      onClick={() => setShowMore((prev) => !prev)}
                      className="mt-4 rounded-[1rem] border border-cyan-300 bg-cyan-300 px-4 py-2 font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200"
                    >
                      {showMore ? 'Show Less' : 'See More'}
                    </button>

                    {showMore && (
                      <div className="mt-4 rounded-[1rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          Overview
                        </p>
                        <p className="mt-2 text-slate-200">{elementData.overview}</p>

                        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          Common Uses
                        </p>
                        <div className="mt-2 space-y-2">
                          {elementData.uses.map((use, index) => (
                            <p key={index} className="text-slate-200">
                              • {use}
                            </p>
                          ))}
                        </div>

                        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          Fun Fact
                        </p>
                        <p className="mt-2 text-slate-200">{elementData.funFact}</p>
                      </div>
                    )}
                  </div>

                  {quizReady && (
                    <div className="mt-5">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        Review Quiz Unlocked
                      </p>
                      <button
                        onClick={() => {
                          setQuizReady(false);
                          setShowQuiz(true);
                        }}
                        className="h-12 rounded-[1.25rem] border border-cyan-300 bg-cyan-300 px-6 text-lg font-black text-slate-950 shadow-lg transition hover:scale-105 hover:bg-cyan-200"
                      >
                        Start Review Quiz
                      </button>
                    </div>
                  )}

                  <button
                    onClick={handleNewGame}
                    className="mt-5 h-12 rounded-[1.25rem] border border-emerald-300 bg-emerald-500 px-6 text-lg font-black text-white shadow-lg transition hover:scale-105 hover:bg-emerald-400"
                  >
                    Start New Experiment
                  </button>
                </div>
              )}

              {status === 'loss' && elementData && (
                <div className="mt-8 w-full max-w-xl rounded-[1.75rem] border border-red-300/40 bg-red-500/15 px-6 py-5 text-center shadow-lg">
                  <p className="text-3xl font-black text-red-200">No Match Found</p>
                  <p className="mt-2 text-base text-slate-100">
                    The correct term was{' '}
                    <span className="font-black uppercase text-white">{word}</span>.
                  </p>

                  <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-slate-900/40 p-4 text-left">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                      Element Data
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      {word.charAt(0).toUpperCase() + word.slice(1)} ({elementData.symbol})
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Atomic Number: {elementData.atomicNumber}
                    </p>
                    <p className="mt-3 text-slate-200">{elementData.shortFact}</p>

                    <button
                      onClick={() => setShowMore((prev) => !prev)}
                      className="mt-4 rounded-[1rem] border border-cyan-300 bg-cyan-300 px-4 py-2 font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200"
                    >
                      {showMore ? 'Show Less' : 'See More'}
                    </button>

                    {showMore && (
                      <div className="mt-4 rounded-[1rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          Overview
                        </p>
                        <p className="mt-2 text-slate-200">{elementData.overview}</p>

                        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          Common Uses
                        </p>
                        <div className="mt-2 space-y-2">
                          {elementData.uses.map((use, index) => (
                            <p key={index} className="text-slate-200">
                              • {use}
                            </p>
                          ))}
                        </div>

                        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          Fun Fact
                        </p>
                        <p className="mt-2 text-slate-200">{elementData.funFact}</p>
                      </div>
                    )}
                  </div>

                  {quizReady && (
                    <div className="mt-5">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        Review Quiz Unlocked
                      </p>
                      <button
                        onClick={() => {
                          setQuizReady(false);
                          setShowQuiz(true);
                        }}
                        className="h-12 rounded-[1.25rem] border border-cyan-300 bg-cyan-300 px-6 text-lg font-black text-slate-950 shadow-lg transition hover:scale-105 hover:bg-cyan-200"
                      >
                        Start Review Quiz
                      </button>
                    </div>
                  )}

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
            <div className="hidden overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md lg:block">
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
                  <p className="mt-2 text-3xl font-black text-white">{stats.streak}</p>
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
                  <p className="mt-2 text-3xl font-black text-white">{stats.wins}</p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/40 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Losses
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">{stats.losses}</p>
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
          <div className="mt-8 flex justify-center">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
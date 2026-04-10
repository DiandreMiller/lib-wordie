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
      return 'green';
    }

    if (word.includes(letter)) {
      return 'yellow';
    }

    return 'red';
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Lib Wordie</h1>

      {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
        const guess = guesses[rowIndex] || '';

        return (
          <div
            key={rowIndex}
            style={{ display: 'flex', marginBottom: '4px' }}
          >
            {Array.from({ length: word.length }).map((_, colIndex) => {
              const letter = guess[colIndex] || '';
              const color = guess ? getColor(letter, colIndex) : 'transparent';

              return (
                <div
                  key={colIndex}
                  style={{
                    width: 40,
                    height: 40,
                    border: '1px solid black',
                    backgroundColor: color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '4px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}

      {status === 'playing' && (
        <div>
          <input
            value={currentGuess}
            onChange={(e) =>
              setCurrentGuess(e.target.value.toLowerCase().slice(0, word.length))
            }
            maxLength={word.length}
          />
          <button onClick={handleSubmit}>Guess</button>
        </div>
      )}

      {status === 'win' && <p>You've won!</p>}
      {status === 'loss' && (
        <p>
          You've lost! The word was <strong>{word}</strong>
        </p>
      )}
    </div>
  );
};

export default GamePage;
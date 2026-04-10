import { useState, useEffect } from 'react';
import { generate } from "random-words";

const GamePage = () => {
    const [word, setWord] = useState<string>('');
    const [secret, setSecret] = useState<string>('');
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [status, setStatus] = useState<'loading' | 'playing' | 'win' | 'loss'>('loading');

    useEffect(() => {
        const generateWord = () => {
            const wordGenerated = generate({ exactly: 1, minLength: 4, maxLength: 8})[0].trim();
            console.log('generate:', generate);
            setWord(wordGenerated);
        }

        generateWord();
    },[])


    console.log(generate({ exactly: 1, minLength: 5, maxLength: 5 }));
  return (
    <div style={{ color: 'red '}}>{word}</div>
  )
}

export default GamePage;
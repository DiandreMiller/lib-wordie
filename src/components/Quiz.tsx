import { useState } from 'react';
import { generateQuizQuestions } from '../utils/generateQuiz';


type QuizProps = {
  onExit: () => void;
  onComplete: () => void;
};

const Quiz = ({ onExit, onComplete }: QuizProps) => {
  const [questions] = useState(generateQuizQuestions());
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const question = questions[current];

  const handleAnswer = (choice: string) => {
    if (selected || !question) return;

    setSelected(choice);

    if (choice === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      setCurrent((prev) => prev + 1);
    }, 800);
  };

  if (!question) {
    return (
      <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/40 p-6 text-center text-white shadow-lg backdrop-blur-md">
        <h2 className="text-3xl font-black">Quiz Complete</h2>
        <p className="mt-2 text-lg">
          Score: {score} / {questions.length}
        </p>

        <button
           onClick={() => {
            onComplete();
            onExit();
          }}
          className="mt-6 rounded-[1rem] border border-cyan-300 bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200"
        >
          Back to Chem Lab
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-slate-900/40 p-6 text-white shadow-lg backdrop-blur-md">
      <p className="text-sm text-cyan-200">
        Question {current + 1} / {questions.length}
      </p>

      <h2 className="mt-2 text-xl font-bold">{question.prompt}</h2>

      <div className="mt-4 space-y-3">
        {question.choices.map((choice) => {
          const isCorrect = choice === question.correctAnswer;
          const isSelected = choice === selected;

          return (
            <button
              key={choice}
              onClick={() => handleAnswer(choice)}
              className={`w-full rounded-xl p-3 font-bold transition ${
                selected
                  ? isCorrect
                    ? 'bg-emerald-500 text-white'
                    : isSelected
                    ? 'bg-red-500 text-white'
                    : 'bg-slate-700 text-slate-300'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              {choice}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
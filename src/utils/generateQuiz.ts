import { ELEMENT_DETAILS } from '../assets/data/elementDetails';
import { getAnsweredElements } from './answerHistory';

export type QuizQuestion = {
  prompt: string;
  choices: string[];
  correctAnswer: string;
  questionType:
    | 'symbol'
    | 'atomicNumber'
    | 'use'
    | 'funFact'
    | 'overview';
  elementWord: string;
};

const shuffle = <T,>(arr: T[]): T[] => {
  return [...arr].sort(() => Math.random() - 0.5);
};

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const getUniqueHistoryWords = (): string[] => {
  const history = getAnsweredElements();
  const seen = new Set<string>();
  const uniqueWords: string[] = [];

  for (const { word } of history) {
    if (!seen.has(word) && ELEMENT_DETAILS[word]) {
      seen.add(word);
      uniqueWords.push(word);
    }
  }

  return uniqueWords.slice(0, 10);
};

const getOtherWords = (correctWord: string, count: number): string[] => {
  return shuffle(
    Object.keys(ELEMENT_DETAILS).filter((word) => word !== correctWord)
  ).slice(0, count);
};

const createSymbolQuestion = (word: string): QuizQuestion => {
  const element = ELEMENT_DETAILS[word];
  const wrongChoices = getOtherWords(word, 3).map(
    (wrongWord) => ELEMENT_DETAILS[wrongWord].symbol
  );

  return {
    prompt: `What is the symbol for ${capitalize(word)}?`,
    choices: shuffle([element.symbol, ...wrongChoices]),
    correctAnswer: element.symbol,
    questionType: 'symbol',
    elementWord: word,
  };
};

const createAtomicNumberQuestion = (word: string): QuizQuestion => {
  const element = ELEMENT_DETAILS[word];
  const wrongChoices = getOtherWords(word, 3).map((wrongWord) =>
    String(ELEMENT_DETAILS[wrongWord].atomicNumber)
  );

  return {
    prompt: `What is the atomic number of ${capitalize(word)}?`,
    choices: shuffle([String(element.atomicNumber), ...wrongChoices]),
    correctAnswer: String(element.atomicNumber),
    questionType: 'atomicNumber',
    elementWord: word,
  };
};

const getRandomItem = <T,>(items: T[]): T => {
    return items[Math.floor(Math.random() * items.length)];
  };
  
  const createUseQuestion = (word: string): QuizQuestion => {
    const element = ELEMENT_DETAILS[word];
    const nonGenericUses = element.uses.filter(
        (use) => use !== 'Research'
    );
    
    const correctUse = getRandomItem(
        nonGenericUses.length ? nonGenericUses : element.uses
    );
  
    const wrongChoicesSet = new Set<string>();
  
    const otherWords = shuffle(
      Object.keys(ELEMENT_DETAILS).filter((w) => w !== word)
    );
  
    for (const wrongWord of otherWords) {
      const wrongUses = ELEMENT_DETAILS[wrongWord].uses;
      const randomWrongUse = getRandomItem(wrongUses);
  
      if (randomWrongUse !== correctUse) {
        wrongChoicesSet.add(randomWrongUse);
      }
  
      if (wrongChoicesSet.size === 3) {
        break;
      }
    }
  
    const choices = shuffle([correctUse, ...Array.from(wrongChoicesSet)]);
  
    return {
      prompt: `Which of these is a common use of ${capitalize(word)}?`,
      choices,
      correctAnswer: correctUse,
      questionType: 'use',
      elementWord: word,
    };
  };

const createFunFactQuestion = (word: string): QuizQuestion => {
  const element = ELEMENT_DETAILS[word];
  const correctFact = element.funFact;

  const wrongChoices = getOtherWords(word, 3).map(
    (wrongWord) => ELEMENT_DETAILS[wrongWord].funFact
  );

  return {
    prompt: `Which fun fact belongs to ${capitalize(word)}?`,
    choices: shuffle([correctFact, ...wrongChoices]),
    correctAnswer: correctFact,
    questionType: 'funFact',
    elementWord: word,
  };
};

const createOverviewQuestion = (word: string): QuizQuestion => {
  const element = ELEMENT_DETAILS[word];
  const correctChoice = capitalize(word);

  const wrongChoices = getOtherWords(word, 3).map((wrongWord) =>
    capitalize(wrongWord)
  );

  return {
    prompt: `Which element matches this description: "${element.shortFact}"`,
    choices: shuffle([correctChoice, ...wrongChoices]),
    correctAnswer: correctChoice,
    questionType: 'overview',
    elementWord: word,
  };
};

const questionFactories = [
  createSymbolQuestion,
  createAtomicNumberQuestion,
  createUseQuestion,
  createFunFactQuestion,
  createOverviewQuestion,
];

export const generateQuizQuestions = (): QuizQuestion[] => {
  const uniqueWords = getUniqueHistoryWords();

  const usedPrompts = new Set<string>();
  let lastQuestionType: QuizQuestion['questionType'] | null = null;

  const questions: QuizQuestion[] = [];

  for (const word of uniqueWords) {
    const shuffledFactories = shuffle(questionFactories);

    let chosenQuestion: QuizQuestion | null = null;

    for (const factory of shuffledFactories) {
      const candidate = factory(word);

      const isDuplicatePrompt = usedPrompts.has(candidate.prompt);
      const isSameTypeAsPrevious =
        lastQuestionType !== null &&
        candidate.questionType === lastQuestionType;

      if (!isDuplicatePrompt && !isSameTypeAsPrevious) {
        chosenQuestion = candidate;
        break;
      }
    }

    if (!chosenQuestion) {
      for (const factory of shuffledFactories) {
        const candidate = factory(word);

        if (!usedPrompts.has(candidate.prompt)) {
          chosenQuestion = candidate;
          break;
        }
      }
    }

    if (!chosenQuestion) {
      chosenQuestion = createSymbolQuestion(word);
    }

    usedPrompts.add(chosenQuestion.prompt);
    lastQuestionType = chosenQuestion.questionType;
    questions.push(chosenQuestion);
  }

  return questions;
};
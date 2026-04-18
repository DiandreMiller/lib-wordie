import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LibbyAndDreAnniversary from '../assets/images/LibbyDreAnniversary.jpeg';

const SENTENCES = [
  'I am grateful and happy to spend another year with you as we grow older together.',
  'I’m grateful I met you and I love everything about you, your warm inviting personality, your kind and amazing heart, your show-stopping smile, your gorgeous brown skin',
  'your bright bodacious brain, your beautiful voice, your sexy curves, your gorgeous amazing and powerful hair, your lucious lips, all that movement back there… and even your strong ass brolic fingers.',
  'I’m grateful to have you as my girlfriend, and I can’t wait until you are even more in the future.',
  'Even if this birthday isn’t everything you want yet, one day it will be.',
  'I’m going to make sure of that.',
  'I’ve been working really hard building this for you.',
  'It’s not everything I want it to be yet, but I really tried to make something you could enjoy, something that shows just how much you mean to me.',
  'Here’s to another year with my lovely lady and best friend.',
  'I hope we get at least 70+ more of these together.',
  'I love you. Happy 28th birthday 💛',
  '',
  'Love: Your Honey Bunny'
];

const ToMyHeart = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [hearts] = useState(
    [...Array(25)].map((_, i) => {
      const rand = Math.random();
  
      let color = 'text-yellow-300';
      if (rand > 0.85) color = 'text-pink-400';
      else if (rand > 0.7) color = 'text-rose-300';
  
      return {
        id: i,
        color,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${2 + Math.random() * 2}s`,
        floatDuration: `${6 + Math.random() * 6}s`,
        delay: `${Math.random() * 1.5}s`,
        size: `${1.2 + Math.random() * 1.4}rem`,
      };
    })
  );

  useEffect(() => {
    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    setTypedText('');
    setIsTyping(true);

    const currentSentence = SENTENCES[currentSentenceIndex];

    const startDelay = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setTypedText(currentSentence.slice(0, index));

        if (index >= currentSentence.length) {
          if (intervalId) clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 45);
    }, 500); // slight pause before typing starts

    return () => {
      clearTimeout(startDelay);
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentSentenceIndex]);

  const handleNextSentence = () => {
    if (isTyping) return;

    if (currentSentenceIndex < SENTENCES.length - 1) {
      setCurrentSentenceIndex((prev) => prev + 1);
    }
  };

  const isLetterFinished =
  currentSentenceIndex === SENTENCES.length - 1 && !isTyping;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#3b163f_0%,_#1f102b_45%,_#09040f_100%)] px-4 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className={`absolute ${heart.color} ${
              isLetterFinished ? 'animate-float' : 'animate-heart-chaos'
            }`}
            style={{
              left: heart.left,
              top: heart.top,
              fontSize: heart.size,
              animationDuration: isLetterFinished
                ? heart.floatDuration
                : heart.duration,
              animationDelay: heart.delay,
            }}
          >
            💛
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-12 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-0 h-96 w-96 rounded-full bg-pink-400/10 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-1/3 h-80 w-80 rounded-full bg-rose-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-8 flex justify-center">
          <Link
            to="/"
            className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-sm transition hover:scale-[1.05] hover:bg-white/15"
          >
            Back Home
          </Link>
        </div>

        <div className="rounded-[2.5rem] border border-yellow-300/30 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.4)] backdrop-blur-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-200">
            To My Heart 💛
          </p>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Happy Birthday Baby Girl!
          </h1>

          <div className="relative mt-6">
            <div
              className={`pointer-events-none absolute inset-0 rounded-[1.5rem] ${
                isLetterFinished ? 'animate-photo-glow' : ''
              }`}
            />

            <div
              className={`relative overflow-hidden rounded-[1.5rem] border shadow-lg transition-all duration-700 ease-out ${
                isLetterFinished
                  ? 'border-yellow-300/70 ring-2 ring-yellow-300/30'
                  : 'border-white/10'
              }`}
            >
              <img
                src={LibbyAndDreAnniversary}
                alt="Libya and Dre"
                className={`w-full object-cover transition-all duration-700 ease-out ${
                  isLetterFinished ? 'scale-[1.01] brightness-110' : ''
                }`}
              />
            </div>
          </div>

          <div
            onClick={handleNextSentence}
            className="mt-6 cursor-pointer select-none space-y-4 text-lg leading-8 text-slate-100"
          >
            {SENTENCES.slice(0, currentSentenceIndex).map((sentence, i) => (
              <p key={i} className="opacity-80">
                {sentence}
              </p>
            ))}

            <p>
              {typedText}
              {!isLetterFinished && (
                <span className="ml-1 animate-pulse text-yellow-300">|</span>
              )}
            </p>

            {!isTyping && currentSentenceIndex < SENTENCES.length - 1 && (
              <p className="text-sm text-yellow-200 opacity-70">
                Tap to continue 💛
              </p>
            )}

            {!isTyping && currentSentenceIndex === SENTENCES.length - 1 && (
              <p className="text-sm text-yellow-200 opacity-70">
                End of letter 💛
              </p>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: 0.75;
            }
            50% {
              transform: translateY(-18px) translateX(6px) scale(1.08);
              opacity: 1;
            }
            100% {
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: 0.75;
            }
          }

          @keyframes heartChaos {
            0% {
              transform: translate(0px, 0px) scale(1) rotate(0deg);
              opacity: 0.75;
            }
            20% {
              transform: translate(14px, -22px) scale(1.18) rotate(8deg);
              opacity: 1;
            }
            40% {
              transform: translate(-18px, 16px) scale(0.92) rotate(-10deg);
              opacity: 0.85;
            }
            60% {
              transform: translate(22px, -10px) scale(1.15) rotate(12deg);
              opacity: 1;
            }
            80% {
              transform: translate(-12px, -18px) scale(0.98) rotate(-6deg);
              opacity: 0.9;
            }
            100% {
              transform: translate(0px, 0px) scale(1) rotate(0deg);
              opacity: 0.75;
            }
          }

          .animate-float {
            animation: float infinite ease-in-out;
          }

          .animate-heart-chaos {
            animation: heartChaos infinite ease-in-out;
          }

          @keyframes photoGlow {
            0% {
              box-shadow:
                0 0 18px rgba(253, 224, 71, 0.28),
                0 0 38px rgba(253, 224, 71, 0.18),
                0 0 70px rgba(253, 224, 71, 0.10);
              opacity: 0.85;
              transform: scale(1);
            }
            50% {
              box-shadow:
                0 0 26px rgba(253, 224, 71, 0.48),
                0 0 54px rgba(253, 224, 71, 0.28),
                0 0 95px rgba(253, 224, 71, 0.16);
              opacity: 1;
              transform: scale(1.01);
            }
            100% {
              box-shadow:
                0 0 18px rgba(253, 224, 71, 0.28),
                0 0 38px rgba(253, 224, 71, 0.18),
                0 0 70px rgba(253, 224, 71, 0.10);
              opacity: 0.85;
              transform: scale(1);
            }
          }

          .animate-photo-glow {
            animation: photoGlow 2.2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default ToMyHeart;
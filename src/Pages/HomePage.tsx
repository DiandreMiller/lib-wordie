import { useNavigate } from 'react-router-dom';
import LibWordie from '../assets/LibWordie.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#4d2a12] via-[#8a4f1d] to-[#6b3f1d] text-[#fff3d4]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d3a62f]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#f3cf74]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#7a3b2e]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between rounded-full border border-[#d9b15f]/30 bg-[#8b5a2b]/40 px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#d3a62f] bg-[#6b3f1d] text-lg font-black text-[#fff8e7] shadow-md">
              LW
            </div>
            <div>
              <p
                className="text-xl font-black text-[#fff8e7]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Lib Wordie
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#f3cf74]">
                Vintage Puzzle Experience
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/play')}
            className="rounded-full border-2 border-[#f3cf74] bg-[#d3a62f] px-5 py-2.5 text-sm font-black uppercase tracking-[0.18em] text-[#3a210f] shadow-lg transition hover:scale-[1.03] hover:bg-[#e0b43a] active:scale-[0.98]"
          >
            Play Now
          </button>
        </header>

        <main className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full border border-[#d9b15f]/40 bg-[#8b5a2b]/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#f3cf74] shadow-md backdrop-blur-sm">
                Guess. Glow. Win.
              </p>

              <h1
                className="text-5xl font-black leading-[0.95] text-[#fff8e7] sm:text-6xl lg:text-7xl"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  textShadow: '4px 4px 0px #4d2a12, 8px 8px 20px rgba(0,0,0,0.2)',
                }}
              >
                A beautiful
                <span className="block text-[#f3cf74]">vintage word game</span>
                you will actually want to stare at.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f7e6bf] sm:text-xl">
                Lib Wordie takes the classic word puzzle and wraps it in golden warmth,
                retro charm, and cozy game-night energy. Solve hidden words, chase the
                perfect guess, and enjoy a page that feels as good as it plays.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => navigate('/play')}
                  className="rounded-[1.25rem] border-2 border-[#f3cf74] bg-[#d3a62f] px-8 py-4 text-lg font-black text-[#3a210f] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:scale-[1.03] hover:bg-[#e0b43a] active:scale-[0.98]"
                >
                  Enter Lib Wordie
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('learn-more')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-[1.25rem] border-2 border-[#d9b15f]/50 bg-[#8b5a2b]/50 px-8 py-4 text-lg font-bold text-[#fff3d4] shadow-lg backdrop-blur-sm transition hover:scale-[1.03] hover:bg-[#8b5a2b]/70 active:scale-[0.98]"
                >
                  Learn More
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-5 shadow-lg backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                    Style
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#fff8e7]">Vintage</p>
                  <p className="mt-2 text-sm leading-6 text-[#f7e6bf]">
                    Warm tones, gold accents, and rich retro atmosphere.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-5 shadow-lg backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                    Gameplay
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#fff8e7]">6 Guesses</p>
                  <p className="mt-2 text-sm leading-6 text-[#f7e6bf]">
                    Solve each word using smart clues and classic color feedback.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-5 shadow-lg backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                    Words
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#fff8e7]">4–8 Letters</p>
                  <p className="mt-2 text-sm leading-6 text-[#f7e6bf]">
                    Every round feels a little different, which keeps it fresh.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-full border border-[#f3cf74]/30 bg-[#d3a62f]/10 blur-2xl lg:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-36 w-36 rounded-full border border-[#f3cf74]/20 bg-[#7a3b2e]/20 blur-2xl lg:block" />

            <div className="relative rounded-[2.5rem] border-2 border-[#d3a62f]/60 bg-[#8b5a2b]/85 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[2rem] border border-[#d9b15f]/30 bg-[#6b3f1d]/30">
                <img
                  src={LibWordie}
                  alt="Lib Wordie artwork"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-[1.25rem] border border-[#d9b15f]/30 bg-[#6b3f1d]/55 p-4 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full border border-[#89a95c] bg-[#6f8f45]" />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f3cf74]">
                    Correct Spot
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-[#d9b15f]/30 bg-[#6b3f1d]/55 p-4 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full border border-[#e4bb4c] bg-[#d3a62f]" />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f3cf74]">
                    In The Word
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-[#d9b15f]/30 bg-[#6b3f1d]/55 p-4 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full border border-[#b46251] bg-[#7a3b2e]" />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f3cf74]">
                    Not In Word
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <section
          id="learn-more"
          className="mt-12 grid gap-6 pb-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          <div className="rounded-[2rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74]">
              Mood
            </p>
            <h2
              className="mt-3 text-2xl font-black text-[#fff8e7]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Cozy and rich
            </h2>
            <p className="mt-3 leading-7 text-[#f7e6bf]">
              The whole experience is designed to feel warm, polished, and memorable.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74]">
              Design
            </p>
            <h2
              className="mt-3 text-2xl font-black text-[#fff8e7]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Retro elegance
            </h2>
            <p className="mt-3 leading-7 text-[#f7e6bf]">
              Golden borders, soft shadows, and rounded cards keep it dramatic.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74]">
              Challenge
            </p>
            <h2
              className="mt-3 text-2xl font-black text-[#fff8e7]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Smart guessing
            </h2>
            <p className="mt-3 leading-7 text-[#f7e6bf]">
              Every color clue helps narrow the answer and rewards better strategy.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74]">
              Start
            </p>
            <h2
              className="mt-3 text-2xl font-black text-[#fff8e7]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to play?
            </h2>
            <button
              onClick={() => navigate('/play')}
              className="mt-4 rounded-[1rem] border-2 border-[#f3cf74] bg-[#d3a62f] px-5 py-3 font-black text-[#3a210f] shadow-lg transition hover:scale-[1.03] hover:bg-[#e0b43a] active:scale-[0.98]"
            >
              Go to Game
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
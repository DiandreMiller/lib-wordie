import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDailyChemFact, hasSeenDailyChemFactToday, markDailyChemFactSeen } from '../utils/dailyChemFacts';
import LibWordie from '../assets/images/LibChemCartoon.png';
import LibChem from '../assets/images/LibWordieLogo.png';

const HomePage = () => {
  const [showDailyFactModal, setShowDailyFactModal] = useState(false);

  useEffect(() => {
    if (!hasSeenDailyChemFactToday()) {
      setShowDailyFactModal(true);
    }
  },[]);


  const navigate = useNavigate();

  const dailyFact = getDailyChemFact();

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e3a5f_0%,_#0f172a_45%,_#020617_100%)] text-white">
      {showDailyFactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-xl rounded-[2rem] border border-cyan-300/20 bg-slate-900/95 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-8">
            <button
              onClick={() => {
                setShowDailyFactModal(false);
                markDailyChemFactSeen();
              }}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/40 bg-white/10 text-xl font-bold text-white transition hover:scale-105 hover:bg-white/20"
              aria-label="Close daily chem fact modal"
            >
              ×
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Daily Chem Fact
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              {dailyFact.word.charAt(0).toUpperCase() + dailyFact.word.slice(1)}
            </h2>

            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-300">
              Symbol: {dailyFact.symbol} • Atomic Number: {dailyFact.atomicNumber}
            </p>

            <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
              <p className="text-base leading-7 text-slate-200">
                {dailyFact.fact}
              </p>
            </div>

            <button
              onClick={() => {
                setShowDailyFactModal(false);
                markDailyChemFactSeen();
              }}
              className="mt-6 h-12 rounded-[1.25rem] border border-cyan-300 bg-cyan-300 px-6 text-lg font-black text-slate-950 shadow-lg transition hover:scale-105 hover:bg-cyan-200"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-0 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-52 w-52 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <img className="flex h-15 w-15 items-center justify-center rounded-full border-2 border-cyan-300 bg-slate-900 text-lg font-black text-cyan-200 shadow-md"
              src={LibChem}
             />

            <div>
              <p className="text-xl font-black text-white">Lib Wordie</p>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                Chem Lab Edition
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/play')}
            className="rounded-full border border-cyan-300/70 bg-cyan-300 px-5 py-2.5 text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg transition hover:scale-[1.03] hover:bg-cyan-200 active:scale-[0.98]"
          >
            Start Experiment
          </button>
        </header>

        <main className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative">
            <div className="max-w-3xl">
              <p className="mb-4 inline-block rounded-full border border-cyan-300/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200 shadow-md backdrop-blur-sm">
                Study. Solve. Level Up.
              </p>

              <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Turn chemistry
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                  into a word game
                </span>
                you actually want to play.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Lib Wordie: Chem Lab makes studying feel interactive. Guess chemistry
                terms, learn through clues, and build confidence one puzzle at a time.
                Starting with chemistry, expanding into even more subjects later.
              </p>
              

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <button
                  onClick={() => navigate('/play')}
                  className="rounded-[1.25rem] border border-cyan-300 bg-cyan-300 px-8 py-4 text-lg font-black text-slate-950 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:scale-[1.03] hover:bg-cyan-200 active:scale-[0.98]"
                >
                  Enter Chem Lab
                </button>

                <button
                  onClick={() => setShowDailyFactModal(true)}
                  className="rounded-[1.25rem] border border-fuchsia-300/40 bg-fuchsia-400/10 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition hover:scale-[1.03] hover:bg-fuchsia-400/20 active:scale-[0.98]"
                >
                  Today’s Fact
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('learn-more')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-[1.25rem] border border-white/15 bg-white/10 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white/15 active:scale-[0.98]"
                >
                  Learn More
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Subject
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">Chemistry</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Learn chemistry terms, concepts, and vocabulary through play.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Format
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">6 Guesses</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Use clue-based feedback to identify the hidden chemistry word.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                    Future
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">More Topics</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Chem first, then more study modes and subjects over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-full bg-cyan-300/15 blur-2xl lg:block" />
            <div className="absolute -bottom-6 -right-6 hidden h-36 w-36 rounded-full bg-fuchsia-400/15 blur-2xl lg:block" />

            <div className="relative rounded-[2.5rem] border border-white/15 bg-white/10 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/30">
                <img
                  src={LibWordie}
                  alt="Lib Wordie chemistry artwork"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/50 p-4 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full border border-emerald-300 bg-emerald-400" />
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    Correct Spot
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/50 p-4 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full border border-yellow-200 bg-yellow-300" />
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    In The Term
                  </p>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/50 p-4 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full border border-red-300 bg-red-500" />
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                    No Reaction
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
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Learning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Study by playing
            </h2>
            <p className="mt-3 leading-7 text-slate-200">
              The goal is to make chemistry feel less intimidating and more interactive.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Design
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Modern lab energy
            </h2>
            <p className="mt-3 leading-7 text-slate-200">
              Cool glows, glass panels, and clean visuals make it feel sharp and fresh.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Challenge
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Smart clues
            </h2>
            <p className="mt-3 leading-7 text-slate-200">
              Every guess gives feedback that helps you narrow down the chemistry term.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Start
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Ready to experiment?
            </h2>
            <button
              onClick={() => navigate('/play')}
              className="mt-4 rounded-[1rem] border border-cyan-300 bg-cyan-300 px-5 py-3 font-black text-slate-950 shadow-lg transition hover:scale-[1.03] hover:bg-cyan-200 active:scale-[0.98]"
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
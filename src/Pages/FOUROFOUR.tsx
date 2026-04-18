import { Link } from 'react-router-dom';

const FOUROFOUR = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e3a5f_0%,_#0f172a_45%,_#020617_100%)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 shadow-lg backdrop-blur-sm">
              Lost in the lab
            </div>

            <h1 className="mt-5 text-6xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
              404
            </h1>

            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              This page failed the experiment.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              The route you were looking for is not here. The link may be broken, the
              page may have moved, or this experiment just had no reaction.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-[1.25rem] border border-cyan-300 bg-cyan-300 px-8 py-4 text-lg font-black text-slate-950 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:scale-[1.03] hover:bg-cyan-200 active:scale-[0.98]"
              >
                Back Home
              </Link>

              <Link
                to="/play"
                className="inline-flex items-center justify-center rounded-[1.25rem] border border-white/15 bg-white/10 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition hover:scale-[1.03] hover:bg-white/15 active:scale-[0.98]"
              >
                Go to Game
              </Link>

              <Link
                to="/tomyheart"
                className="inline-flex items-center justify-center rounded-[1.25rem] border border-fuchsia-300/40 bg-fuchsia-400/10 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition hover:scale-[1.03] hover:bg-fuchsia-400/20 active:scale-[0.98]"
              >
                To My Heart
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                  Status
                </p>
                <p className="mt-2 text-2xl font-black text-white">Missing</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  This route could not be found.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                  Best Move
                </p>
                <p className="mt-2 text-2xl font-black text-white">Reset</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Head home and start from a clean route.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-lg backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                  Escape
                </p>
                <p className="mt-2 text-2xl font-black text-white">Play</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Jump straight back into Chem Lab.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-cyan-300/15 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-fuchsia-500/15 blur-2xl" />

              <div className="relative rounded-[2.5rem] border border-white/15 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                        Experiment status
                      </p>
                      <p className="mt-2 text-3xl font-black text-white">
                        Route Not Found
                      </p>
                    </div>

                    <div className="rounded-2xl border border-cyan-300/30 bg-slate-900/60 px-4 py-3 text-center shadow-lg">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                        Error
                      </p>
                      <p className="mt-1 text-2xl font-black text-white">404</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['N', 'bg-emerald-500 border-emerald-300 text-white'],
                      ['O', 'bg-yellow-300 border-yellow-200 text-slate-950'],
                      ['R', 'bg-red-500 border-red-300 text-white'],
                      ['X', 'bg-red-500 border-red-300 text-white'],
                    ].map(([letter, styles], index) => (
                      <div key={index} className="flex justify-center gap-3">
                        {index === 0 && (
                          <>
                            <div
                              className={`flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 text-2xl font-black uppercase shadow-md ${styles}`}
                            >
                              {letter}
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              O
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              P
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              E
                            </div>
                          </>
                        )}

                        {index === 1 && (
                          <>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              F
                            </div>
                            <div
                              className={`flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 text-2xl font-black uppercase shadow-md ${styles}`}
                            >
                              {letter}
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              U
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              T
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              E
                            </div>
                          </>
                        )}

                        {index === 2 && (
                          <>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              T
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              E
                            </div>
                            <div
                              className={`flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 text-2xl font-black uppercase shadow-md ${styles}`}
                            >
                              {letter}
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              M
                            </div>
                          </>
                        )}

                        {index === 3 && (
                          <>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              P
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              A
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-white/10 bg-white/10 text-2xl font-black text-white shadow-md">
                              G
                            </div>
                            <div
                              className={`flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 text-2xl font-black uppercase shadow-md ${styles}`}
                            >
                              {letter}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-cyan-300/20 bg-cyan-400/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                      Hint
                    </p>
                    <p className="mt-2 leading-7 text-slate-200">
                      Head home or jump back into Chem Lab. This route is not part of
                      the experiment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOUROFOUR;
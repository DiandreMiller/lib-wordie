import { Link } from 'react-router-dom';

const FOUROFOUR = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#4d2a12] via-[#8a4f1d] to-[#6b3f1d] text-[#fff3d4]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#d3a62f]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#f3cf74]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#7a3b2e]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border border-[#d9b15f]/40 bg-[#8b5a2b]/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74] shadow-lg backdrop-blur-sm">
              Lost in the library
            </div>

            <h1
              className="mt-5 text-6xl font-black leading-none text-[#fff8e7] sm:text-7xl lg:text-8xl"
              style={{
                fontFamily: 'Playfair Display, serif',
                textShadow: '4px 4px 0px #4d2a12, 8px 8px 18px rgba(0,0,0,0.25)',
              }}
            >
              404
            </h1>

            <h2
              className="mt-4 text-3xl font-black leading-tight text-[#fff8e7] sm:text-4xl"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              This page slipped between the shelves.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f7e6bf]">
                This page isn’t quite where you expected it to be. The link may be off,
                the route may have changed… or this page just used all six guesses and missed.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-[1.25rem] border-2 border-[#f3cf74] bg-[#d3a62f] px-8 py-4 text-lg font-black text-[#3a210f] shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition hover:scale-[1.03] hover:bg-[#e0b43a] active:scale-[0.98]"
              >
                Back Home
              </Link>

              <Link
                to="/play"
                className="inline-flex items-center justify-center rounded-[1.25rem] border-2 border-[#d9b15f]/50 bg-[#8b5a2b]/50 px-8 py-4 text-lg font-bold text-[#fff3d4] shadow-lg backdrop-blur-sm transition hover:scale-[1.03] hover:bg-[#8b5a2b]/70 active:scale-[0.98]"
              >
                Go to Game
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-5 shadow-lg backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                  Status
                </p>
                <p className="mt-2 text-2xl font-black text-[#fff8e7]">Missing</p>
                <p className="mt-2 text-sm leading-6 text-[#f7e6bf]">
                  This route could not be found.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-5 shadow-lg backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                  Best Move
                </p>
                <p className="mt-2 text-2xl font-black text-[#fff8e7]">Reset</p>
                <p className="mt-2 text-sm leading-6 text-[#f7e6bf]">
                  Head home and start from a clean route.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#d9b15f]/30 bg-[#8b5a2b]/45 p-5 shadow-lg backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-[#f3cf74]">
                  Escape
                </p>
                <p className="mt-2 text-2xl font-black text-[#fff8e7]">Play</p>
                <p className="mt-2 text-sm leading-6 text-[#f7e6bf]">
                  Jump straight back into Lib Wordie.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#f3cf74]/15 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#7a3b2e]/25 blur-2xl" />

              <div className="relative rounded-[2.5rem] border-2 border-[#d3a62f]/60 bg-[#8b5a2b]/85 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div className="rounded-[2rem] border border-[#d9b15f]/30 bg-[#6b3f1d]/50 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#f3cf74]">
                        Puzzle status
                      </p>
                      <p
                        className="mt-2 text-3xl font-black text-[#fff8e7]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        Route Not Found
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-[#d3a62f] bg-[#8b5a2b]/70 px-4 py-3 text-center shadow-lg">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#f3cf74]">
                        Error
                      </p>
                      <p className="mt-1 text-2xl font-black text-[#fff8e7]">404</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ['P', 'bg-[#6f8f45] border-[#89a95c] text-[#fff8e7]'],
                      ['A', 'bg-[#d3a62f] border-[#e4bb4c] text-[#2f1d0e]'],
                      ['G', 'bg-[#7a3b2e] border-[#9a5341] text-[#fff8e7]'],
                      ['E', 'bg-[#7a3b2e] border-[#9a5341] text-[#fff8e7]'],
                    ].map(([letter, styles], index) => (
                      <div key={index} className="flex justify-center gap-3">
                        {index === 0 && (
                          <>
                            <div
                              className={`flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 text-2xl font-black uppercase shadow-md ${styles}`}
                            >
                              {letter}
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              O
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              S
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              T
                            </div>
                          </>
                        )}

                        {index === 1 && (
                          <>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              F
                            </div>
                            <div
                              className={`flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 text-2xl font-black uppercase shadow-md ${styles}`}
                            >
                              {letter}
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              U
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              N
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              D
                            </div>
                          </>
                        )}

                        {index === 2 && (
                          <>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              T
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              U
                            </div>
                            <div
                              className={`flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 text-2xl font-black uppercase shadow-md ${styles}`}
                            >
                              {letter}
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              E
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              S
                            </div>
                          </>
                        )}

                        {index === 3 && (
                          <>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              L
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              I
                            </div>
                            <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] border-2 border-[#d8b56a]/35 bg-[#a56a35]/50 text-2xl font-black text-[#fff3d4] shadow-md">
                              N
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

                  <div className="mt-6 rounded-[1.5rem] border-2 border-[#d9b15f]/40 bg-[#6b3f1d]/50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f3cf74]">
                      Hint
                    </p>
                    <p className="mt-2 leading-7 text-[#f7e6bf]">
                      Try heading home or jumping back into the game. This route is not
                      part of the puzzle.
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
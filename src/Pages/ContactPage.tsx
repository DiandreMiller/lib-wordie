// src/Pages/ContactPage.tsx
import { useState, useEffect, useRef } from "react";
import { Mail, Gamepad2 } from "lucide-react";
import { InstagramLogo } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

const sanitizeText = (val: string) =>
  DOMPurify.sanitize(val, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();

const ContactPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const mountedAtRef = useRef(Date.now());

  useEffect(() => {
    const t = setTimeout(() => setCanSubmit(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const encode = () => {
    const params = new URLSearchParams();
    params.append("form-name", "contact");
    params.append("name", sanitizeText(name));
    params.append("email", sanitizeText(email));
    params.append("message", sanitizeText(message));
    return params.toString();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Date.now() - mountedAtRef.current < 3000) {
      alert("Please wait a moment before submitting.");
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(),
      });

      navigate("/email-sent");
    } catch (err) {
      console.error(err);
      alert("Oops, something went wrong. Please try again.");
    }
  };

  return (
    <>
      <title>Contact Us | Lib Wordie</title>
      <link rel="canonical" href="https://libwordie.netlify.app/contact" />
      <meta
        name="description"
        content="Contact Lib Wordie with questions, feedback, bug reports, word suggestions, or ideas for the chemistry word puzzle game."
      />

      <main className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top,_#1e3a5f_0%,_#0f172a_45%,_#020617_100%)] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-6rem] top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute right-[-4rem] top-0 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="absolute bottom-[-5rem] left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute bottom-10 right-20 h-52 w-52 rounded-full bg-sky-400/10 blur-3xl" />
        </div>

        <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 px-6 pt-28 pb-20">
          <header className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Lib Wordie · Chem Lab Edition
            </p>

            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              Contact the Lab
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-slate-200">
              Found a bug, have feedback, want to suggest a chemistry word, or
              have an idea for Lib Wordie? Send a message below.
            </p>
          </header>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            <a
              href="mailto:millerdiandre@gmail.com?subject=Lib%20Wordie%20Inquiry&body=Hi%20Lib%20Wordie%20Team,%0A%0AI%20wanted%20to%20reach%20out%20about...%0A%0A"
              className="group rounded-[1.75rem] border border-white/10 bg-white/10 p-6 text-white shadow-lg backdrop-blur-md transition hover:bg-white/15 hover:shadow-[0_0_28px_rgba(103,232,249,.25)]"
            >
              <div className="flex flex-col items-center gap-3">
                <Mail
                  size={40}
                  className="text-cyan-200 group-hover:text-cyan-300"
                />
                <span className="text-sm tracking-wide">Email</span>
              </div>
            </a>

            <a
              href="/play"
              className="group rounded-[1.75rem] border border-white/10 bg-white/10 p-6 text-white shadow-lg backdrop-blur-md transition hover:bg-white/15 hover:shadow-[0_0_28px_rgba(34,211,238,.25)]"
            >
              <div className="flex flex-col items-center gap-3">
                <Gamepad2
                  size={40}
                  className="text-emerald-300 group-hover:text-emerald-200"
                />
                <span className="text-sm tracking-wide">Play Game</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.75rem] border border-white/10 bg-white/10 p-6 text-white shadow-lg backdrop-blur-md transition hover:bg-white/15 hover:shadow-[0_0_28px_rgba(217,70,239,.25)]"
            >
              <div className="flex flex-col items-center gap-3">
                <InstagramLogo
                  size={40}
                  weight="duotone"
                  className="text-fuchsia-300 group-hover:text-fuchsia-200"
                />
                <span className="text-sm tracking-wide">Instagram</span>
              </div>
            </a>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="w-full rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-md"
          >
            <input type="hidden" name="form-name" value="contact" />

            <p className="hidden">
              <label>
                Don’t fill this out if you’re human:{" "}
                <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-cyan-200">
                  Name
                </span>

                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(sanitizeText(e.target.value))}
                  required
                  maxLength={120}
                  className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-cyan-200">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(sanitizeText(e.target.value))}
                  required
                  maxLength={254}
                  className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block text-sm text-cyan-200">
                Message
              </span>

              <textarea
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(sanitizeText(e.target.value))}
                required
                maxLength={5000}
                className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/25"
                placeholder="Have feedback, a bug report, a chemistry word suggestion, or a fun idea for Lib Wordie? Send it here..."
              />
            </label>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={!canSubmit}
                aria-disabled={!canSubmit}
                className="rounded-[1.25rem] border border-cyan-300 bg-cyan-300 px-8 py-3 font-black text-slate-950 shadow-lg transition hover:scale-[1.03] hover:bg-cyan-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {canSubmit ? "Send Message" : "Please Wait"}
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
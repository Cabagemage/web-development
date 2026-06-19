'use client';

import { useLocale } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter, routing, type Locale } from '@/i18n/routing';

const LANGUAGES: { code: Locale; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'EN' },
  { code: 'ka', label: 'ქართული', native: 'GE' },
  { code: 'ru', label: 'Русский', native: 'RU' }
];

function FlagGlyph({ code }: { code: Locale }) {
  if (code === 'ru') {
    return (
      <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden="true">
        <rect width="20" height="14" fill="#fff" />
        <rect y="4.67" width="20" height="4.66" fill="#0039a6" />
        <rect y="9.33" width="20" height="4.67" fill="#d52b1e" />
      </svg>
    );
  }

  if (code === 'ka') {
    const crosses = [
      [4.5, 2.5],
      [15.5, 2.5],
      [4.5, 11.5],
      [15.5, 11.5]
    ];
    return (
      <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden="true">
        <rect width="20" height="14" fill="#fff" />
        <rect x="8" width="4" height="14" fill="#ff0000" />
        <rect y="5" width="20" height="4" fill="#ff0000" />
        {crosses.map(([cx, cy], i) => (
          <g key={i} fill="#ff0000">
            <rect x={cx - 1.3} y={cy - 0.45} width="2.6" height="0.9" />
            <rect x={cx - 0.45} y={cy - 1.3} width="0.9" height="2.6" />
          </g>
        ))}
      </svg>
    );
  }

  // English — Union Jack
  return (
    <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden="true">
      <rect width="20" height="14" fill="#012169" />
      <path d="M0 0 20 14M20 0 0 14" stroke="#fff" strokeWidth="3" />
      <path d="M0 0 20 14M20 0 0 14" stroke="#c8102e" strokeWidth="1.6" />
      <rect x="7.5" width="5" height="14" fill="#fff" />
      <rect y="4.5" width="20" height="5" fill="#fff" />
      <rect x="8.5" width="3" height="14" fill="#c8102e" />
      <rect y="5.5" width="20" height="3" fill="#c8102e" />
    </svg>
  );
}

function Flag({ code }: { code: Locale }) {
  return (
    <span className="block h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-white/20">
      <FlagGlyph code={code} />
    </span>
  );
}

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function switchTo(next: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: next });
  }

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/10"
      >
        <Flag code={current.code} />
        {current.native}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]/95 p-1.5 shadow-2xl backdrop-blur-xl">
          {routing.locales.map((code) => {
            const lang = LANGUAGES.find((l) => l.code === code)!;
            const active = code === locale;
            return (
              <button
                key={code}
                onClick={() => switchTo(code)}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition ${
                  active
                    ? 'bg-brand-500/20 text-white'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Flag code={lang.code} />
                  {lang.label}
                </span>
                {active && (
                  <svg
                    className="h-4 w-4 text-brand-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

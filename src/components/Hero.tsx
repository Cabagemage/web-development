'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type Stat = { value: string; label: string };

export default function Hero() {
  const t = useTranslations('hero');
  const stats = t.raw('stats') as Stat[];

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-[color:var(--line)] pt-24 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 workbench-bg" />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-16 z-0 hidden h-[540px] w-[660px] opacity-70 lg:block"
        viewBox="0 0 660 540"
        fill="none"
      >
        <g stroke="#263241" strokeWidth="1.5">
          <path d="M80 136H250V76H420" />
          <path d="M80 286H190V226H332V166H542" />
          <path d="M194 392H332V332H542" />
          <path d="M420 76V452" />
          <path d="M542 166V452H420" />
          <rect x="32" y="108" width="96" height="56" rx="8" />
          <rect x="146" y="258" width="96" height="56" rx="8" />
          <rect x="286" y="198" width="96" height="56" rx="8" />
          <rect x="286" y="364" width="96" height="56" rx="8" />
          <rect x="492" y="138" width="100" height="56" rx="8" />
          <rect x="492" y="304" width="100" height="56" rx="8" />
          <rect x="372" y="424" width="96" height="56" rx="8" />
        </g>
        <g stroke="#f4b860" strokeWidth="2">
          <circle cx="80" cy="136" r="6" fill="#090d12" />
          <circle cx="420" cy="76" r="6" fill="#090d12" />
          <circle cx="542" cy="166" r="6" fill="#090d12" />
          <circle cx="420" cy="452" r="6" fill="#090d12" />
        </g>
        <g stroke="#7ddeb8" strokeWidth="2">
          <path d="M64 136H96" />
          <path d="M180 286H210" />
          <path d="M318 226H350" />
          <path d="M318 392H350" />
          <path d="M524 166H560" />
          <path d="M524 332H560" />
          <path d="M400 452H440" />
        </g>
      </svg>

      <div className="container-px relative z-10 pb-16 pt-10 lg:pb-20 lg:pt-16">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-md border border-[color:var(--line)] bg-[rgba(16,24,32,0.8)] px-3 py-2 text-xs font-medium text-slate-300 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[color:var(--mint)]" />
            {t('badge')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 max-w-4xl text-4xl font-bold leading-[1.04] text-white sm:text-6xl md:text-7xl"
          >
            {t('title1')}{' '}
            <span className="text-gradient">{t('titleHighlight')}</span>{' '}
            {t('title2')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              {t('ctaPrimary')}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#work" className="btn-ghost w-full sm:w-auto">
              {t('ctaSecondary')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-[color:var(--line)] bg-[rgba(16,24,32,0.48)] px-4 py-4"
              >
                <div className="font-display text-3xl font-bold text-[color:var(--signal)]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

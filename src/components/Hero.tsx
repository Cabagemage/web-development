'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type Stat = { value: string; label: string };

export default function Hero() {
  const t = useTranslations('hero');
  const stats = t.raw('stats') as Stat[];

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-40 h-[400px] w-[400px] rounded-full bg-accent-500/15 blur-[110px]" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="container-px pb-20 pt-10 text-center sm:pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 opacity-60 blur-md" />
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-white/20 sm:h-28 sm:w-28">
              <Image
                src="/portrait.png"
                alt={t('avatarAlt')}
                fill
                sizes="112px"
                className="object-cover object-[center_85%]"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {t('badge')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-7 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {t('title1')}{' '}
          <span className="text-gradient bg-[length:200%_auto] animate-gradient-pan">
            {t('titleHighlight')}
          </span>{' '}
          {t('title2')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-4 py-5 text-center"
            >
              <div className="text-gradient text-3xl font-bold sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs text-slate-400 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

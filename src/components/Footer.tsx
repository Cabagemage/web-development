'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-px flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 font-display text-sm font-bold text-white">
            C
          </span>
          <span className="font-display font-bold text-white">
            Code<span className="text-gradient">mage</span>
          </span>
        </div>

        <p className="text-center text-sm text-slate-500">
          © {year} Codemage. {t('rights')}
        </p>

        <a
          href="#top"
          className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          {t('backToTop')}
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

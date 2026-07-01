'use client';

import { useTranslations } from 'next-intl';
import Logo from './Logo';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--line)] py-10">
      <div className="container-px flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Logo className="h-8 w-8 rounded-lg" />
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

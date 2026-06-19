'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const LINKS = [
  { id: 'services', key: 'services' },
  { id: 'skills', key: 'skills' },
  { id: 'work', key: 'work' },
  { id: 'process', key: 'process' },
  { id: 'about', key: 'about' },
  { id: 'contact', key: 'contact' }
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#070a14]/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/30">
            A
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            And<span className="text-gradient">rei</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            {t('cta')}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#070a14]/95 backdrop-blur-xl lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5"
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

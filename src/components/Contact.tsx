'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import ContactForm from './ContactForm';

const TELEGRAM_URL = 'https://t.me/Memecounterr';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590966781844';

const CHANNELS = [
  {
    key: 'telegram',
    href: TELEGRAM_URL,
    value: '@Memecounterr',
    fill: false,
    icon: <path d="m22 2-7 20-4-9-9-4 20-7Z" />
  },
  {
    key: 'facebook',
    href: FACEBOOK_URL,
    value: 'Andrei',
    fill: true,
    icon: (
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    )
  }
];

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-[color:var(--line)] bg-[rgba(16,24,32,0.72)] p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative grid gap-12 lg:grid-cols-2">
              <div>
                <span className="mono-label inline-block text-xs text-[color:var(--signal)]">
                  {t('eyebrow')}
                </span>
                <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                  {t('title')}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
                  {t('subtitle')}
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  {CHANNELS.map((c) => (
                    <a
                      key={c.key}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-lg border border-[color:var(--line)] bg-[rgba(9,13,18,0.42)] p-4 transition hover:border-brand-300/60 hover:bg-brand-300/5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[color:var(--line)] text-[color:var(--signal)]">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill={c.fill ? 'currentColor' : 'none'}
                          stroke={c.fill ? 'none' : 'currentColor'}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {c.icon}
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase text-slate-500">
                          {t(`channels.${c.key}`)}
                        </span>
                        <span className="block truncate text-sm font-medium text-white">
                          {c.value}
                        </span>
                      </span>
                      <svg
                        className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-[color:var(--signal)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

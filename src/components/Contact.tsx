'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import ContactForm from './ContactForm';

const EMAIL = 'zdriwmirenek@gmail.com';
const TELEGRAM_URL = 'https://t.me/Memecounterr';
const LINKEDIN_URL = 'https://www.linkedin.com/in/cabagemage/';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590966781844';

const CHANNELS = [
  {
    key: 'email',
    href: `mailto:${EMAIL}`,
    value: EMAIL,
    fill: false,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    )
  },
  {
    key: 'telegram',
    href: TELEGRAM_URL,
    value: '@Memecounterr',
    fill: false,
    icon: <path d="m22 2-7 20-4-9-9-4 20-7Z" />
  },
  {
    key: 'linkedin',
    href: LINKEDIN_URL,
    value: 'in/cabagemage',
    fill: true,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9V9Z" />
    )
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
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/15 blur-[120px]" />
      </div>

      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative grid gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
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
                      target={c.key === 'email' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-white/[0.05]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-white/10">
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
                        <span className="block text-xs uppercase tracking-wide text-slate-500">
                          {t(`channels.${c.key}`)}
                        </span>
                        <span className="block truncate text-sm font-medium text-white">
                          {c.value}
                        </span>
                      </span>
                      <svg
                        className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-brand-300"
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

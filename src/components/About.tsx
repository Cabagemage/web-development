'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const TELEGRAM_URL = 'https://t.me/Memecounterr';
const LINKEDIN_URL = 'https://www.linkedin.com/in/cabagemage/';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590966781844';

function CopyableValue({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement('textarea');
      el.value = value;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`${label}: ${value} — copy`}
      className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-medium text-white transition hover:border-brand-400/40 hover:bg-white/[0.06]"
    >
      <span className="tabular-nums">{value}</span>
      {copied ? (
        <svg
          className="h-4 w-4 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg
          className="h-4 w-4 text-slate-400 transition group-hover:text-brand-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

export default function About() {
  const t = useTranslations('about');

  const details = [
    { label: t('legalFormLabel'), value: t('legalForm'), copyable: false },
    { label: t('idLabel'), value: '305864758', copyable: true },
    { label: t('activityLabel'), value: t('activityValue'), copyable: false },
    { label: t('addressLabel'), value: t('addressValue'), copyable: false }
  ];

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-brand-600/10 blur-[120px]" />
      </div>

      <div className="container-px">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Portrait + intro */}
          <Reveal className="lg:col-span-2">
            <div className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/portrait.png"
                  alt={t('name')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a14] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {t('name')}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-300">
                    {t('role')}
                  </p>
                </div>
              </div>
              <p className="p-6 text-sm leading-relaxed text-slate-400">
                {t('bio')}
              </p>
            </div>
          </Reveal>

          {/* Details + contacts */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Reveal delay={1}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
                <h3 className="text-lg font-semibold text-white">
                  {t('detailsTitle')}
                </h3>
                <dl className="mt-6 divide-y divide-white/5">
                  {details.map((d) => (
                    <div
                      key={d.label}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <dt className="shrink-0 text-xs uppercase tracking-wide text-slate-500 sm:w-44">
                        {d.label}
                      </dt>
                      <dd className="text-sm font-medium text-white sm:text-right">
                        {d.copyable ? (
                          <CopyableValue value={d.value} label={d.label} />
                        ) : (
                          d.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
                <h3 className="text-lg font-semibold text-white">
                  {t('contactsTitle')}
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-white/[0.05]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-white/10">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 2-7 20-4-9-9-4 20-7Z" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-slate-500">
                        Telegram
                      </span>
                      <span className="block truncate text-sm font-medium text-white">
                        @Memecounterr
                      </span>
                    </span>
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-white/[0.05]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-white/10">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9V9Z" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-slate-500">
                        LinkedIn
                      </span>
                      <span className="block truncate text-sm font-medium text-white">
                        in/cabagemage
                      </span>
                    </span>
                  </a>

                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-brand-400/40 hover:bg-white/[0.05]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-white/10">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-slate-500">
                        Facebook
                      </span>
                      <span className="block truncate text-sm font-medium text-white">
                        Andrei Zaitsev
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

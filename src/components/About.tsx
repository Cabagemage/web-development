'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function CopyableValue({
  value,
  ariaLabel,
  copiedLabel
}: {
  value: string;
  ariaLabel: string;
  copiedLabel: string;
}) {
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
      aria-label={ariaLabel}
      className="group inline-flex items-center gap-2 rounded-md border border-[color:var(--line)] bg-[rgba(9,13,18,0.5)] px-2.5 py-1 font-medium text-white transition hover:border-brand-300/60 hover:bg-brand-300/5"
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
          className="h-4 w-4 text-slate-400 transition group-hover:text-[color:var(--signal)]"
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
      <span className="sr-only" aria-live="polite">
        {copied ? copiedLabel : ''}
      </span>
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
      <div className="container-px">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-lg border border-[color:var(--line)] bg-[rgba(16,24,32,0.72)] p-5 sm:p-6">
              <div className="relative overflow-hidden rounded-lg border border-[color:var(--line)] bg-[rgba(9,13,18,0.74)] p-6">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="relative">
                  <div className="mono-label text-[10px] text-slate-500">
                    {t('profileLabel')}
                  </div>
                  <div
                    aria-hidden="true"
                    className="mt-10 font-display text-8xl font-bold leading-none text-[color:var(--signal)]"
                  >
                    A
                  </div>
                  <div className="mt-8 border-t border-[color:var(--line)] pt-5">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {t('name')}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[color:var(--mint)]">
                      {t('role')}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                {t('bio')}
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-3">
            <Reveal delay={1}>
              <div className="rounded-lg border border-[color:var(--line)] bg-[rgba(16,24,32,0.72)] p-7 sm:p-9">
                <h3 className="text-lg font-semibold text-white">
                  {t('detailsTitle')}
                </h3>
                <dl className="mt-6 divide-y divide-[rgba(38,50,65,0.8)]">
                  {details.map((d) => (
                    <div
                      key={d.label}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <dt className="shrink-0 text-xs uppercase text-slate-500 sm:w-44">
                        {d.label}
                      </dt>
                      <dd className="text-sm font-medium text-white sm:text-right">
                        {d.copyable ? (
                          <CopyableValue
                            value={d.value}
                            ariaLabel={t('copyValueLabel', {
                              label: d.label,
                              value: d.value
                            })}
                            copiedLabel={t('copiedLabel')}
                          />
                        ) : (
                          d.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

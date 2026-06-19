'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Step = { title: string; desc: string };

export default function Process() {
  const t = useTranslations('process');
  const steps = t.raw('steps') as Step[];

  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="relative mt-14">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-500/50 via-accent-500/30 to-transparent md:left-1/2 md:block" />

          <div className="grid gap-6 md:grid-cols-2 md:gap-x-16 md:gap-y-10">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i % 2}>
                <div
                  className={`relative flex gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 ${
                    i % 2 === 1 ? 'md:mt-12' : ''
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/25">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

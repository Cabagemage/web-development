'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Group = { title: string; items: string[] };

export default function Skills() {
  const t = useTranslations('skills');
  const groups = t.raw('groups') as Group[];

  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <div className="container-px">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7">
                <h3 className="text-base font-semibold text-brand-300">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-slate-300 transition hover:border-brand-400/40 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

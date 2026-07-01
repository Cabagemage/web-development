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
      <div className="container-px">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i}>
              <div className="h-full rounded-lg border border-[color:var(--line)] bg-[rgba(16,24,32,0.66)] p-6">
                <h3 className="mono-label text-xs text-[color:var(--signal)]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[color:var(--line)] bg-[rgba(9,13,18,0.42)] px-3 py-1.5 text-sm text-slate-300 transition hover:border-brand-300/60 hover:text-white"
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

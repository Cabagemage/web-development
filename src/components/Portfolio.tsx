'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Item = { title: string; category: string; desc: string; tags: string[] };

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const items = t.raw('items') as Item[];

  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i % 2}>
              <article className="group h-full overflow-hidden rounded-lg border border-[color:var(--line)] bg-[rgba(16,24,32,0.66)] transition duration-200 hover:border-brand-300/60">
                <div className="flex items-center justify-between gap-4 border-b border-[color:var(--line)] bg-[rgba(9,13,18,0.35)] px-5 py-4">
                  <span className="mono-label text-[10px] text-[color:var(--signal)]">
                    case {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-right text-xs font-medium text-slate-400">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[color:var(--line)] bg-[rgba(9,13,18,0.42)] px-2.5 py-1 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

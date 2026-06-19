'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Item = { title: string; category: string; desc: string; tags: string[] };

const GRADIENTS = [
  'from-brand-500/30 to-accent-500/30',
  'from-fuchsia-500/30 to-brand-500/30',
  'from-accent-500/30 to-emerald-500/30',
  'from-orange-500/30 to-fuchsia-500/30',
  'from-amber-500/30 to-red-500/30'
];

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
              <div className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${
                    GRADIENTS[i % GRADIENTS.length]
                  } sm:h-56`}
                >
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <span className="relative font-display text-5xl font-bold text-white/80">
                    {item.title.charAt(0)}
                  </span>
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="p-7">
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
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

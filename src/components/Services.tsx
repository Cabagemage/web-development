'use client';

import { useTranslations } from 'next-intl';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Item = { title: string; desc: string };

const ICONS = [
  // Web apps
  <path key="0" d="M3 9h18M9 21V9M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />,
  // Frontend / UI
  <>
    <rect key="a" x="3" y="3" width="18" height="18" rx="2" />
    <path key="b" d="M3 9h18M9 21V9" />
  </>,
  // Backend / API
  <>
    <ellipse key="a" cx="12" cy="5" rx="9" ry="3" />
    <path key="b" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path key="c" d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </>,
  // E-commerce
  <>
    <circle key="a" cx="9" cy="21" r="1" />
    <circle key="b" cx="20" cy="21" r="1" />
    <path key="c" d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </>,
  // Performance / SEO
  <>
    <path key="a" d="m13 2-3 7h6l-3 7" />
    <circle key="b" cx="12" cy="12" r="10" />
  </>,
  // Maintenance / support
  <path key="0" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
];

export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as Item[];

  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i % 3}>
              <div className="group h-full rounded-lg border border-[color:var(--line)] bg-[rgba(16,24,32,0.66)] p-6 transition duration-200 hover:border-brand-300/60 hover:bg-brand-300/5">
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[color:var(--line)] bg-[rgba(9,13,18,0.46)] text-[color:var(--signal)]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {ICONS[i % ICONS.length]}
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

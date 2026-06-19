import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <Reveal>
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

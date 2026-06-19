import { useId } from 'react';
import { LOGO_COLORS } from '@/lib/logo';

type LogoProps = {
  className?: string;
  title?: string;
};

export default function Logo({ className, title = 'Codemage' }: LogoProps) {
  const gid = useId();

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gid}
          x1="4"
          y1="4"
          x2="44"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={LOGO_COLORS.from} />
          <stop offset="0.55" stopColor={LOGO_COLORS.via} />
          <stop offset="1" stopColor={LOGO_COLORS.to} />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill={`url(#${gid})`} />
      <path
        d="M29.45 16.72 A 9.5 9.5 0 1 0 29.45 32.28"
        stroke="white"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path
        d="M36 6 Q36 11.5 41.5 11.5 Q36 11.5 36 17 Q36 11.5 30.5 11.5 Q36 11.5 36 6 Z"
        fill="white"
      />
    </svg>
  );
}

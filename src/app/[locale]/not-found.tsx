'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('nav');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-gradient font-display text-7xl font-bold sm:text-9xl">
        404
      </p>
      <p className="mt-4 max-w-md text-slate-400">
        Page not found · გვერდი ვერ მოიძებნა · Страница не найдена
      </p>
      <Link href="/" className="btn-primary mt-8">
        {t('cta')}
      </Link>
    </main>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-gradient font-display text-7xl font-bold sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-white">{t('title')}</h1>
      <p className="mt-3 max-w-md text-slate-400">{t('description')}</p>
      <Link href="/" className="btn-primary mt-8">
        {t('home')}
      </Link>
    </main>
  );
}

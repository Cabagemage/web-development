'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<Status>('idle');

  const projectTypeOptions = t.raw('projectTypeOptions') as string[];
  const budgetOptions = t.raw('budgetOptions') as string[];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      projectType: String(formData.get('projectType') ?? ''),
      budget: String(formData.get('budget') ?? ''),
      message: String(formData.get('message') ?? ''),
      botcheck: formData.get('botcheck') ? true : false
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-lg border border-[color:var(--line)] bg-[rgba(9,13,18,0.54)] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-300/70 focus:bg-[rgba(9,13,18,0.78)] focus:ring-2 focus:ring-brand-300/15';
  const selectClass = `${inputClass} cursor-pointer appearance-none pr-10`;

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-[color:var(--line)] bg-[rgba(9,13,18,0.5)] p-6 sm:p-8"
    >
      <h3 className="text-lg font-semibold text-white">{t('heading')}</h3>

      {/* Honeypot anti-spam field */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-5 flex flex-col gap-4">
        <div>
          <label htmlFor="cf-name" className="sr-only">
            {t('name')}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder={t('namePlaceholder')}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cf-email" className="sr-only">
            {t('email')}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder={t('emailPlaceholder')}
            className={inputClass}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative">
            <label htmlFor="cf-projectType" className="sr-only">
              {t('projectType')}
            </label>
            <select
              id="cf-projectType"
              name="projectType"
              defaultValue=""
              className={selectClass}
            >
              <option value="" className="bg-[#101820]">
                {t('projectType')}
              </option>
              {projectTypeOptions.map((option) => (
                <option key={option} value={option} className="bg-[#101820]">
                  {option}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <div className="relative">
            <label htmlFor="cf-budget" className="sr-only">
              {t('budget')}
            </label>
            <select
              id="cf-budget"
              name="budget"
              defaultValue=""
              className={selectClass}
            >
              <option value="" className="bg-[#101820]">
                {t('budget')}
              </option>
              {budgetOptions.map((option) => (
                <option key={option} value={option} className="bg-[#101820]">
                  {option}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <div>
          <label htmlFor="cf-message" className="sr-only">
            {t('message')}
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder={t('messagePlaceholder')}
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 12a9 9 0 1 1-6.22-8.56" strokeLinecap="round" />
              </svg>
              {t('sending')}
            </>
          ) : (
            <>
              {t('submit')}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m22 2-7 20-4-9-9-4 20-7Z" />
              </svg>
            </>
          )}
        </button>

        {status === 'success' && (
          <p
            role="status"
            className="flex items-start gap-2 text-sm text-emerald-400"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {t('success')}
          </p>
        )}
        {status === 'error' && (
          <p
            role="alert"
            className="flex items-start gap-2 text-sm text-red-400"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            {t('error')}
          </p>
        )}
      </div>
    </form>
  );
}

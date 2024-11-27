import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  // const locale = 'en';
  const _cookie = (await cookies()).get('NEXT_LOCALE')?.value ?? 'en';

  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  // Ensure that a valid locale is used
  if (locale === undefined) {
    locale = _cookie;
  }

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`./${locale}.json`)).default
  };
});

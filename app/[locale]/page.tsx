'use client';
import { useTranslations } from 'next-intl';

import I18nLink from "@/components/i18nLink";

const I18n = () => {
  const t = useTranslations('HomePage');

  return (
    <>
      <h1>{t('title')}</h1>
    </>
  )

}

export default function Home() {
  return (
    <>
      <I18n />
      <I18nLink />
    </>
  );
}

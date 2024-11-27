'use client'
import React from 'react'
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';


const I18nLink = () => {

  const t = useTranslations('HomePage');
  const strUser = 'JK'

  return (
    <div>
      <Link href="/" locale='en'
      >{t('changeLanguage', {
        user: strUser
      })}{'change en'}</Link>
      <br />
      <Link href="/" locale='zh-TW'>{t('changeLanguage', {
        user: strUser
      })}</Link>
    </div>
  )
}

export default I18nLink

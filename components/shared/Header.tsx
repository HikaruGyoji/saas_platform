'use client';
import { transformationTypes } from '@/constants';
import { useLang } from '@/hooks/lang/useLang';
import React from 'react';

const Header = ({
  title,
  subtitle,
  type,
}: {
  title?: string;
  subtitle?: string;
  type?: string;
}) => {
  const lang = useLang(); // `ja` or `en`

  // @ts-ignore
  const transformation = transformationTypes[type];
  title =
    lang === 'en' ? transformation?.titleEn : transformation?.titleJa || title;
  subtitle =
    (lang === 'en' ? transformation?.subTitleEn : transformation?.subTitleJa) ||
    subtitle;

  return (
    <>
      <h2 className='h2-bold text-dark-600'>{title}</h2>
      {subtitle && <p className='p-16-regular mt-4'>{subtitle}</p>}
    </>
  );
};

export default Header;

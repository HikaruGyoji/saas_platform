'use client';
import React from 'react';
import { useLang } from '@/hooks/lang/useLang';

const TransformedLangH3: React.FC = () => {
  const lang = useLang(); // `ja` or `en`

  return (
    <h3 className='h3-bold text-dark-600'>
      {lang === 'en' ? 'Transformed' : '変換後'}
    </h3>
  );
};

export default TransformedLangH3;

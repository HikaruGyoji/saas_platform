'use client';
import React from 'react';
import { useLang } from '@/hooks/lang/useLang';

const OriginalLangH3: React.FC = () => {
  const lang = useLang(); // `ja` or `en`

  return (
    <h3 className='h3-bold text-dark-600'>
      {lang === 'en' ? 'Original' : 'オリジナル'}
    </h3>
  );
};

export default OriginalLangH3;

'use client';
import React from 'react';
import Header from '@/components/shared/Header';
import { useLang } from '@/hooks/lang/useLang';

const CreditHeader: React.FC = () => {
  const lang = useLang(); // `ja` or `en`

  return (
    <Header
      title={lang === 'en' ? 'Buy Credits' : 'クレジットを購入'}
      subtitle={
        lang === 'en'
          ? 'Choose a credit package that suits your needs!'
          : 'ご自身のニーズに合ったクレジットパッケージをお選びください！'
      }
    />
  );
};

export default CreditHeader;

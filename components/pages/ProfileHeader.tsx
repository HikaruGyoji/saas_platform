'use client';
import React from 'react';
import Header from '@/components/shared/Header';
import { useLang } from '@/hooks/lang/useLang';

const ProfileHeader: React.FC = () => {
  const lang = useLang(); // `ja` or `en`

  return <Header title={lang === 'en' ? 'Profile' : 'プロフィール'} />;
};

export default ProfileHeader;

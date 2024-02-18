'use client';
// ProfileSection.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getUserImages } from '@/lib/actions/image.actions';
import { getUserById } from '@/lib/actions/user.actions';
import { useLang } from '@/hooks/lang/useLang';

interface User {
  _id: string;
  creditBalance: number;
}

interface ImageData {
  data: any[]; // データ型は適切なものに置き換えてください
  // 他に必要なプロパティがあればここに追加してください
}

interface ProfileSectionProps {
  userId: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [images, setImages] = useState<ImageData | null>(null);
  const lang = useLang(); // `ja` or `en`

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getUserById(userId);
      setUser(fetchedUser);

      const fetchedImages = await getUserImages({
        page: 1,
        userId: fetchedUser._id,
      });
      setImages(fetchedImages || null); // fetchedImages が undefined の場合は null をセットする
    };

    fetchData();
  }, [userId]);

  if (!user || !images) {
    return null; // or loading state
  }

  return (
    <section className='profile'>
      {/* Credit Balance */}
      <div className='profile-balance'>
        <p className='p-14-medium md:p-16-medium'>
          {lang === 'en' ? 'CREDITS AVAILABLE' : '利用可能なクレジット'}
        </p>
        <div className='mt-4 flex items-center gap-4'>
          <Image
            src='/assets/icons/coins.svg'
            alt='coins'
            width={50}
            height={50}
            className='size-9 md:size-12'
          />
          <h2 className='h2-bold text-dark-600'>{user.creditBalance}</h2>
        </div>
      </div>

      {/* Image Manipulation Details */}
      <div className='profile-image-manipulation'>
        <p className='p-14-medium md:p-16-medium'>
          {lang === 'en' ? 'IMAGE MANIPULATION DONE' : '画像加工完了'}
        </p>
        <div className='mt-4 flex items-center gap-4'>
          <Image
            src='/assets/icons/photo.svg'
            alt='coins'
            width={50}
            height={50}
            className='size-9 md:size-12'
          />
          <h2 className='h2-bold text-dark-600'>{images.data.length}</h2>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

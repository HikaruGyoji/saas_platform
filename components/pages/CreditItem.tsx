'use client';
// CreditItem.js
import React from 'react';
import { SignedIn } from '@clerk/nextjs';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Checkout from '@/components/shared/Checkout';
import { useLang } from '@/hooks/lang/useLang';

interface CreditItemProps {
  plan: {
    nameEn: string;
    nameJa: string;
    icon: string;
    price: number;
    credits: number;
    inclusions: {
      labelEn: string;
      labelJa: string;
      isIncluded: boolean;
    }[];
  };
  user: string;
}

const CreditItem: React.FC<CreditItemProps> = ({ plan, user }) => {
  const lang = useLang(); // `ja` or `en`

  return (
    <li className='credits-item'>
      <div className='flex-center flex-col gap-3'>
        <Image src={plan.icon} alt='check' width={50} height={50} />
        <p className='p-20-semibold mt-2 text-purple-500'>
          {lang === 'en' ? plan.nameEn : plan.nameJa}
        </p>
        <p className='h1-semibold text-dark-600'>${plan.price}</p>
        <p className='p-16-regular'>{plan.credits} Credits</p>
      </div>

      {/* Inclusions */}
      <ul className='flex flex-col gap-5 py-9'>
        {plan.inclusions.map((inclusion, index) => (
          <li key={index} className='flex items-center gap-4'>
            <Image
              src={`/assets/icons/${
                inclusion.isIncluded ? 'check.svg' : 'cross.svg'
              }`}
              alt='check'
              width={24}
              height={24}
            />
            <p className='p-16-regular'>
              {lang === 'en' ? inclusion.labelEn : inclusion.labelJa}
            </p>
          </li>
        ))}
      </ul>

      <SignedIn>
        {user && (
          <Checkout
            plan={lang === 'en' ? plan.nameEn : plan.nameJa}
            amount={plan.price}
            credits={plan.credits}
            buyerId={user}
          />
        )}
      </SignedIn>
    </li>
  );
};

export default CreditItem;

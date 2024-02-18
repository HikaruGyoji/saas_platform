// CreditComponent.js
import React from 'react';
import { SignedIn, auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { plans } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';
import Checkout from '@/components/shared/Checkout';
import CreditHeader from '@/components/pages/CreditHeader';
import CreditItem from '@/components/pages/CreditItem';

const CreditComponent = async () => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const user = await getUserById(userId);

  return (
    <>
      <CreditHeader />

      <section>
        <ul className='credits-list'>
          {plans.map((plan) => (
            <CreditItem key={plan.name} plan={plan} user={user} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default CreditComponent;

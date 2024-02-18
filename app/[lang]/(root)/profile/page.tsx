// Profile.tsx
import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import ProfileHeader from '@/components/pages/ProfileHeader';
import ProfileSection from '@/components/pages/ProfileSection';
import CollectionSection from '@/components/pages/CollectionSection';

interface ProfileProps {
  searchParams: {
    page?: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ searchParams }) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
    return null; // or loading state
  }

  return (
    <>
      <ProfileHeader />
      <ProfileSection userId={userId} />
      <CollectionSection images={[]} totalPages={1} page={page} />
    </>
  );
};

export default Profile;

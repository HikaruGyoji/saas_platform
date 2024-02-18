// CollectionSection.tsx
import React from 'react';
import { Collection } from '@/components/shared/Collection';

interface CollectionSectionProps {
  images: any[]; // データ型は適切なものに置き換えてください
  totalPages: number;
  page: number;
}

const CollectionSection: React.FC<CollectionSectionProps> = ({
  images,
  totalPages,
  page,
}) => {
  return (
    <section className='mt-8 md:mt-14'>
      <Collection images={images} totalPages={totalPages} page={page} />
    </section>
  );
};

export default CollectionSection;

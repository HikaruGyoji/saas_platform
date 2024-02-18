'use client';
import { LangLink } from '@/components/shared/UseLangLink';
import { navLinks } from '@/constants';
import Image from 'next/image';

// ページ共通
import { useLang } from '@/hooks/lang/useLang';

const HomeSection = () => {
  const lang = useLang(); // `ja` or `en`

  return (
    <section className='home'>
      <h1 className='home-heading'>
        {lang === 'en'
          ? 'Unleash Your Creative Vision'
          : 'あなたを創造の世界へ'}
      </h1>
      <ul className='flex-center w-full gap-20'>
        {navLinks.slice(1, 5).map((link) => (
          <LangLink
            key={link.route}
            href={link.route}
            className='flex-center flex-col gap-2'
          >
            <li className='flex-center w-fit rounded-full bg-white p-4'>
              <Image src={link.icon} alt='image' width={24} height={24} />
            </li>
            <p className='p-14-medium text-center text-white'>
              {lang === 'en' ? link.labelEn : link.labelJa}
            </p>
          </LangLink>
        ))}
      </ul>
    </section>
  );
};

export default HomeSection;

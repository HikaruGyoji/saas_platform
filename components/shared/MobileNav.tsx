'use client';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { LangLink } from './UseLangLink';

// ページ共通
import { useTranslation } from '@/hooks/i18n/useTranslation';
import { useLang } from '@/hooks/lang/useLang';
import { setMetadata } from '@/utils/setMetadata';

// ページ固有
import { topTranslation as translation } from '@/_translations/index';

// metaの設定
export const generateMetadata = setMetadata(translation);

const MobileNav = () => {
  const pathname = usePathname();
  const lang = useLang(); // `ja` or `en`
  const { t } = useTranslation({ lang, translation });
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const handleLanguageSwitch = (newLang: string) => {
    if (newLang !== lang) {
      const newUrl = `${origin}/${newLang}${currentUrl.substring(
        origin.length + 3
      )}`;
      window.location.href = newUrl;
    }
  };

  return (
    <header className='header'>
      <LangLink href='/' className='flex items-center gap-2 md:py-2'>
        <Image
          src='/assets/images/logo-text.svg'
          alt='logo'
          width={180}
          height={28}
        />
      </LangLink>

      <nav className='flex gap-2'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />

          <Sheet>
            <SheetTrigger>
              <Image
                src='/assets/icons/menu.svg'
                alt='menu'
                width={32}
                height={32}
                className='cursor-pointer'
              />
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
              <>
                <div className='flex gap-1'>
                  <Image
                    src='/assets/images/logo-text.svg'
                    alt='logo'
                    width={152}
                    height={23}
                  />
                  <div className='flex flex-center'>
                    <Button
                      onClick={() => handleLanguageSwitch('en')}
                      className={`mr-1 px-[4px] h-6 rounded-2xl ${
                        lang === 'en' ? '' : 'disabled'
                      }`}
                      style={{ opacity: lang === 'en' ? 1 : 0.5 }}
                    >
                      en
                    </Button>
                    <Button
                      onClick={() => handleLanguageSwitch('ja')}
                      className={`px-[6px] h-6 rounded-2xl ${
                        lang === 'ja' ? '' : 'disabled'
                      }`}
                      style={{ opacity: lang === 'ja' ? 1 : 0.5 }}
                    >
                      ja
                    </Button>
                  </div>
                </div>
                <ul className='header-nav_elements'>
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive && 'gradient-text'
                        } p-18 flex whitespace-nowrap text-dark-700`}
                      >
                        <LangLink
                          className='sidebar-link cursor-pointer'
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            alt='logo'
                            width={24}
                            height={24}
                          />
                          {lang === 'en' ? link.labelEn : link.labelJa}{' '}
                        </LangLink>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className='button bg-purple-gradient bg-cover'>
            <LangLink href='/sign-in'>Login</LangLink>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;

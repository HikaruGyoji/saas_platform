'use client';
import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';

// ページ共通
import { useTranslation } from '@/hooks/i18n/useTranslation';
import { useLang } from '@/hooks/lang/useLang';
import { setMetadata } from '@/utils/setMetadata';
import { LangLink } from '@/components/shared/UseLangLink';

// ページ固有
import { topTranslation as translation } from '@/_translations/index';

// metaの設定
export const generateMetadata = setMetadata(translation);

function Sidebar() {
  const pathname = usePathname();
  const lang = useLang(); // `ja` or `en`
  const { t } = useTranslation({ lang, translation });
  const handleLanguageSwitch = () => {
    const currentUrl = window.location.href;
    const origin = window.location.origin;
    const newLang = lang === 'en' ? '/ja/' : '/en/';
    const newUrl = origin + newLang + currentUrl.substring(origin.length + 3);
    window.location.href = newUrl;
  };

  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Button onClick={handleLanguageSwitch}>
          {lang === 'en' ? '日本語' : 'English'}
        </Button>
        <LangLink href='/' className='sidebar-logo'>
          <Image
            src='/assets/images/logo-text.svg'
            alt='logo'
            width={180}
            height={28}
          />
        </LangLink>

        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-purple-gradient text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <LangLink className='sidebar-link' href={link.route}>
                      <Image
                        src={link.icon}
                        alt='logo'
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {lang === 'en' ? link.labelEn : link.labelJa}
                    </LangLink>
                  </li>
                );
              })}
            </ul>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-purple-gradient text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <LangLink className='sidebar-link' href={link.route}>
                      <Image
                        src={link.icon}
                        alt='logo'
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {lang === 'en' ? link.labelEn : link.labelJa}
                    </LangLink>
                  </li>
                );
              })}

              <li className='flex-center cursor-pointer gap-2 p-4'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <LangLink href='/sign-in'>Login</LangLink>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;

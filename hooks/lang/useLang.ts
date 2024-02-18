'use client';
import { LangContext } from '@/providers/LangProvider';
import { useContext } from 'react';

export function useLang() {
  const lang = useContext(LangContext); // "ja" | "en" | null
  if (lang === null)
    throw new Error('useLang must be used within a LangProvider');
  return lang; // "ja" | "en"
}

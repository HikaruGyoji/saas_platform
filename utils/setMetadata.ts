import { Languages, TranslationDef } from '@/hooks/i18n/useTranslation';

export const setMetadata =
  (def: TranslationDef) =>
  ({
    params,
  }: {
    params: {
      lang: Languages;
    };
  }) => {
    const { title, description } = def[params.lang].meta;
    return {
      title,
      description,
    };
  };

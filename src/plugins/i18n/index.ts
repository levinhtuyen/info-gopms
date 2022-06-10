import { createI18n, useI18n as useVueI18n } from 'vue-i18n';
import enMessages from './en-US.json';
import viMessages from './vi-VN.json';

export type TLocale = 'en-US' | 'vi-VN';

export type TMessageSchema = typeof enMessages;

export const i18n = createI18n<[TMessageSchema], TLocale>({
  locale: localStorage.getItem('locale') ?? 'vi-VN',
  fallbackLocale: 'vi-VN',
  messages: {
    'en-US': enMessages,
    'vi-VN': viMessages,
  },
});

export const useI18n = () => {
  const i18n = useVueI18n<[TMessageSchema], TLocale>();
  const toggleLocale = () => {
    if (i18n.locale.value === 'en-US') i18n.locale.value = 'vi-VN';
    else i18n.locale.value = 'en-US';
  };

  return { ...i18n, toggleLocale };
};

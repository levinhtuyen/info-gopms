import { ID } from '@/constants/ids';

export const scrollTo = (id: ID) => {
  if (id === ID.home) {
    window.scroll({ top: 0, behavior: 'smooth' });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

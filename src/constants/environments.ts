export const isProductionEnv =
  import.meta.env.NODE_ENV === 'production' &&
  Boolean(import.meta.env.VUE_APP_IS_STAGING) === false;

export const isStagingEnv =
  import.meta.env.NODE_ENV === 'production' && Boolean(import.meta.env.VUE_APP_IS_STAGING) === true;

export const isDevEnv = import.meta.env.NODE_ENV === 'development';

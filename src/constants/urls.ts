const DEV_URL = 'https://staging-api.gopms.io/api/v1';
const PROD_URL = 'https://production-api.gopms.io/api/v1';
export const BASE_URL = import.meta.env.MODE === 'production' ? PROD_URL : DEV_URL;

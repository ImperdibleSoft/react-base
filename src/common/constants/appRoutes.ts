// Generic
export const HOME = '/';
export const ABOUT = '/about';
export const PRIVACY_POLICY = '/privacy-policy';
export const COOKIES_POLICY = '/cookies-policy';
export const MAILING_POLICY = '/mailing-policy';
export const TERMS_AND_CONDITIONS = '/terms-and-conditions';

export const REGISTER = '/register';
export const VALIDATE_EMAIL = '/validate-email/:email?/:code?';
export const LOGIN = '/login';
export const RESET_PASSWORD = '/reset-password/:email?/:code?';
export const CONTACT = '/contact';

// Personal
export const FEEDBACK = '/feedback';
const ACCOUNT_BASE = '/account';
export const ACCOUNT = `${ACCOUNT_BASE}/:tab?/:id?`;
export const SESSIONS = `${ACCOUNT_BASE}/sessions`;
export const PAYMENT_METHODS = `${ACCOUNT_BASE}/payment-methods`;
export const PAYMENT_METHOD = `${PAYMENT_METHODS}/:id`;
export const RESET_EMAIL = '/reset-email/:email/:code';
export const LOGOUT = '/logout';

// Shopping cart
export const SUBSCRIPTIONS = '/subscriptions';
export const ACTIVATE_SUBSCRIPTION = `${SUBSCRIPTIONS}/activate`;

// Users
export const USERS = '/users';
export const USER_PROFILE = `${USERS}/:id`;

// Companies
export const COMPANIES = '/companies';
export const COMPANY_NEW = `${COMPANIES}/new`;
export const COMPANY = `${COMPANIES}/:slug`;
export const COMPANY_SETTINGS = `${COMPANY}/settings/:tab?`;

// Activities
export const COMPANY_ACTIVITIES = `${COMPANY}/activities`;

// Roles
export const COMPANY_ROLES = `${COMPANY}/roles`;
export const COMPANY_ROLE_NEW = `${COMPANY_ROLES}/new`;
export const COMPANY_ROLE = `${COMPANY_ROLES}/:id`;

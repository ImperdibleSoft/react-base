import { isProduction, isPre } from '../utils/platforms';

export const BASE_URL = isProduction()
  ? '//api.man-app.com/?endpoint='
  : isPre()
  ? '//dev-api.man-app.com/?endpoint='
  : '//localhost:8081/';
// : '//api.man-app.local:8081/';

// Generic
export const CHECK = `${BASE_URL}check`;
export const SUBSCRIPTIONS = `${BASE_URL}subscriptions`;
export const REGISTER = `${BASE_URL}register`;
export const VALIDATE_EMAIL = `${BASE_URL}validate-email`;
export const LOGIN = `${BASE_URL}login`;
export const SESSIONS = `${BASE_URL}sessions`;
export const RESET_PASSWORD = `${BASE_URL}reset-password/:email?`;
export const CONTACT = `${BASE_URL}contact`;

// Personal
export const FEEDBACK = `${BASE_URL}feedback`;
export const ACCOUNT = `${BASE_URL}account`;
export const PAYMENT_METHODS = `${BASE_URL}payment-methods/:id?`;
export const SOCIAL = `${BASE_URL}social`;
export const RESET_EMAIL = `${BASE_URL}reset-email`;
export const LOGOUT = `${BASE_URL}logout`;

// Users
export const USER_PROFILE = `${BASE_URL}user`;

// Companies
export const COMPANIES = `${BASE_URL}companies`;
export const COMPANY = `${COMPANIES}/:slug`;

// Modules
export const MODULES = `${BASE_URL}modules`;

// Activities
export const ACTIVITIES = `${BASE_URL}activities/:laterThan?`;

// Roles
export const ROLES = `${BASE_URL}roles/:idCompany`;

// Misc
export const UPLOAD = `${BASE_URL}upload/:type/:resource/:id`;

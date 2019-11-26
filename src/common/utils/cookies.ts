import { log } from './logger';

const getBrowserCookie = (key: string) => {
  const allCookies = document.cookie.split(';').map(c => {
    const cookie = c.split('=');
    return {
      name: cookie[0] ? cookie[0].trim() : '',
      value: cookie[1] ? cookie[1].trim() : '',
    };
  });

  const selectedCookie = allCookies.find(c => c.name === key) || { name: key, value: '' };

  return selectedCookie.value;
};

export const setCookie = (key: string, value: string) => {
  if (localStorage) {
    log(`Setting <${key}> to localStorage: <${value}>`);
    localStorage.setItem(key, value);
  } else {
    log(`Setting <${key}> to in document.cookies: <${value}>`);
    document.cookie = `${key}=${value}`;
  }
};

export const getCookie = (key: string) => {
  const value = localStorage.getItem(key);

  if (value) {
    log(`Current <${key}> from localStorage: <${value}>`);
    return value;
  }

  const cookieValue = getBrowserCookie(key);
  log(`Current <${key}> from localStorage: <${cookieValue}>`);
  return cookieValue;
};

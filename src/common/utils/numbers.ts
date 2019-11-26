export const forceTwoDecimals = (num: number) => num.toFixed(2);

export const currency = (num: number, curr = '€') => (!!num ? `${forceTwoDecimals(num)} ${curr}` : 'Free');

export const parseCardNumber = (cardNumber: string) => {
  const parts = cardNumber.split('');
  let result = '';
  parts.forEach((num, index) => {
    if ((index + 1) % 4 === 0) {
      result += `${num} `;
    } else {
      result += num;
    }
  });

  return result;
};

export const obfuscateCardNumber = (cardNumber: string) => {
  const substr = cardNumber.substr(cardNumber.length - 4, 4);

  return parseCardNumber(`------------${substr}`);
};

import { Currency } from '../types/common';

function transformPrice(price: number, currencyType: Currency) {
  switch (currencyType) {
    case 'Rub': {
      return `${price} ₽`;
    }
    case 'Usd': {
      return `${Math.round(price / 60.53)} $`;
    }
    case 'Eur': {
      return `${Math.round(price / 62.95)} €`;
    }
    default:
      return `${price} ₽`;
  }
}

export default transformPrice;

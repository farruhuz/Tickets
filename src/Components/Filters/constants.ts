import { Currency } from '../../types/common';

type ButtonOptions = { id: number; label: Currency }[];
type InputOptions = { label: string; name: string }[];

export const buttonOptions: ButtonOptions = [
  { id: 1, label: 'Rub' },
  { id: 2, label: 'Usd' },
  { id: 3, label: 'Eur' },
];

export const inputOptions: InputOptions = [
  { label: 'Все', name: 'allStops' },
  { label: 'Без пересадок', name: 'withoutStops' },
  { label: '1 пересадка', name: 'oneStop' },
  { label: '2 пересадки', name: 'twoStops' },
  { label: '3 пересадки', name: 'threeStops' },
];

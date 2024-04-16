import React, { ChangeEvent } from 'react';

import { Currency, Stops } from '../../types/common';
import { buttonOptions, inputOptions } from './constants';
import defaultFilters from '../../constants/constants';

import styles from './Filters.module.scss';

type Props = {
  setFilters: (stops: Stops) => void;
  onClick: (currencyType: Currency) => void;
  currency: Currency;
  filters: Stops;
};

function Filters({ onClick, currency, setFilters, filters }: Props) {
  const stopsInputHandler = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    setFilters({
      ...filters,
      [name]: e.currentTarget.checked,
    });
  };

  const filterClickHandler = (name: string) =>
    setFilters({
      ...defaultFilters,
      [name]: true,
    });

  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.title}>Валюта</h4>
        <div className={styles.buttonWrapper}>
          {buttonOptions.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => onClick(label)}
              className={label === currency ? styles.activeButton : styles.button}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h4 className={styles.title}>Количество пересадок</h4>
        {inputOptions.map(({ label, name }) => (
          <div className={styles.inputWrapper} key={name}>
            <input
              id={name}
              type="checkbox"
              name={name}
              checked={filters[name]}
              className={styles.checkbox}
              onChange={e => stopsInputHandler(e, name)}
            />
            <label className={styles.labelCheckbox} htmlFor={name}>
              {label}
            </label>
            <button
              type="button"
              className={styles.inputButton}
              onClick={() => filterClickHandler(name)}
            >
              Только
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;

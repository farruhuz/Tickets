import React from 'react';

import formatStops from '../../utils/formatStops';
import formatDate from '../../utils/formatDate';
import { Currency, TicketData } from '../../types/common';
import transformPrice from '../../utils/transformPrice';
import firmLogo from '../../assets/firmLogo.jpg';
import airplane from '../../assets/airplane.png';

import styles from './TicketCard.module.scss';

type Props = {
  ticket: TicketData;
  currency: Currency;
};

function TicketCard({ ticket, currency }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.order}>
        <img src={firmLogo} alt="Logo of company" className={styles.logo}/>
        <button type="button" className={styles.button}>
          Купить
          <br/>
          за {transformPrice(ticket.price, currency)}
        </button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.timeContainer}>
          <div className={styles.time}>{ticket.departure_time}</div>
          <div className={styles.stopsWrapper}>
            <div className={styles.stops}>{formatStops(ticket.stops)}</div>
            <div>
              <img src={airplane} alt="airplane icon" className={styles.airplane}/>
            </div>
          </div>
          <div className={styles.time}>{ticket.arrival_time}</div>
        </div>
        <div className={styles.cityContainer}>
          <div>
            <div>
              {ticket.origin},{ticket.origin_name}
            </div>
            <div className={styles.date}>{formatDate(ticket.departure_date)}</div>
          </div>
          <div>
            <div>
              {ticket.destination},{ticket.destination_name}
            </div>
            <div className={styles.date}>{formatDate(ticket.arrival_date)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;

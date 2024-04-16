import { useEffect, useState } from 'react';
import { v1 } from 'uuid';

import TicketCard from '../TicketCard/TicketCard';
import Filters from '../Filters/Filters';
import logo from '../../assets/logo.png';
import data from '../../tickets.json';
import { Currency, Stops, TicketData } from '../../types/common';
import filterTickets from '../../utils/filterTickets';

import styles from './App.module.scss';

function App() {
  const tickets = data.tickets.map(ticket => ({ ...ticket, id: v1() }));
  const [currency, setCurrency] = useState<Currency>('Rub');
  const [filters, setFilters] = useState<Stops>({
    allStops: false,
    withoutStops: false,
    oneStop: false,
    twoStops: false,
    threeStops: false,
  });
  const [filteredTickets, setFilteredTickets] = useState<TicketData[]>(tickets);

  useEffect(() => {
    setFilteredTickets(filterTickets(filters, tickets));
  }, [
    filters.allStops,
    filters.withoutStops,
    filters.oneStop,
    filters.twoStops,
    filters.threeStops,
  ]);

  const currencyHandler = (currencyType: Currency) => setCurrency(currencyType);
  const stopsInputHandler = (stops: Stops) => setFilters(stops);

  return (
    <div className={styles.container}>
      <h1>
        <img src={logo} alt="Logo" className={styles.logo} />
      </h1>
      <main className={styles.wrapper}>
        <Filters
          onClick={currencyHandler}
          currency={currency}
          setFilters={stopsInputHandler}
          filters={filters}
        />
        <div>
          {filteredTickets.map(ticket => (
            <TicketCard ticket={ticket} key={ticket.id} currency={currency} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

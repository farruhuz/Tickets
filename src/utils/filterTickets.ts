import { TicketData, Stops } from '../types/common';

function filterTickets(filters: Stops, tickets: TicketData[]): Array<TicketData> {
  const filterValues = Object.values(filters);
  let checkedTickets: Array<TicketData> = [];
  const initialFilterValues = filterValues.filter(filter => filter);

  if (filterValues[0] || !initialFilterValues.length) {
    checkedTickets = tickets;
    return checkedTickets;
  }
  for (let i = 1; i < 5;) {
    const filteredByStopsTickets = tickets.filter(ticket => ticket.stops === i - 1);
    if (filterValues[i]) {
      checkedTickets.push(...filteredByStopsTickets);
    }
    i += 1;
  }
  return checkedTickets;
}

export default filterTickets;

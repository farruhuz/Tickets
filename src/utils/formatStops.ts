function formatStops(stops: number) {
  if (stops === 1) {
    return '1 пересадка';
  }
  if (stops > 1) {
    return `${stops} пересадки`;
  }
  return 'без пересадок';
}

export default formatStops;

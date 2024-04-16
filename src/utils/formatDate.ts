import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

function formatDate(date: string) {
  const changedDate = format(
    parse(date, 'dd.MM.yy', new Date(), { locale: ru }),
    'd MMM yyyy, EEEEEE',
    { locale: ru },
  );
  const catedDate = changedDate.slice(0, -2) + changedDate.slice(-2).toUpperCase();
  const formatedDate = catedDate.slice(0, -1) + changedDate.slice(-1).toLowerCase();
  return formatedDate;
}

export default formatDate;

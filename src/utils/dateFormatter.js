import { format } from 'date-fns';

export const formatTransactionDate = (date) => {
  return format(new Date(date), 'PP');
};
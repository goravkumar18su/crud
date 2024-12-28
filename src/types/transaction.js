export const TransactionType = {
  INCOME: 'income',
  EXPENSE: 'expense'
};

export const initialTransaction = {
  amount: '',
  description: '',
  type: TransactionType.EXPENSE,
  date: new Date().toISOString().split('T')[0]
};
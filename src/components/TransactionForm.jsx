import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box 
} from '@mui/material';
import { TransactionType, initialTransaction } from '../types/transaction';

const TransactionForm = ({ onSubmit, initialData = null }) => {
  const [transaction, setTransaction] = useState(initialData || initialTransaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(transaction);
    if (!initialData) {
      setTransaction(initialTransaction);
    }
  };

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& > *': { m: 1 } }}>
      <TextField
        name="amount"
        label="Amount"
        type="number"
        value={transaction.amount}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        name="description"
        label="Description"
        value={transaction.description}
        onChange={handleChange}
        required
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Type</InputLabel>
        <Select
          name="type"
          value={transaction.type}
          onChange={handleChange}
          required
        >
          <MenuItem value={TransactionType.INCOME}>Income</MenuItem>
          <MenuItem value={TransactionType.EXPENSE}>Expense</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="date"
        label="Date"
        type="date"
        value={transaction.date}
        onChange={handleChange}
        required
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {initialData ? 'Update' : 'Add'} Transaction
      </Button>
    </Box>
  );
};

export default TransactionForm;
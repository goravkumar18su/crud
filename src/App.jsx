import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
} from './services/transactionService';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  };

  const handleSubmit = async (transaction) => {
    try {
      if (editingTransaction) {
        await updateTransaction(editingTransaction.id, transaction);
      } else {
        await addTransaction(transaction);
      }
      setEditingTransaction(null);
      loadTransactions();
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      loadTransactions();
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Transaction Management
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <TransactionForm 
            onSubmit={handleSubmit}
            initialData={editingTransaction}
          />
        </Box>

        <TransactionList
          transactions={transactions}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>
    </Container>
  );
}

export default App;
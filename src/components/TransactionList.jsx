import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Paper
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { formatTransactionDate } from '../utils/dateFormatter';

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  return (
    <Paper elevation={2}>
      <List>
        {transactions.map((transaction) => (
          <ListItem key={transaction.id}>
            <ListItemText
              primary={
                <Typography>
                  {transaction.description} - ${transaction.amount}
                </Typography>
              }
              secondary={`${formatTransactionDate(transaction.date)} - ${transaction.type}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => onEdit(transaction)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => onDelete(transaction.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TransactionList;
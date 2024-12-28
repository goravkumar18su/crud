import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { handleError } from '../utils/errorHandler';

const COLLECTION_NAME = 'transactions';

export const addTransaction = async (transaction) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), transaction);
    return docRef.id;
  } catch (error) {
    handleError(error, 'adding transaction');
  }
};

export const getTransactions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    handleError(error, 'fetching transactions');
  }
};

export const updateTransaction = async (id, data) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, data);
  } catch (error) {
    handleError(error, 'updating transaction');
  }
};

export const deleteTransaction = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    handleError(error, 'deleting transaction');
  }
};
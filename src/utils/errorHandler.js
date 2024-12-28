export const handleError = (error, context) => {
  console.error(`Error ${context}:`, error);
  throw error;
};
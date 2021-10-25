export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const formatDate = (data: Date) => {
  return data.toLocaleDateString();
};

export const formatDateToServer = (date?: Date) => {
  if (date) {
    return date?.toISOString().substring(0, 10);
  }
};

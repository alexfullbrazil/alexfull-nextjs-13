import dayjs from 'dayjs';

const formatNumber = (
  value: number,
  maxFractions?: number,
  minFractions?: number,
): string => {
  return value?.toLocaleString('pt-br', {
    maximumFractionDigits: maxFractions || 2,
    minimumFractionDigits: minFractions || 2,
  });
};

const formatDate = (value: Date): string => {
  return dayjs(value).format('MMM D, YYYY');
};

const formatTime = (value: Date): string => {
  return dayjs(value).format('HH:mm');
};

const formatCPF = (value: string): string => {
  return value?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatCNPJ = (value: string): string => {
  return value?.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    '$1.$2.$3/$4-$5',
  );
};

const formatPhoneNumber = (value: string): string => {
  return value?.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
};

export {
  formatNumber,
  formatDate,
  formatTime,
  formatCPF,
  formatCNPJ,
  formatPhoneNumber,
};

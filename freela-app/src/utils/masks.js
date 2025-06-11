import { TextInputMask } from 'react-native-masked-text';

// Exemplo de máscara para preço
export function priceMask(value) {
  if (!value) return '';
  return value.replace(/\D/g, '').replace(/(\d)(\d{2})$/, '$1,$2');
}

// Exemplo para data (DD/MM/YYYY)
export function dateMask(value) {
  if (!value) return '';
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1');
}

export const IDRCurrencyFormat = (number) => {
  return number.toLocaleString('id', { style: 'currency', currency: 'IDR' })
}

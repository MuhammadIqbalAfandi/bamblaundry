export const IndexTable = [
  { field: 'transactionNumber', header: 'Id Transaksi' },
  { field: 'customer', header: 'Id Customer' },
  { field: 'price', header: 'Total Harga' },
  { field: 'transactionStatusName', header: 'Status' },
  { field: 'outlet', header: 'Outlet' },
]

export const TransactionBasketTable = [
  { field: 'item', header: 'Jenis Item' },
  { field: 'unit', header: 'Satuan' },
  { field: 'price', header: 'Harga' },
  { field: 'quantity', header: 'Kuantitas' },
  { field: 'discount', header: 'Diskon' },
  { field: 'totalPrice', header: 'Total Harga' },
]

export const TransactionReportTable = [
  { field: 'createdAt', header: 'Tanggal' },
  { field: 'totalTransaction', header: 'Jumlah Transaksi' },
  { field: 'totalPrice', header: 'Total Nilai' },
]

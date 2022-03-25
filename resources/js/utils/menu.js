export default [
  {
    label: 'Menu',
    items: [
      { label: 'Transaksi', icon: 'pi pi-shopping-cart', to: '/transactions' },
      { label: 'Laporan', icon: 'pi pi-book', to: '/mutations' },
      { label: 'Pengeluaran', icon: 'pi pi-wallet', to: '/expenses' },
    ],
  },
  {
    label: 'Master',
    items: [
      { label: 'Customer', icon: 'pi pi-users', to: '/customers' },
      { label: 'Laundry', icon: 'pi pi-table', to: '/laundries' },
    ],
  },
]

export default [
  {
    label: 'Menu',
    items: [
      { label: 'Transaksi', icon: 'pi pi-shopping-cart', to: '/transactions' },
      { label: 'Pengeluaran', icon: 'pi pi-wallet', to: '/expenses' },
      { label: 'Laporan', icon: 'pi pi-book', to: '/mutations' },
    ],
  },
  {
    label: 'Master',
    items: [
      { label: 'User', icon: 'pi pi-user', to: '/users' },
      { label: 'Customer', icon: 'pi pi-users', to: '/customers' },
      { label: 'Outlet', icon: 'pi pi-share-alt', to: '/outlets' },
      { label: 'Laundry', icon: 'pi pi-table', to: '/laundries' },
    ],
  },
]

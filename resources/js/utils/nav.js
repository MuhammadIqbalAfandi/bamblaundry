export default [
  {
    component: 'CNavTitle',
    name: 'Menu',
  },
  {
    component: 'CNavItem',
    name: 'Transaksi',
    to: '/transactions',
    icon: 'cil-transfer',
  },
  {
    component: 'CNavItem',
    name: 'Laporan',
    to: '/invoices',
    icon: 'cil-notes',
  },
  {
    component: 'CNavItem',
    name: 'Pengeluaran',
    to: '/expenses',
    icon: 'cil-money',
  },
  {
    component: 'CNavTitle',
    name: 'Master',
  },
  {
    component: 'CNavItem',
    name: 'User',
    to: '/users',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'Customer',
    to: '/customers',
    icon: 'cil-wc',
  },
  {
    component: 'CNavItem',
    name: 'Outlet / Cabang',
    to: '/outlets',
    icon: 'cil-sitemap',
  },
  {
    component: 'CNavItem',
    name: 'Laundry',
    to: '/laundries',
    icon: 'cil-loop-circular',
  },
]

export default {
  // Owner
  1: [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-home', to: '/dashboards', component: 'home/Index' }],
    },
    {
      label: 'Menu',
      items: [
        { label: 'Transaksi', icon: 'pi pi-shopping-cart', to: '/transactions', component: 'transaction/Index' },
        { label: 'Pengeluaran', icon: 'pi pi-wallet', to: '/expenses', component: 'expense/Index' },
        {
          label: 'Laporan',
          icon: 'pi pi-book',
          items: [
            { label: 'Mutasi', icon: 'pi pi-circle', to: '/reports/mutations', component: 'mutation/Report' },
            {
              label: 'Transaksi',
              icon: 'pi pi-circle',
              to: '/reports/transactions',
              component: 'transaction/Report',
            },
          ],
        },
      ],
    },
    {
      label: 'Master',
      items: [
        { label: 'User', icon: 'pi pi-user', to: '/users', component: 'user/Index' },
        { label: 'Customer', icon: 'pi pi-users', to: '/customers', component: 'customer/Index' },
        { label: 'Outlet', icon: 'pi pi-share-alt', to: '/outlets', component: 'outlet/Index' },
        { label: 'Laundry', icon: 'pi pi-table', to: '/laundries', component: 'laundry/Index' },
        { label: 'Product', icon: 'pi pi-table', to: '/products', component: 'product/Index' },
      ],
    },
    {
      label: 'Pengaturan',
      items: [{ label: 'Diskon', icon: 'pi pi-percentage', to: '/discounts', component: 'discount/Index' }],
    },
  ],

  // Head Outlet
  2: [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-home', to: '/dashboards', component: 'home/Index' }],
    },
    {
      label: 'Menu',
      items: [
        { label: 'Transaksi', icon: 'pi pi-shopping-cart', to: '/transactions', component: 'transaction/Index' },
        { label: 'Pengeluaran', icon: 'pi pi-wallet', to: '/expenses', component: 'expense/Index' },
        {
          label: 'Laporan',
          icon: 'pi pi-book',
          items: [
            { label: 'Mutasi', icon: 'pi pi-circle', to: '/reports/mutations', component: 'mutation/Report' },
            {
              label: 'Transaksi',
              icon: 'pi pi-circle',
              to: '/reports/transactions',
              component: 'transaction/Report',
            },
          ],
        },
      ],
    },
    {
      label: 'Master',
      items: [
        { label: 'Customer', icon: 'pi pi-users', to: '/customers', component: 'customer/Index' },
        { label: 'Laundry', icon: 'pi pi-table', to: '/laundries', component: 'laundry/Index' },
        { label: 'Product', icon: 'pi pi-table', to: '/products', component: 'product/Index' },
      ],
    },
    {
      label: 'Pengaturan',
      items: [{ label: 'Diskon', icon: 'pi pi-percentage', to: '/discounts', component: 'discount/Index' }],
    },
  ],

  // Employee
  3: [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-home', to: '/dashboards', component: 'home/Index' }],
    },
    {
      label: 'Menu',
      items: [
        { label: 'Transaksi', icon: 'pi pi-shopping-cart', to: '/transactions', component: 'transaction/Index' },
        { label: 'Pengeluaran', icon: 'pi pi-wallet', to: '/expenses', component: 'expense/Index' },
        {
          label: 'Laporan',
          icon: 'pi pi-book',
          items: [
            { label: 'Mutasi', icon: 'pi pi-circle', to: '/reports/mutations', component: 'mutation/Report' },
            {
              label: 'Transaksi',
              icon: 'pi pi-circle',
              to: '/reports/transactions',
              component: 'transaction/Report',
            },
          ],
        },
      ],
    },
    {
      label: 'Master',
      items: [{ label: 'Customer', icon: 'pi pi-users', to: '/customers', component: 'customer/Index' }],
    },
  ],
}

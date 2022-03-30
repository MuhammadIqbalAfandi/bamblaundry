<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'

import { TransactionBasketTable } from './TableHeader'

defineProps({
  transaction: Object,
  customer: Object,
  outlet: Object,
  transactionDetails: Object,
})
</script>

<template>
  <Head title="Detail Transaksi" />

  <AppLayout>
    <div class="grid px-2">
      <div class="col-auto mr-7">
        <h2>
          <span class="text-base"> <i class="pi pi-id-card" /> Id Transaksi</span>

          <br />

          <span class="text-xl font-bold">{{ transaction.number }}</span>
        </h2>
      </div>

      <div class="col-auto mr-7">
        <h2>
          <span class="text-base"> <i class="pi pi-id-card" /> Id Customer</span>

          <br />

          <span class="text-xl font-bold">{{ customer.number }}</span>
        </h2>
      </div>

      <div class="col-auto">
        <h2>
          <span class="text-base"> <i class="pi pi-calendar" /> Tanggal Laundry</span>

          <br />

          <span class="text-xl font-bold">{{ transaction.dateLaundry }}</span>
        </h2>
      </div>
    </div>

    <div class="grid">
      <div class="col-12">
        <Card class="surface-100">
          <template #content>
            <div class="grid px-2">
              <div class="col-auto mr-7">
                <h3>Customer</h3>
                <p>{{ customer.name }}</p>

                <h3>No HP</h3>
                <p>{{ customer.phone }}</p>
              </div>

              <Divider type="dashed" class="block md:hidden" />

              <div class="col-auto mr-7">
                <h3>Outlet</h3>
                <p>{{ outlet.name }}</p>

                <h3>Alamat Outlet</h3>
                <p>{{ outlet.address }}</p>
              </div>

              <Divider type="dashed" class="block md:hidden" />

              <div class="col-auto mr-7">
                <h3>Admin</h3>
                <p>{{ $page.props.auth.user.name }}</p>

                <h3>No HP</h3>
                <p>{{ $page.props.auth.user.phone }}</p>

                <h3>Email</h3>
                <p>{{ $page.props.auth.user.email }}</p>
              </div>

              <Divider type="dashed" class="block md:hidden" />

              <div class="col-auto">
                <h3>Status Laundry</h3>
                <Badge v-if="transaction.statusId === 1" :value="transaction.status"></Badge>
                <Badge v-else-if="transaction.statusId === 2" :value="transaction.status" severity="warning"></Badge>
                <Badge v-else :value="transaction.status" severity="success"></Badge>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div class="grid">
      <div class="col-12 md:col-8">
        <Card>
          <template #content>
            <h3 class="text-base"><i class="pi pi-shopping-cart"></i> <span class="ml-2">Daftar Laundry</span></h3>

            <DataTable
              class="mt-3"
              responsiveLayout="scroll"
              columnResizeMode="expand"
              :value="transactionDetails"
              :rowHover="true"
              :stripedRows="true"
            >
              <Column
                v-for="transactionBasketTable in TransactionBasketTable"
                :field="transactionBasketTable.field"
                :header="transactionBasketTable.header"
                :key="transactionBasketTable.field"
              />
            </DataTable>
          </template>
        </Card>
      </div>

      <div class="col-12 md:col-4">
        <h2 class="mb-3 text-xl font-bold">Keseluruhan</h2>

        <Card class="bg-primary">
          <template #content>
            <h3>Diskon</h3>
            <p>{{ transaction.discount }}</p>

            <h3>Total Harga</h3>
            <p>{{ transaction.price }}</p>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
h3 {
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: bold;
}
</style>

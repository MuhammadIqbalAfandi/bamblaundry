<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'

defineProps({
  cardStatistics: Object,
  chartStatistics: Object,
})

const basicData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#42A5F5',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      backgroundColor: '#FFA726',
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ],
})
</script>

<template>
  <AppLayout>
    <Head title="Dashboard" />

    <div class="grid">
      <div v-for="cardStatistic in cardStatistics" class="col-12 md:col-3">
        <Card class="h-full">
          <template #content>
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">{{ cardStatistic.label }}</span>
                <div v-if="cardStatistic.value" class="text-900 font-medium text-xl">{{ cardStatistic.value }}</div>
              </div>
              <div
                class="flex align-items-center justify-content-center bg-orange-100 border-round"
                style="width: 2.5rem; height: 2.5rem"
              >
                <i class="text-orange-500 text-xl" :class="cardStatistic.icon"></i>
              </div>
            </div>
            <span class="text-green-500 font-medium">{{ cardStatistic.amount }} </span>
            <span class="text-500"> {{ ' ' + cardStatistic.amountLabel }}</span>
          </template>
        </Card>
      </div>

      <div class="col-12 md:col-6">
        <Card>
          <template #title>Statistik Transaksi</template>
          <template #content>
            <Chart type="bar" :data="basicData" />
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'

defineProps({
  cardStatistics: Object,
  chartStatistics: Object,
})

const chartData = (chartData) => {
  const colors = ['#42A5F5', '#FFA726']

  const data = {
    datasets: [],
  }

  let id = 0
  for (const key in chartData) {
    data.datasets.push({
      label: key,
      backgroundColor: colors[id],
      data: chartData[key],
    })

    id++
  }

  return data
}

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  datasetFill: false,
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
        callback: function (label) {
          if (Math.floor(label) === label) {
            return label
          }
        },
      },
    },
  },
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
                <span class="block text-500 font-medium mb-3">{{ cardStatistic.title }}</span>
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

      <div v-for="chartStatistic in chartStatistics" class="col-12 md:col-6">
        <Card>
          <template #title>{{ chartStatistic.title }}</template>
          <template #content>
            <Chart type="bar" :data="chartData(chartStatistic.data)" :options="chartOptions" />
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>

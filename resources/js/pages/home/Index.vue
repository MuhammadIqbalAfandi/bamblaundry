<script setup>
import { ref } from 'vue'
import { Head } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'

defineProps({
  cardStatistics: Object,
  transactionStatistics: Object,
  transactionOutletStatistics: Object,
})

const transactionBarData = (chartData) => {
  const colors = ['#17b6ff', '#ffb51c']

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

const transactionBarOption = ref({
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

const transactionOutletPieData = (chartData) => {
  const labels = []
  const data = []

  for (const key in chartData) {
    labels.push(key)
    data.push(chartData[key])
  }

  return {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ['#17b6ff', '#00c3f7', '#00cbdc', '#00d1b2', '#2bd281', '#86cf50', '#c5c623', '#ffb51c'],
      },
    ],
  }
}

const transactionOutletPieOption = ref({
  maintainAspectRatio: false,
  datasetFill: false,
  plugins: {
    legend: {
      labels: {
        color: '#495057',
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

      <div v-for="transactionStatistic in transactionStatistics" class="col-12 md:col-6">
        <Card>
          <template #title>{{ transactionStatistic.title }}</template>
          <template #content>
            <Chart type="bar" :data="transactionBarData(transactionStatistic.data)" :options="transactionBarOption" />
          </template>
        </Card>
      </div>

      <div class="col-12 md:col-6">
        <Card>
          <template #title>{{ transactionOutletStatistics.title }}</template>
          <template #content>
            <Chart
              type="pie"
              :width="600"
              :height="300"
              :data="transactionOutletPieData(transactionOutletStatistics.data)"
              :options="transactionOutletPieOption"
            />
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>

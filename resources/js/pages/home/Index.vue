<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import orderBy from 'lodash/orderBy'
import AppLayout from '@/layouts/AppLayout.vue'

defineProps({
  cardStatistics: Object,
  chartTransactionStatistics: Object,
  chartOutletStatistic: Object,
  chartTopTransactionStatistic: Object,
})

const colors = [
  '#349dcf',
  '#00b2da',
  '#00c7dd',
  '#1fdbdb',
  '#57eed3',
  '#88ffc9',
  '#96ed9a',
  '#a8d96c',
  '#bbc242',
  '#cda91d',
]

const transactionBarData = (chartData) => {
  const colors = ['#349dcf', '#a8d96c']

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

const transactionBarOption = {
  maintainAspectRatio: false,
  datasetFill: false,
}

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
        backgroundColor: colors,
      },
    ],
  }
}

const transactionOutletPieOption = {
  maintainAspectRatio: false,
  datasetFill: false,
}

const topTransactionData = (chartData) => {
  const labels = []
  const data = []

  for (const chartData of orderBy(chartData, ['totalPrice'], ['desc'])) {
    labels.push([chartData.customerNumber, chartData.name])
    data.push(chartData.totalPrice)
  }

  return {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
      },
    ],
  }
}

const topTransactionOption = {
  maintainAspectRatio: false,
  datasetFill: false,
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false,
    },
  },
}
</script>

<template>
  <AppLayout>
    <Head title="Dashboard" />

    <div class="grid">
      <div class="col-12 flex flex-wrap justify-content-between card-statistic">
        <div v-for="cardStatistic in cardStatistics" class="flex-grow-1">
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
      </div>
      <div v-for="statistic in chartTransactionStatistics" class="col-12 md:col-6">
        <Card>
          <template #title>
            <div class="flex flex-column">
              <span>{{ statistic.title }}</span>
              <span class="text-base font-normal">{{ statistic.description }}</span>
            </div>
          </template>
          <template #content>
            <Chart type="bar" :data="transactionBarData(statistic.data)" :options="transactionBarOption" />
          </template>
        </Card>
      </div>

      <div v-if="$page.props.auth.user.role_id === 1" class="col-12 md:col-6">
        <Card>
          <template #title>
            <div class="flex flex-column">
              <span>{{ chartOutletStatistic.title }}</span>
              <span class="text-base font-normal">{{ chartOutletStatistic.description }}</span>
            </div>
          </template>
          <template #content>
            <Chart
              type="pie"
              :width="600"
              :height="300"
              :data="transactionOutletPieData(chartOutletStatistic.data)"
              :options="transactionOutletPieOption"
            />
          </template>
        </Card>
      </div>

      <div class="col-12 md:col-6">
        <Card>
          <template #title>
            <div class="flex flex-column">
              <span>{{ chartTopTransactionStatistic.title }}</span>
              <span class="text-base font-normal">{{ chartTopTransactionStatistic.description }}</span>
            </div>
          </template>
          <template #content>
            <Chart
              type="bar"
              :width="600"
              :height="300"
              :data="topTransactionData(chartTopTransactionStatistic.data)"
              :options="topTransactionOption"
            />
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
.card-statistic {
  gap: 1rem;
}
</style>

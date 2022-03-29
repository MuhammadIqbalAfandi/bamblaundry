<script setup>
import { Inertia } from "@inertiajs/inertia";
import { watch, computed } from "vue";
import { Head, useForm, usePage } from "@inertiajs/inertia-vue3";
import throttle from "lodash/throttle";
import pickBy from "lodash/pickBy";
import AppLayout from "@/layouts/AppLayout.vue";
import AppPagination from "@/components/AppPagination.vue";
import AppButton from "@/components/AppButton.vue";
import AppDropdown from "@/components/AppDropdown.vue";

import TableHeader from "./TableHeader";

const props = defineProps({
  mutations: Object,
  filters: Object,
  outlets: Array,
});

const filterForm = useForm({
  dates: props.filters.dates,
  outlet: props.filters.outlet,
});

const isAdmin = computed(() => usePage().props.value.isAdmin);

watch(
  filterForm,
  throttle(() => {
    Inertia.get(
      "/mutations",
      pickBy({
        dates: filterForm.dates,
        outlet: filterForm.outlet,
      }),
      {
        preserveState: true,
      }
    );
  }, 300)
);
</script>

<template>
  <AppLayout>
    <Head title="Laporan" />

    <DataTable
      responsive-layout="scroll"
      column-resize-mode="expand"
      :value="mutations.data"
      :row-hover="true"
      :striped-rows="true"
    >
      <template #header>
        <h5>Laporan</h5>

        <div class="grid">
          <div class="col-12 md:col-8">
            <div class="grid">
              <div class="col-12 md:col-4">
                <Calendar
                  class="w-full"
                  v-model="filterForm.dates"
                  selection-mode="range"
                  placeholder="filter waktu..."
                  date-format="dd/mm/yy"
                  :show-button-bar="true"
                  :manual-input="false"
                />
              </div>
              <div class="col-12 md:col-4">
                <AppDropdown
                  v-if="isAdmin"
                  placeholder="pilih outlet"
                  v-model="filterForm.outlet"
                  :options="outlets"
                />
              </div>
            </div>
          </div>
        </div>
      </template>

      <Column
        v-for="tableHeader in TableHeader"
        :field="tableHeader.field"
        :header="tableHeader.header"
        :key="tableHeader.field"
      />

      <Column>
        <template #body="{ data }">
          <AppButton
            icon="pi pi-link"
            class="
              p-button-text p-button-icon-only p-button-rounded p-button-text
            "
          />
        </template>
      </Column>
    </DataTable>

    <AppPagination :links="mutations.links" />
  </AppLayout>
</template>

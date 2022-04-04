<script setup>
import { computed, watch } from 'vue'
import { useForm, usePage } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'
import AppInputNumber from '@/components/AppInputNumber.vue'
import AppEditor from '@/components/AppEditor.vue'

const errors = computed(() => usePage().props.value.errors)

watch(errors, () => {
  form.clearErrors()
})

const form = useForm({
  description: null,
  amount: null,
})

const submit = () => {
  form.post(route('expenses.store'), { onSuccess: () => form.reset() })
}
</script>

<template>
  <AppLayout>
    <div class="grid">
      <div class="col-12 md:col-8">
        <Card>
          <template #content>
            <AppInputNumber
              v-model="form.amount"
              class="md:w-16rem"
              label="Pengeluaran"
              placeholder="pengeluaran"
              :error="form.errors.amount"
            />

            <AppEditor
              label="Keterangan"
              v-model="form.description"
              editor-style="height: 320px"
              placeholder="tulis keterangan disini"
              :error="form.errors.description"
            >
              <template #toolbar>
                <span class="q-formats">
                  <button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
                  <button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
                  <button class="ql-underline" v-tooltip.bottom="'Underline'"></button>
                </span>
                <span class="ql-formats">
                  <button class="ql-list" value="ordered" v-tooltip.bottom="'Ordered'"></button>
                  <button class="ql-list" value="bullet" v-tooltip.bottom="'Bullet'"></button>
                </span>
              </template>
            </AppEditor>
          </template>

          <template #footer>
            <div class="flex justify-content-end">
              <AppButton @click="submit" label="Simpan" icon="pi pi-check" class="p-button-text" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>

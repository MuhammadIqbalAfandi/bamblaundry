<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'
import AppInputNumber from '@/components/AppInputNumber.vue'

const form = useForm({
  description: null,
  amount: 0,
})

const submit = () => {
  form.post(route('expenses.store'))
}
</script>

<template>
  <AppLayout>
    <Card>
      <template #content>
        <div class="grid">
          <div class="col-12 md:col-3">
            <AppInputNumber
              v-model="form.amount"
              label="Pengeluaran"
              placeholder="pengeluaran"
              :error="form.errors.amount"
            />
          </div>

          <div class="col-12">
            <Editor v-model="form.description" editorStyle="height: 320px" placeholder="tulis keterangan disini...">
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
            </Editor>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-content-end">
          <AppButton @click="submit" label="Simpan" icon="pi pi-check" class="p-button-text" />
        </div>
      </template>
    </Card>
  </AppLayout>
</template>

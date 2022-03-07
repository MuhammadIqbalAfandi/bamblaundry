<script setup></script>

<template>
  <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="grid justify-content-center p-2 lg:p-0" style="min-width: 80%">
      <div
        class="col-12 xl:col-6"
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);
        "
      >
        <div
          class="h-full w-full m-0 py-7 px-4"
          style="border-radius: 53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"
        >
          <div class="text-center mb-5 text-600 font-medium">
            <span>Email Verifikasi</span> <br />
            <span>
              <span>Cek Email anda</span> untuk link Email verifikasi, atau kirim ulang Email verifikasi
              <span class="font-bold">jika belum ada</span>
            </span>
          </div>

          <div class="w-full md:w-10 mx-auto">
            <label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
            <InputText id="email" type="text" class="w-full mb-3" placeholder="email" style="padding: 1rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

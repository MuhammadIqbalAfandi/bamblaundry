<script setup>
import { Link } from '@inertiajs/inertia-vue3'
</script>

<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle :caret="false" class="py-0">
      Your Name
      <CAvatar size="md" src="/images/avatar-test.jpg" />
    </CDropdownToggle>

    <CDropdownMenu class="pt-0">
      <CDropdownHeader class="bg-light fw-semibold py-2">Pengaturan</CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-user" />
        Profile
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-pen" />
        Ubah Password
      </CDropdownItem>

      <CDropdownDivider />

      <Link :href="route('logout')" method="post" as="button" class="dropdown-item">
        <CIcon icon="cil-lock-locked" />
        Logout
      </Link>
    </CDropdownMenu>
  </CDropdown>
</template>

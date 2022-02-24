<template>
  <CCard color="light" class="border-light">
    <CCardBody>
      <CTable responsive hover>
        <CTableHead>
          <slot name="table-head" />
        </CTableHead>
        <CTableBody>
          <slot name="table-body" />
        </CTableBody>
      </CTable>
    </CCardBody>
  </CCard>
</template>

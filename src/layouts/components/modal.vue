<script setup>
const diaFormRef = ref()
const dialog = ref(false)
const selectRow = ref()

const open = row => {
  selectRow.value = row
  if (row.before) {
    row.before({ dialog, openLoading, close, dialogLoading, closeLoading, dialogLoadingText, selectRow })
  } else {
    dialog.value = true
  }

}

const close = () => {
  dialog.value = false
}

const dialogLoading = ref(false)
const dialogLoadingText = ref('加载中...')

const openLoading = op => {
  if (op?.text) dialogLoadingText.value = op.text
  dialogLoading.value = true
}

const closeLoading = () => {
  dialogLoading.value = false
}

defineExpose({
  open,
})
</script>

<template>
  <VDialog v-model="dialog" transition="dialog-bottom-transition" :width="selectRow?.formWidth || 300">
    <VCard>
      <VCardText v-if="!selectRow.slot">
        {{ selectRow.mark }}
      </VCardText>
      <Component :is="selectRow.slot" v-if="selectRow.slot" ref="diaFormRef" :data="selectRow.slotData || {}" />
      <VCardActions v-if="!selectRow.hideDiaCancel && !selectRow.hideDiaOk">
        <VSpacer />
        <VBtn v-if="!selectRow.hideDiaCancel" color="blue-darken-1" variant="text" @click="dialog = false">
          {{ $t('关闭') }}
        </VBtn>
        <VBtn v-if="!selectRow.hideDiaOk" color="blue-darken-1" variant="tonal"
          @click="() => { selectRow.fn({ close, openLoading, closeLoading, diaFormRef }) }">
          {{ $t('是的') }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
  <VDialog v-model="dialogLoading" :scrim="false" persistent width="auto">
    <VCard color="#000000">
      <VCardText>
        {{ dialogLoadingText }}
        <VProgressLinear indeterminate color="white" class="mb-0" />
      </VCardText>
    </VCard>
  </VDialog>
</template>

<script setup>
import fixtureApi from '@/api/fixture'
import { getDict } from '@/utils/utils'
import { cloneDeep } from 'lodash'

const propsData = defineProps({
  data: { type: Object },
})

const density = inject('density')
const formData = ref(cloneDeep(propsData.data))

const submit = () => {
  return new Promise(resolve => { 
    fixtureApi.fixtureEdit(formData.value).finally(() => {
      resolve()
    })
  })
}


const type = getDict('sss_fixture_type')

defineExpose({
  submit,
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol
        cols="6"
        class="text-center"
      >
        <VTextField
          v-model="formData.fixtureName"
          label="夹具名称："
          :density="density"
        />
      </VCol>
      <VCol
        cols="6"
        class="text-center"
      >
        <VTextField
          v-model="formData.fixtureCode"
          label="编号："
          :density="density"
        />
      </VCol>
      <VCol
        cols="6"
        class="text-center"
      >
        <VSelect
          v-model="formData.fixtureType"
          :density="density"
          :items="type"
          label="类型："
        />
      </VCol>
      <VCol
        cols="6"
        class="text-center"
      >
        <VTextField
          v-model="formData.fixtureTongsHeight"
          label="钳高："
          :density="density"
        />
      </VCol>
      <VCol
        cols="6"
        class="text-center"
      >
        <VTextField
          v-model="formData.fixtureDepth"
          label="夹深："
          :density="density"
        />
      </VCol>
      <VCol
        cols="6"
        class="text-center"
      />
      <VCol
        cols="6"
        class="text-center"
      >
        <VChip
          class="ma-1"
          color="#FF9800"
        >
          X轴方向
        </VChip>
      </VCol>
      <VCol
        cols="6"
        class="text-center"
      >
        <VChip
          class="ma-1"
          color="#4CAF50"
        >
          Y轴方向
        </VChip>
      </VCol>
        
      <VCol cols="6">
        <VTextField
          v-model="formData.fixtureSizeX"
          label="尺寸："
          :density="density"
          suffix="mm"
          class="mb-2"
        />
        <VTextField
          v-model="formData.fixtureLocateX"
          label="定位："
          :density="density"
          suffix="mm"
          class="mb-2"
        />
      </VCol>
      <VCol cols="6">
        <VTextField
          v-model="formData.fixtureSizeY"
          label="尺寸："
          :density="density"
          suffix="mm"
          class="mb-2"
        />
        <VTextField
          v-model="formData.fixtureLocateY"
          label="定位："
          :density="density"
          suffix="mm"
          class="mb-2"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<route lang="yaml">
  meta:
  title: 天气
</route>

<template>
  <div class="full-container">
    <FaPageMain>
      <div class="weather-container">
        <h2 class="text-2xl font-bold mb-6">天气查询</h2>

        <div class="mb-6">
          <el-select
            v-model="selectedProvince"
            filterable
            placeholder="请选择省份"
            clearable
            class="w-full md:w-80"
          >
            <el-option
              v-for="province in provinces"
              :key="province.provinceName"
              :label="province.provinceName"
              :value="province.provinceName"
            />
          </el-select>
        </div>
        <ElDivider></ElDivider>
        <div v-if="selectedProvince" class="result-container">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>{{ selectedProvince }}</span>
              </div>
            </template>
          </el-card>
        </div>
      </div>
    </FaPageMain>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import cityData from '@/assets/data/city.json'

const provinces = ref<any[]>([])
const selectedProvince = ref('')

onMounted(() => {
  provinces.value = cityData.provinces
})
</script>

<style scoped>

.full-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.card-header {
  font-weight: bold;
  font-size: 18px;
}

</style>

<route lang="yaml">
  meta:
  title: 天气
</route>

<template>
  <div class="full-container">
    <FaPageMain>
      <div class="weather-container">
        <h2 class="text-2xl font-bold mb-6">天气查询</h2>

        <div class="mb-6 flex flex-col gap-4 md:flex-row">
          <el-select
            v-model="selectedProvince"
            filterable
            placeholder="请选择省份"
            clearable
            class="w-full md:w-80"
            @change="onProvinceChange"
          >
            <el-option
              v-for="province in provinces"
              :key="province.provinceName"
              :label="province.provinceName"
              :value="province.provinceName"
            />
          </el-select>

          <el-select
            v-if="selectedProvince && cities.length > 0"
            v-model="selectedCity"
            filterable
            placeholder="请选择城市"
            clearable
            class="w-full md:w-80"
          >
            <el-option
              v-for="city in cities"
              :key="city.cityName"
              :label="city.cityName"
              :value="city.cityName"
            />
          </el-select>
        </div>
        <ElDivider></ElDivider>
        <div v-if="selectedProvince" class="result-container">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>{{ selectedProvince }} - {{ selectedCity || '全省' }}</span>
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
const cities = ref<any[]>([])
const selectedCity = ref('')

// 省份变化时，获取该省份下的城市列表
const onProvinceChange = (provinceName: string) => {
  selectedCity.value = ''
  if (!provinceName) {
    cities.value = []
    return
  }

  const province = provinces.value.find(p => p.provinceName === provinceName)
  if (province && province.city) {
    cities.value = province.city
  } else {
    cities.value = []
  }
}

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

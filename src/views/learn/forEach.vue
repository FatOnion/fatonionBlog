<route lang="yaml">
  meta:
    title: 城市列表
</route>

<template>
  <div>
    <div ref="containerRef">
      <FaPageMain
        v-for="provinces in cityData.provinces" :key="provinces.provinceName"
      >
        {{ provinces.provinceName }}
        <div
          v-for="city in getCityDisplayList(provinces.city)"
          :key="city.name"
        >
          {{ city.name }}
        </div>
      </FaPageMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

interface City {
  cityName: string
  cityType: string
}

interface Province {
  provinceName: string
  city: City[]
}

interface CityData {
  provinces: Province[]
}

const cityData = ref<CityData>({ provinces: [] })
const containerRef = ref()

onMounted(() => {
  getCityData()
})

const getCityData = () => {
  axios.get('/src/assets/data/city.json')
    .then(response => {
      cityData.value = response.data
    })
    .catch(error => {
      console.error('加载文件错误！', error)
    })
}

const getCityDisplayList = (cities: any[]) => {
  const cityList: { name: string }[] = []
  cities.forEach(city => {
    cityList.push({
      name: `${city.cityName}（${city.cityType}）`
    })
  })
  return cityList
}

</script>

<style scoped>
</style>

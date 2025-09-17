<route lang="yaml">
meta:
  title: 小窝
  icon: ant-design:home-twotone
</route>

<script setup lang="ts">
const versionType = ref('basic')
watch(versionType, (val) => {
  if (val === 'pro') {
    location.href = `${location.origin}${location.pathname}`.replace('basic-example', 'pro-example')
  }
})
</script>

<template>
  <div class="page-container">
    <FaPageHeader>
      <template #title>
        <div class="header-title">
          欢迎使用进入法托尼安小窝！
        </div>
      </template>
      <template #description>
        <div class="header-description">
          <div>
            这是一个属于博主自己的温馨小窝。
          </div>
        </div>
      </template>
    </FaPageHeader>
    <FaPageMain class="main-content first-main" title-class="main-title">
      <template #title>
        <div class="title-info">
          <h1 class="title-text">
            题记
          </h1>
        </div>
      </template>
      <template #default>
        <div class="quote-content">
          生活不止眼前的苟且，还有未来的苟且。<br>
        </div>
      </template>
    </FaPageMain>
    <FaPageMain class="main-content second-main" title-class="main-title">
      <template #title>
        <div class="title-info">
          <h1 class="title-text">
            恶魔低语
          </h1>
        </div>
      </template>
      <template #default>
        <div class="smile-container">
          <FaCard class="smile-card" content-class="p-0">
            <img src="@/assets/images/smile.svg" alt="Logo" class="smile-image">
          </FaCard>
          <FaCard class="smile-card" content-class="p-0">
            <img src="@/assets/images/smile_dark.svg" alt="Logo" class="smile-image">
          </FaCard>
          <FaCard class="smile-card" content-class="p-0">
            <img src="@/assets/images/smile.svg" alt="Logo" class="smile-image">
          </FaCard>
          <FaCard class="smile-card" content-class="p-0">
            <img src="@/assets/images/smile_dark.svg" alt="Logo" class="smile-image">
          </FaCard>
        </div>
      </template>
    </FaPageMain>
  </div>
</template>

<style scoped>
.page-container {
  --uno: h-200 flex flex-col;
}

.header-title {
  --uno: flex items-center gap-4;
}

.header-description {
  --uno: text-sm/6;
}

.main-content {
  --uno: m-0 mx-15px flex-1;
}

.first-main {
  --uno: flex-1;
}

.second-main {
  --uno: mt-15px flex-1;
}

.main-title {
  --uno: flex flex-wrap items-center justify-between gap-4;
}

.title-info {
  --uno: flex items-center gap-4;
}

.title-text {
  --uno: m-0 text-2xl c-[#41b883];
}

.quote-content {
  --uno: text-6xl c-[#0097FF];
}

.smile-container {
  --uno: flex justify-center;
}

.smile-card {
  --uno: max-h-100 max-w-100 flex items-center justify-center;
}

.smile-image {
  --uno: max-h-full max-w-full object-contain;
}
</style>

<template>
  <div
    class="w-[800px] h-[420px] flex justify-center items-center relative overflow-hidden bg-[#050822] px-24 py-16"
  >
    <div class="nuxt-gradient absolute -top-[300px] -left-[300px] w-[600px] h-[600px] blur-3xl opacity-50" />
    <div class="brand-gradient absolute -top-[300px] -right-[300px] w-[600px] h-[600px] blur-3xl opacity-50"
    :style="`background: radial-gradient(${brand.color}, transparent);`" />

    <div class="absolute top-0 right-0 w-full h-full opacity-60 z-10" />
    <div
      class="flex flex-col text-center justify-center space-y-6 items-center z-10 w-3/4"
    >
      <div class="flex space-x-6 items-center">
        <img src="/logo_nuxt.svg" class="w-24 h-24" />
        <img :src="brand.logo" class="w-16 h-16" />
      </div>
      <h1 class="text-6xl text-white font-bold">{{ brand.name }}</h1>
      <h2 class="text-3xl text-gray-400 font-semibold">
        {{ brand.description }}
      </h2>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  brand: {
    type: Object,
  },
});
const brand = computed(() => props.brand || {});
</script>
<style scoped>
.nuxt-gradient {
  background: radial-gradient(#00dc82, transparent);
  /* border-radius: 146.5rem;
  background: radial-gradient(50% 50% at 50% 50%, #00DC82 0%, rgba(0, 220, 130, 0.00) 100%);
  filter: blur(272.83270263671875px); */
}
</style>

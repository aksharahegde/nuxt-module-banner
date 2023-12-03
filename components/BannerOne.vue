<template>
  <section
    class="w-[800px] h-[420px] flex justify-center items-center relative overflow-hidden px-24 py-16"
    style="background: url(/banner_bg.png) no-repeat top center; background-size: cover;"
  >
    <div
      class="flex flex-col items-center justify-center text-center z-10"
    >
      <img :src="brand.cover" class="lg:w-64 xl:w-72" />
      <h1
        class="text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold flex items-center gap-4 mb-4"
      >
        <img :src="brand.logo" class="h-12" />
        <span class="whitespace-nowrap">{{ brand.name }}</span>
      </h1>
      <h2 class="text-3xl text-gray-400 font-semibold">
        {{ brand.description }}
      </h2>
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps({
  brand: {
    type: Object,
  },
});
const brand = computed(() => props.brand || {});
</script>

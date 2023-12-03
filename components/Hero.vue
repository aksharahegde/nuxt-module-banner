<template>
  <section class="bg-gray-50 dark:text-gray-900">
    <Banner />
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10">
      <div
        class="flex flex-col-reverse justify-start gap-8 sm:gap-20 lg:flex-row"
      >
        <div
          class="flex flex-col items-start lg:justify-center space-y-6 w-1/4"
        >
          <div class="relative w-full flex justify-between items-center gap-2">
            <div
              v-for="bt in bannerTypes"
              :key="bt.type"
              class="w-1/2 rounded-t-md overflow-hidden cursor-pointer pb-1"
              :class="{
                'border-b-[6px] border-solid border-[#00dc82]':
                  brand.bannerType === bt.type,
              }"
            >
              <img
                :src="bt.src"
                class="cover"
                @click="selectBannerType(bt.type)"
              />
            </div>
          </div>
          <!-- input for title -->
          <div class="relative w-full">
            <label class="block mb-1 text-sm font-medium text-gray-800"
              >Module name</label
            >
            <input
              type="text"
              class="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
              placeholder="Module name"
              required
              v-model="brand.name"
            />
          </div>
          <!-- input for description -->
          <div class="relative w-full">
            <label class="block mb-1 text-sm font-medium text-gray-800"
              >Description</label
            >
            <textarea
              type="text"
              class="block w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
              placeholder="Description"
              rows="3"
              required
              v-model="brand.description"
            />
          </div>
          <!-- color picker -->
          <div class="relative w-full">
            <label class="block mb-1 text-sm font-medium text-gray-800"
              >Color</label
            >
            <input
              type="color"
              class="block h-9 w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
              v-model="brand.color"
            />
          </div>
          <div class="flex flex-col w-full">
            <label
              class="block mb-1 text-sm font-medium text-gray-900"
              for="dropzone-file-cover"
              >Logo</label
            >
            <input
              id="dropzone-file"
              type="file"
              class="block w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
              @input="onFileChange"
            />
          </div>
          <div class="flex flex-col w-full">
            <label
              class="block mb-1 text-sm font-medium text-gray-800"
              for="dropzone-file-cover"
              >Cover image</label
            >
            <input
              id="dropzone-file-cover"
              type="file"
              class="block w-full rounded-md border border-solid border-black bg-white p-2 text-sm text-[#333333] focus:border-[#3898ec] focus:outline-0"
              @input="onCoverFileChange"
            />
          </div>
        </div>
        <!-- Preview -->
        <div class="w-3/4">
          <BannerOne v-if="brand.bannerType === 'type1'" :brand="brand" />
          <BannerTwo v-else :brand="brand" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const bannerTypes = [
  {
    type: "type1",
    src: "banner_one.png",
  },
  {
    type: "type2",
    src: "banner_two.png",
  },
];
// 966 x 507
type Brand = {
  bannerType: string;
  name: string;
  color: string;
  description: string;
  logo: any;
  cover: any;
};

const brand: Ref<Brand> = ref({
  bannerType: "type1",
  name: "Nuxt Devtools",
  color: "#3898ec",
  description: "Unleash Nuxt Developer Experience",
  logo: "/logo_nuxt.svg",
  cover: "/devtools.svg",
});

const selectBannerType = (type: string) => {
  brand.value.bannerType = type;
};

const onFileChange = (e: any) => {
  const file = e.target.files[0];
  console.log(file);
  const reader = new FileReader();
  reader.onload = function (e) {
    brand.value.logo = e.target?.result;
  };
  reader.readAsDataURL(file);
};

const onCoverFileChange = (e: any) => {
  const file = e.target.files[0];
  console.log(file);
  const reader = new FileReader();
  reader.onload = function (e) {
    brand.value.cover = e.target?.result;
  };
};
</script>
<style>
:root {
  font-family: "Inter", sans-serif;
}
.grd {
  background-color: #020420;
}
.grd-overlay {
  background: rgb(0, 220, 130);
  background: linear-gradient(
    135deg,
    rgba(0, 220, 130, 0.5) 0%,
    rgba(3, 225, 134, 0.1) 30%
  );
}
</style>

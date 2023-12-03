<template>
  <main>
    <NuxtPage/>
  </main>
</template>
<script setup lang="ts">
import { META_TITLE, META_DESCRIPTION } from "~/constants/index";

useSeoMeta({
  title: META_TITLE,
  ogTitle: META_TITLE,
  description: META_DESCRIPTION,
  ogDescription: META_DESCRIPTION,
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constants/index";

const route = useRoute();
const layout = computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout");
</script>

<style scoped></style>

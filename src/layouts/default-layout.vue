<template>
  <navigation-header />
  <slot></slot>
  <navigation-footer />
</template>
<script>
import NavigationFooter from "@/components/NavigationFooter.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
export default {
  components: { NavigationFooter, NavigationHeader },
};
</script>

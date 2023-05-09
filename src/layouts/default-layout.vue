<template>
  <navigation-header />
  <slot></slot>
  <navigation-footer v-if="meta.isShowFooter" />
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavigationFooter from "@/components/NavigationFooter.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";

export default {
  components: { NavigationFooter, NavigationHeader },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>

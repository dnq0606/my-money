<template>
  <div class="mt-4" v-if="user">
    <h1>{{ user.displayName }}</h1>
  </div>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
};
</script>

<template>
  <header id="header" class="py-8">
    <div class="container mx-auto h-full text-center px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 rounded-full overflow-hidden mr-2"
          >
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
              alt="User profile user"
              class="w-full h-auto object-cover"
              sizes="sm"
            />
          </div>
          <h1 class="text-xl text-dark font-bold">{{ meta.text }}</h1>
        </div>
        <div>
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const router = useRoute();
    const meta = computed(() => router.meta);
    return {
      meta,
    };
  },
};
</script>

<style scoped></style>

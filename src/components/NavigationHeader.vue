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
            <li v-if="!meta.isShowButtonAdd">
              <i class="t2ico t2ico-notification text-2xl"></i>
            </li>
            <li v-if="meta.isShowButtonAdd">
              <button
                type="button"
                class="bg-primary text-white font-semibold px-4 py-1 rounded-md"
                @click="$emit('add')"
              >
                Add
              </button>
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

    function onAddTransaction() {}

    return {
      meta,
      onAddTransaction,
    };
  },
};
</script>

<style scoped></style>

<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 pt-4 p-b-safe-4"
  >
    <div class="container mx-auto h-full px-8">
      <ul class="flex justify-between h-full items-center">
        <li v-for="(navItem, index) of navItems" :key="index">
          <router-link :to="{ name: navItem.routerName, params: {} }">
            <i class="t2ico text-2xl" :class="[navItem.icon]"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div
      data-circle
      class="absolute top-0 left-1/2 transform -translate-x-1/2"
    ></div>
    <div
      class="absolute flex justify-center items-center w-12 h-12 bg-primary text-white rounded-full cursor-pointer -top-6 left-1/2 transform -translate-x-1/2"
      @click="goToRouteNewTransaction"
    >
      <i class="t2ico t2ico-plus"></i>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { NAVIGATIONS_FOOTER } from "@/constants";
export default {
  setup() {
    const navItems = reactive(NAVIGATIONS_FOOTER);
    const router = useRouter();

    function goToRouteNewTransaction() {
      return router.push({ name: "NewTransaction", params: {} });
    }
    return { navItems, goToRouteNewTransaction };
  },
};
</script>

<style scoped>
footer#footer > div[data-circle] {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 251 / var(--tw-bg-opacity));
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 30px;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}

footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>

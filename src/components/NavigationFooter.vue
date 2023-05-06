<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 pt-4 p-b-safe-4"
  >
    <div class="container mx-auto h-full">
      <ul class="flex justify-between h-full items-center mx-4">
        <li v-for="(navItem, index) of navItems" :key="index">
          <router-link :to="{ name: navItem.routerName, params: {} }">
            <i class="t2ico text-2xl" :class="[navItem.icon]"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const navItems = reactive([
      {
        icon: "t2ico-category",
        name: "Home",
        routerName: "Home",
      },
      {
        icon: "t2ico-chart",
        name: "Report",
        routerName: "Home",
      },
      {
        icon: "t2ico-presentation",
        name: "Buget",
        routerName: "Home",
      },
      {
        icon: "t2ico-profile",
        name: "Profile",
        routerName: "Profile",
      },
    ]);

    return { navItems };
  },
};
</script>

<style scoped>
footer#footer::before,
footer#footer::after {
  @apply absolute;
  left: 50%;
  transform: translateX(-50%);
}

footer#footer::before {
  @apply bg-dark-line;

  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 30px;
  top: 0;
}

footer#footer::after {
  @apply -top-6 flex items-center justify-center text-white;
  @apply w-12 h-12 bg-primary rounded-full cursor-pointer;

  content: "\e921";
  font-family: "t2ico";
}
</style>

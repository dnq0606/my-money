<template>
  <h1>Logout...</h1>
</template>
<script>
import { useLogout } from "@/composables/useLogout";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, logout } = useLogout();
    const router = useRouter();

    async function logOut() {
      await logout();
      if (!error.value) router.push({ name: "Login", params: {} });
    }

    logOut();

    return {};
  },
};
</script>

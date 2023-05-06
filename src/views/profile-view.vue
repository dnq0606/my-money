<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 mx-auto rounded-full overflow-hidden">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
            alt="User profile"
            sizes="xs"
            class="object-cover w-full h-auto"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3" v-if="user">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1" v-if="user">
          {{ user.email }}
        </p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">Geneal</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li
              v-for="(item, index) of profileOptions"
              :key="index"
              class="last:text-red"
            >
              <router-link
                :to="item.route"
                class="flex items-center justify-between py-3"
              >
                <div class="flex items-center text-left">
                  <i class="t2icon pr-1 text-2xl" :class="[item.icon]"></i>
                  <h5 class="font-semibold">{{ item.name }}</h5>
                </div>
                <div class="flex items-center text-left">
                  <i class="t2icon t2ico-arrow-right text-2xl"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { PROFILE_OBTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const profileOptions = reactive(PROFILE_OBTIONS);
    const { getUser } = useUser();
    const { user } = getUser();

    return { user, profileOptions };
  },
};
</script>

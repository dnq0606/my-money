<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start: form -->
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span>Full name</span>
            <input
              id="fullName"
              class="px-4 py-3 rounded-lg border"
              type="text"
              placeholder="Full name"
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label for="email" class="flex flex-col">
            <span>Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border"
              type="email"
              placeholder="example@gmail.com"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span>Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border"
              type="password"
              placeholder="Example123#"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 w-full text-center bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </form>

      <!-- start: direction -->
      <div class="w-full text-center mt-6 font-semibold">
        <span>I'm already a member.</span>
        <span class="text-primary ml-1">
          <router-link :to="{ name: 'Login', params: {} }">Sign In</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/userSignUp";

export default {
  setup() {
    const { error, isPending, signup } = useSignUp();

    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signup(email.value, password.value);
    }
    return { fullName, email, password, error, isPending, onSubmit };
  },
};
</script>

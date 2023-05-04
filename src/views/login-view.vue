<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start: form -->
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
        <div class="row">
          <label for="email" class="flex flex-col">
            <span>Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border"
              type="email"
              placeholder="example@gmail.com"
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
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 w-full text-center bg-primary text-white font-bold rounded-lg"
          >
            Sign In
          </button>
        </div>
      </form>

      <!-- start: direction -->
      <div class="w-full text-center mt-6 font-semibold">
        <span>I'm new user.</span>
        <span class="text-primary ml-1">
          <router-link :to="{ name: 'Register', params: {} }"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
function onSubmit() {}
</script>

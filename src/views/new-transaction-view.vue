<template>
  <form @submit.prevent="onSubmit">
    <!-- Start: Main form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="coltainer mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USU</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  class="text-4xl text-dark w-full outline-none"
                  type="text"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="w-10 text-right leading-10 mr-4 flex flex-none items-center"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="category"
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="Select category"
                  v-model="category"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="note"
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  id="time"
                  class="text-dark w-full outline-none"
                  type="date"
                  placeholder="Time"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-3">
                <div>
                  <span class="text-dark w-full">My wallet</span>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isMoreDetail">
      <button
        type="button"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
        @click="isMoreDetail = true"
      >
        More Details
      </button>
    </div>

    <template v-if="isMoreDetail">
      <!-- Start: Advenced Form -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="coltainer mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Select location"
                    v-model="location"
                  />
                </div>
              </label>
            </div>

            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    id="withPerson"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="With person"
                    v-model="person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Start: Upload photo -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="coltainer mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 py-3">
                  <div class="w-full font-semibold">Upload photos</div>
                  <input
                    type="file"
                    id="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onchangeFile($event)"
                  />
                </div>
              </label>
            </div>
            <div v-if="fileError">
              <span class="text-red">{{ fileError }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <button type="submit" class="bg-primary text-white">test submit</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";

export default {
  setup() {
    const isMoreDetail = ref(false);
    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const fileUpload = ref(null);
    const location = ref(null);
    const person = ref("");
    const fileError = ref(null);

    const { url, uploadFile } = useStorage("transactions");
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transactions");

    async function onSubmit() {
      if (fileUpload.value) await uploadFile(fileUpload.value);

      console.log("thumbnail", url.value);
      const { user } = getUser();
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        userId: user.value.uid,
        location: location.value,
        person: person.value,
        thumbnail: url.value,
      };

      await addRecord(transaction);

      console.log(error);
      console.log("create");
      console.log("url", url);
    }

    function onchangeFile(event) {
      const selected = event.target.files[0];
      const typesFile = ["image/png", "image/jpg", "image/jpeg"];

      if (selected && typesFile.includes(selected.type)) {
        fileUpload.value = selected;
        fileError.value = null;
      } else {
        fileUpload.value = null;
        fileError.value = "Please select a file type pnd or jpg.";
      }
    }

    return {
      isMoreDetail,
      total,
      category,
      note,
      time,
      location,
      person,
      fileError,
      onSubmit,
      onchangeFile,
    };
  },
};
</script>

import { ref } from "vue";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase";

const error = ref(null);

async function logout() {
  error.value = null;

  try {
    const response = await signOut(auth);
    return response;
  } catch (err) {
    error.value = err.message;
  }
}

export function useLogout() {
  return { error, logout };
}

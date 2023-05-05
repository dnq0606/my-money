import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password) {
  error.value = null;
  isPending.value = true;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}

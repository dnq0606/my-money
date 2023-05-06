import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  error.value = null;
  isPending.value = true;

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (!response) throw new Error("Could not create a new user.");
    return response;
  } catch (err) {
    switch (err.code) {
      case "auth/wrong-password":
        error.value = "Email or password is incorrect";
        break;
      case "auth/user-not-found":
        error.value = "Email or password is incorrect";
        break;
      default:
        error.value = err.message;
        break;
    }
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signin };
}

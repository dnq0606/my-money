import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  error.value = null;
  isPending.value = true;

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");
    await updateProfile(auth.currentUser, {
      displayName: fullName,
    });
    return response;
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        error.value = "Vui lòng nhập Email Address";
        break;
      case "auth/email-already-in-use":
        error.value = "Email đã được sử dụng";
        break;
      default:
        error.value = err.message;
        break;
    }
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}

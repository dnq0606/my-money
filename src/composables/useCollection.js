import { ref } from "vue";
import { db } from "@/configs/firebase";
import { collection, addDoc } from "firebase/firestore";

function useCollection(name) {
  const error = ref(null);

  async function addRecord(record) {
    error.value = null;
    try {
      const response = await addDoc(collection(db, name), record);
      return response;
    } catch (err) {
      error.value = err.message;
    }
  }

  return { error, addRecord };
}

export default useCollection;

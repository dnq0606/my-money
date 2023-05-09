import { ref } from "vue";
import { storage } from "@/configs/firebase";
import {
  uploadBytes,
  getDownloadURL,
  ref as firebaseRef,
} from "firebase/storage";
import { useUser } from "./useUser";

const { getUser } = useUser();
const { user } = getUser();

function useStorage(name) {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;

    const fileRef = firebaseRef(storage, filePath.value);

    try {
      await uploadBytes(fileRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          url.value = downloadURL;
        });
      });

      return url.value;
    } catch (err) {
      error.value = err.message;
    }
  }

  return { error, filePath, url, uploadFile };
}

export default useStorage;

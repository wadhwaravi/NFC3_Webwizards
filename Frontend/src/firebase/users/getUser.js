import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const getUser = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      console.log("User data:", docSnap.data());
      return docSnap.data(); // Return user data
    } else {
      console.log("No such document!");
      return null; // Return null if no document exists
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return null; // Return null in case of an error
  }
};

export default getUser;

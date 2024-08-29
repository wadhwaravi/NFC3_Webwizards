import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed in successfully:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in user:", error.message);
    throw error;
  }
};

export default signInUser;

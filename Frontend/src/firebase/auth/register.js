import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (
  fullName,
  email,
  phone,
  password,
  address,
  city,
  country,
  zip
) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Add user details to Firestore
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      phone,
      address,
      city,
      country,
      zip,
      createdAt: new Date(),
    });

    console.log("User registered successfully!");
  } catch (error) {
    console.error("Error registering user: ", error);
  }
};

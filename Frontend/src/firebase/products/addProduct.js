import { firestore } from "./firebaseConfig";

export const addProduct = async (product) => {
  try {
    const docRef = await firestore.collection("products").add(product);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

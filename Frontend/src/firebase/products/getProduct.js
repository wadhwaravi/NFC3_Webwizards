import { firestore } from "./firebaseConfig";

export const getProduct = async (productId) => {
  try {
    const doc = await firestore.collection("products").doc(productId).get();
    if (!doc.exists) {
      console.log("No such document!");
      return null;
    }
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
};

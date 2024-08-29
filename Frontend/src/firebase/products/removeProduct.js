import { firestore } from "./firebaseConfig";

export const removeProduct = async (productId) => {
  try {
    await firestore.collection("products").doc(productId).delete();
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error removing document: ", error);
    throw error;
  }
};

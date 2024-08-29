import { firestore } from "./firebaseConfig";

export const addProduct = async (product) => {
  try {
    const docRef = await firestore.collection("products").add(product);
    return docRef.id;
  } catch (error) {
    console.error("Error adding product: ", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const snapshot = await firestore.collection("products").get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};

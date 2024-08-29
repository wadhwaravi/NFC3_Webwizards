import { firestore } from "./firebaseConfig";

export const getProducts = async () => {
  try {
    const snapshot = await firestore.collection("products").get();
    if (snapshot.empty) {
      console.log("No products found.");
      return [];
    }
    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
    throw error;
  }
};

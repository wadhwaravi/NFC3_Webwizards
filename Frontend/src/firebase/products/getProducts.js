import { db } from "../firebase"; // Adjust the path as needed
import { collection, getDocs } from "firebase/firestore";

export const getProducts = async () => {
  try {
    const productsCollection = collection(db, "products"); // Use collection method
    const snapshot = await getDocs(productsCollection); // Use getDocs to fetch data
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

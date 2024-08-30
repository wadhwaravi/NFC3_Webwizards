import React, { useState } from "react";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
import { paginationItems, rationItems } from "../../../constants";
import { getProducts } from "../../../firebase/products/getProducts";

const items = paginationItems;

const fetchProducts = async () => {
  try {
    rationItems = await getProducts();
    console.log("Products fetched:", rationItems);
    // Process the products as needed, e.g., set them to state or use them in your application
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};

fetchProducts();
// Call the function
// rationItems = fetchProducts();
function Items({ currentItems, selectedBrands, selectedCategories }) {
  const filteredItems = currentItems.filter((item) => {
    const isBrandSelected =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) => brand.title === item.brand);

    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => category.title === item.cat);

    return isBrandSelected && isCategorySelected;
  });

  return (
    <>
      {rationItems.map((item) => (
        <div key={item._id} className="w-full">
          <Product
            _id={item._id}
            img={item.images} // Changed from item.img to item.images based on schema
            productName={item.name} // Changed from item.productName to item.name
            price={item.price}
            description={item.description} // Changed from item.des to item.description
            badge={true} // Assuming you want to always show badge
            status={item.stockStatus} // Changed from item.status to item.stockStatus
          />
        </div>
      ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const selectedBrands = useSelector(
    (state) => state.orebiReducer.checkedBrands
  );
  const selectedCategories = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          currentItems={currentItems}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
        />{" "}
      </div>
    </div>
  );
};

export default Pagination;

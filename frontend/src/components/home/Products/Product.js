import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { toast } from "react-toastify";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) =>
    String(_id)
      .toLowerCase()
      .split(" ")
      .join("");
  const rootId = idString(_id);
  const navigate = useNavigate();
  const productItem = props;

  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: props._id,
        name: props.productName,
        quantity: 1,
        image: props.img,
        badge: props.badge,
        price: props.price,
        colors: props.color,
      })
    );
    toast.success("Product added to cart");
  };

  return (
    <div className="w-64 h-96 relative group bg-white shadow-lg">
      <div className="relative w-full h-2/3 overflow-hidden">
        <div
          onClick={handleProductDetails}
          className="cursor-pointe bg-red-300r"
        >
          <img
            src={props.img}
            alt={props.productName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-6 left-8">
          {/* {props.badge && <Badge text="New" />} */}
        </div>
        <div className="w-full h-24 absolute bg-white -bottom-24 group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
              onClick={handleAddToCart}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-1/3 flex flex-col gap-1 px-4 py-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">{props.price}</p>
        </div>
        <div>
          <p
            className={`text-[18px] font-bold ${
              props.status ? "text-green-300" : "text-red-400"
            }`}
          >
            {props.status ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;

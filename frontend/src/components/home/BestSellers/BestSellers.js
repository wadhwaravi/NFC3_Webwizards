import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img="https://w7.pngwing.com/pngs/703/631/png-transparent-cereal-rice-food-whole-grain-wheat-whole-grains-nutrition-oat-bran-thumbnail.png"
          productName="Pulses"
          price="35.00"
          color="Brown"
          badge={true}
          status={true}
          des="Discover a variety of nutritious pulses, packed with protein and essential nutrients, perfect for your everyday meals."
        />
        <Product
          _id="1012"
          img="https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c="
          productName="Rice"
          price="20"
          color="White"
          badge={false}
          status={true}
          des="Discover a variety of nutritious pulses, packed with protein and essential nutrients, perfect for your everyday meals."
        />
        <Product
          _id="1013"
          img="https://vamshifarms.com/cdn/shop/files/ecommified_httpss.mj.run1YPvs8udvp4_toor_dal_yellow_pusles_in_a_81c0e10d-f0ed-4888-b86a-2168b1a0c6ad.png?v=1720156594"
          productName="Dal"
          price="25.00"
          color="Yellow"
          badge={true}
          status={true}
          des="Discover a variety of nutritious pulses, packed with protein and essential nutrients, perfect for your everyday meals."
        />
        <Product
          _id="1014"
          img="https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg"
          productName="Sugar"
          price="20"
          color="White"
          badge={false}
          status={true}
          des="Discover a variety of nutritious pulses, packed with protein and essential nutrients, perfect for your everyday meals."
        />
      </div>
    </div>
  );
};

export default BestSellers;

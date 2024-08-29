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
          img="https://vamshifarms.com/cdn/shop/files/ecommified_httpss.mj.run1YPvs8udvp4_toor_dal_yellow_pusles_in_a_81c0e10d-f0ed-4888-b86a-2168b1a0c6ad.png?v=1720156594"
          productName="Wheat"
          price="35.00"
          color="Brown"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img="https://vamshifarms.com/cdn/shop/files/ecommified_httpss.mj.run1YPvs8udvp4_toor_dal_yellow_pusles_in_a_81c0e10d-f0ed-4888-b86a-2168b1a0c6ad.png?v=1720156594"
          productName="Rice"
          price="180.00"
          color="White"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img="https://vamshifarms.com/cdn/shop/files/ecommified_httpss.mj.run1YPvs8udvp4_toor_dal_yellow_pusles_in_a_81c0e10d-f0ed-4888-b86a-2168b1a0c6ad.png?v=1720156594"
          productName="Dal"
          price="25.00"
          color="Yellow"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img="https://vamshifarms.com/cdn/shop/files/ecommified_httpss.mj.run1YPvs8udvp4_toor_dal_yellow_pusles_in_a_81c0e10d-f0ed-4888-b86a-2168b1a0c6ad.png?v=1720156594"
          productName="Sugar"
          price="220.00"
          color="White"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;

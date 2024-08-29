import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    // Debugging information
    console.log("Current Location State:", location.state);

    // Update prevLocation based on the state data
    setPrevLocation(location.state ? location.state.data : "");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About Raction Ease" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Raction Ease</span>{" "}
          is dedicated to transforming ration distribution systems in urban slums. 
          Our platform provides a digital solution to streamline the process, ensuring that resources reach those in need efficiently and accurately.
          <br />
          <br />
          Our mission is to empower urban slum communities by making ration management more transparent, accessible, and effective. We leverage technology to support local governance and improve the quality of life for those in underserved areas.
        </h1>
        <Link to="/contact">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

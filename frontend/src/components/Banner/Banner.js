import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../designLayouts/Image";
import './banner.css'; 
// Image URLs
const bannerImgOne = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMSWVNMYzSsu8OsGItr6W2MMaJhODXj6wNIA&s";
const bannerImgTwo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85FPubXxL5ilDMv-WIZm-utnyUBwesxW3bw&s";
const bannerImgThree = "data:image/jpeg;base64,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";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    style={{
      position: "relative",
      backgroundColor: "#F5F5F3", // Gray background color
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Center vertically
    }}
  >
    <div
      style={{
        maxWidth: "450px", // Adjust the maxWidth as needed
        marginRight: "100px", // Add margin between text/button and image
      }}
    >
      <h1
        style={{
          marginBottom: "15px",
          fontSize: "2.5rem", // Adjust the font size as needed
          color: "#000", // Black color
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "1.5rem", // Adjust the font size as needed
          color: "#666", // Gray color
        }}
      >
        {Subtext}
      </p>

      <Link to={buttonLink}>
        <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
    <div className="image-container">
      <Image imgSrc={imgSrc} />
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Shop Your Ration Efficiently",
      Subtext:
        "Browse our comprehensive selection of essential items with ease. Access your digital ration card benefits quickly and conveniently.",
      buttonLink: "/offer",
      buttonText: "Shop Now",
    },
    {
      imgSrc: bannerImgTwo,
      text: "Empowering Urban Communities",
      Subtext:
        "Dedicated to enhancing the lives of urban slum residents through innovative digital ration card solutions. Learn more about our mission and impact.",
      buttonLink: "/shop",
      buttonText: "About Us",
    },
    {
      imgSrc: bannerImgThree,
      text: "Facing Challenges? We’re Here to Help!",
      Subtext:
        "Encountering issues with your ration card or need assistance? Contact us for support and solutions tailored to your needs.",
      buttonLink: "/contact",
      buttonText: "Contact Us",
    },

    // Add more slides as needed
  ];

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

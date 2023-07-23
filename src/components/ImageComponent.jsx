import React, { useEffect, useState } from "react";

import banner_mobile from "../assets/banner_mobile.png";
import banner_mid from "../assets/banner_mid.png";
import banner_large from "../assets/banner_large.png";

const ImageComponent = () => {
  const [screenSize, setScreenSize] = useState("medium"); // Default to medium size

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScreenSize("mobile");
      } else if (width <= 768) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    // Event listener to check for changes in screen size
    window.addEventListener("resize", checkScreenSize);

    // Initial check on component mount
    checkScreenSize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      {screenSize === "mobile" && (
        <img
          src={banner_mobile}
          width="100%"
          alt="mobile banner"
        />
      )}
      {screenSize === "medium" && (
        <img src={banner_mid} width="100%" alt="medium screen banner" />
      )}
      {screenSize === "large" && (
        <img src={banner_large} width="100%" alt="large screen banner" />
      )}
    </div>
  );
};

export default ImageComponent;

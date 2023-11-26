import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../App.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 1500;

    setIsVisible(scrollY > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="arrow-icon" />
    </div>
  );
};

export default ScrollToTop;

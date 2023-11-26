import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";

const certificatesData = [
  {
    id: 1,
    imageSrc: process.env.PUBLIC_URL + "./assets/Epicode.jpg",
    height: "450px",
  },
  {
    id: 2,
    imageSrc: process.env.PUBLIC_URL + "./assets/inglesec1.jpg",
  },
];

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <div className="arrow-container"></div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <div className="arrow-container"></div>
  </div>
);

const CertificateItem = ({ certificate }) => (
  <div
    className="certificate-item"
    style={
      certificate.id === 2 ? { maxHeight: "450px", overflowY: "auto" } : {}
    }
  >
    {certificate.imageSrc ? (
      <img
        src={certificate.imageSrc}
        alt={`Certificate ${certificate.id}`}
        style={
          certificate.id === 2
            ? { maxWidth: "100%", height: "auto", borderRadius: "8px" }
            : {}
        }
      />
    ) : null}
  </div>
);

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="certificates" className="certificates-container">
      <h2>Certificates</h2>
      <Slider {...settings}>
        {certificatesData.map((certificate) => (
          <CertificateItem key={certificate.id} certificate={certificate} />
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;

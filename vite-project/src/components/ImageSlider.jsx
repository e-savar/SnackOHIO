import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 1s, opacity 1s", // Add transitions for transform and opacity
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const highlightedDotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: "orange", // Change the color to indicate it's highlighted
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transformValue, setTransformValue] = useState("scale(1.08)"); // Initial scale value
  const [opacityValue, setOpacityValue] = useState(0);

  const slideStylesWithBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    transform: transformValue,
    opacity: opacityValue,
  };

  const goToPrevious = () => {
    setTransformValue("scale(1.08)"); // Set the scaling value for transition
    setOpacityValue(0); // Set the opacity to 0
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setTransformValue("scale(1.08)"); // Set the scaling value for transition
    setOpacityValue(0); // Set the opacity to 0
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    setTransformValue("scale(1.08)"); // Set the scaling value for transition
    setOpacityValue(0); // Set the opacity to 0
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // After the opacity has transitioned to 0, update the opacity to 1 and scale to 1
    if (opacityValue === 0) {
      setTimeout(() => {
        setOpacityValue(1);
        setTransformValue("scale(1)");
      }, 1000); // 1 second for the transition
    }
  }, [opacityValue]);

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      {/* Wrap the image in a Link component */}
      <Link to="/products">
        <div style={slideStylesWithBackground}></div>
      </Link>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={slideIndex === currentIndex ? highlightedDotStyle : dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
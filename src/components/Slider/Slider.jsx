import "./Slider.css";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import SliderArrow from "../SliderArrow";

function Slider({ collection, pages, handlePageChange }) {
  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    sliderRef.current.style.setProperty("--slider-index", currentIndex);
    handlePageChange(currentIndex);
  }, [currentIndex]);

  const generateTiles = () => {
    return collection.map((item) => (
      <img src={item.img_url} key={item.id} alt={item.title} />
    ));
  };

  const limitRange = (value) => {
    return Math.min(Math.max(value, 0), pages - 1);
  };

  const onSliderLeft = () => {
    setCurrentIndex(limitRange(currentIndex - 1));
  };

  const onSliderRight = () => {
    setCurrentIndex(limitRange(currentIndex + 1));
  };

  return (
    <div className="slider-container">
      <SliderArrow
        direction="left"
        handleClick={onSliderLeft}
        hidden={currentIndex <= 0}
      />
      <div className="slider" ref={sliderRef}>
        {generateTiles()}
      </div>
      <SliderArrow
        direction="right"
        handleClick={onSliderRight}
        hidden={currentIndex >= pages - 1}
      />
    </div>
  );
}

Slider.propTypes = {
  collection: PropTypes.arrayOf(Object).isRequired,
  pages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Slider;

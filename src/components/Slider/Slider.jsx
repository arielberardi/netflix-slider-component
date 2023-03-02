import "./Slider.css";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function Slider({ tiles, page }) {
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.style.setProperty("--slider-index", page);
  }, [page]);

  const generateTiles = () => {
    return tiles.map((item) => (
      <img src={item.img_url} key={item.id} alt={item.title} />
    ));
  };

  return (
    <div className="slider" ref={sliderRef}>
      {generateTiles()}
    </div>
  );
}

Slider.propTypes = {
  tiles: PropTypes.arrayOf(Object).isRequired,
  page: PropTypes.number.isRequired,
};

export default Slider;

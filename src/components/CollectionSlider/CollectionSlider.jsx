import "./CollectionSlider.css";
import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import PaginationBar from "../PaginationBar";
import SliderArrow from "../SliderArrow";
import Slider from "../Slider";

function CollectionSlider({ title, width, tiles }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const paginationRef = useRef();
  const numberOfPages = Math.ceil(tiles.length / width);

  useEffect(() => {
    paginationRef.current.style.visibility = isMouseOver ? "visible" : "hidden";
  }, [isMouseOver]);

  const generatePageBars = () => {
    const pageBars = [];

    for (let i = 0; i < numberOfPages; i += 1) {
      pageBars.push(<PaginationBar key={i} actived={i === currentPage} />);
    }

    return pageBars;
  };

  const limitRange = (value) => Math.min(Math.max(value, 0), numberOfPages - 1);

  const onSliderLeft = () => setCurrentPage(limitRange(currentPage - 1));
  const onSliderRight = () => setCurrentPage(limitRange(currentPage + 1));
  const onCollectionMouseOut = () => setIsMouseOver(false);
  const onCollectionMouseOver = () => setIsMouseOver(true);

  return (
    <div
      className="collection-container"
      onMouseOver={onCollectionMouseOver}
      onFocus={onCollectionMouseOver}
      onMouseOut={onCollectionMouseOut}
      onBlur={onCollectionMouseOut}
    >
      <div className="collection-header">
        <h2 className="collection-title">{title}</h2>
        <div className="collection-pagination" ref={paginationRef}>
          {generatePageBars()}
        </div>
      </div>
      <div className="slider-container">
        <SliderArrow
          direction="left"
          handleClick={onSliderLeft}
          hidden={currentPage === 0 || !isMouseOver}
        />
        <Slider tiles={tiles} page={currentPage} />
        <SliderArrow
          direction="right"
          handleClick={onSliderRight}
          hidden={currentPage >= numberOfPages - 1 || !isMouseOver}
        />
      </div>
    </div>
  );
}

CollectionSlider.defaultProps = {
  width: 4,
};

CollectionSlider.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  tiles: PropTypes.arrayOf(Object).isRequired,
};

export default CollectionSlider;

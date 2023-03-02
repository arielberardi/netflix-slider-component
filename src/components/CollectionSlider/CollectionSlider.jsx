import "./CollectionSlider.css";
import PropTypes from "prop-types";
import { useState } from "react";
import PaginationBar from "../PaginationBar";
import Slider from "../Slider";

function CollectionSlider({ title, width, data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = data.length / width;

  const generatePageBars = () => {
    const pageBars = [];

    for (let i = 0; i < numberOfPages; i += 1) {
      pageBars.push(<PaginationBar key={i} actived={i === currentPage} />);
    }

    return pageBars;
  };

  return (
    <div className="collection-container">
      <div className="collection-header">
        <h2 className="collection-title">{title}</h2>
        <div className="collection-pagination">{generatePageBars()}</div>
      </div>
      <div className="collection-body">
        <Slider
          collection={data}
          pages={numberOfPages}
          handlePageChange={(page) => setCurrentPage(page)}
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
  data: PropTypes.arrayOf(Object).isRequired,
};

export default CollectionSlider;

import "./SliderArrow.css";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

function SliderArrow({ direction, handleClick, hidden }) {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.style.visibility = hidden ? "hidden" : "visible";
  }, [hidden]);

  return (
    <button
      className={`slider-arrow ${direction}`}
      type="button"
      onClick={(event) => handleClick(event)}
      ref={buttonRef}
    >
      {direction === "left" ? <>&#8249;</> : <>&#8250;</>}
    </button>
  );
}

SliderArrow.defaultProps = {
  direction: "left",
  hidden: false,
};

SliderArrow.propTypes = {
  direction: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};

export default SliderArrow;

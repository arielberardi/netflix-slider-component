import "./PaginationBar.css";
import PropTypes from "prop-types";

function PaginationBar({ actived }) {
  let classList = "pagination-bar";
  classList += actived ? " active" : "";

  return <div className={classList} />;
}

PaginationBar.defaultProps = {
  actived: false,
};

PaginationBar.propTypes = {
  actived: PropTypes.bool,
};

export default PaginationBar;

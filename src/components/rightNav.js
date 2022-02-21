import React from 'react';
import { bool, func } from 'prop-types';
import "../css/corsel.css";

const RightNav = React.memo(({
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-right-nav opacity-4 hover:opacity-1 p-0  h-4"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      {/* <SVG icon="right" viewBox="6 0 12 24" /> */}
        <i class="fa-solid fa-greater-than text-white"></i>
    </button>
  );
});

RightNav.displayName = 'RightNav';

RightNav.propTypes = {
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default RightNav;